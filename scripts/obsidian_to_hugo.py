#!/usr/bin/env python3
import os
import re
import shutil
import argparse
import frontmatter
from datetime import datetime
from pathlib import Path

def convert_wikilinks(content):
    """Convert Obsidian's [[WikiLinks]] to Hugo's internal links."""
    # Handle [[Link]] format
    content = re.sub(r'\[\[([^|\]]+)\]\]', r'[\1](/\1/)', content)
    # Handle [[Link|Text]] format
    content = re.sub(r'\[\[([^|\]]+)\|([^|\]]+)\]\]', r'[\2](/\1/)', content)
    return content

def process_images(content, image_dir, vault_path, hugo_static_path):
    """Process image links and copy images to Hugo static folder."""
    def image_replacer(match):
        image_path = match.group(1)
        # Check if it's a relative path or just a filename
        if not os.path.isabs(image_path):
            full_path = os.path.join(vault_path, image_path)
            if not os.path.exists(full_path) and os.path.exists(os.path.join(vault_path, 'attachments', image_path)):
                full_path = os.path.join(vault_path, 'attachments', image_path)
        else:
            full_path = image_path
        
        # Create target directory if it doesn't exist
        target_dir = os.path.join(hugo_static_path, image_dir)
        os.makedirs(target_dir, exist_ok=True)
        
        # Get just the filename
        filename = os.path.basename(image_path)
        
        # Copy the image
        if os.path.exists(full_path):
            shutil.copy2(full_path, os.path.join(target_dir, filename))
        
        # Return the new image path for Hugo
        return f"![{match.group(2) if match.group(2) else ''}](/images/{filename})"
    
    # Handle Obsidian image format: ![[image.png]]
    content = re.sub(r'!\[\[([^|\]]+)\]\]', r'![](/images/\1)', content)
    
    # Handle markdown image format: ![alt](path)
    content = re.sub(r'!\[(.*?)\]\(([^)]+)\)', image_replacer, content)
    
    return content

def main():
    parser = argparse.ArgumentParser(description='Convert Obsidian notes to Hugo markdown')
    parser.add_argument('vault_path', help='Path to Obsidian vault')
    parser.add_argument('hugo_path', help='Path to Hugo site')
    parser.add_argument('--image-dir', default='images', help='Directory for images in Hugo static folder')
    args = parser.parse_args()
    
    vault_path = os.path.abspath(args.vault_path)
    hugo_content_path = os.path.join(os.path.abspath(args.hugo_path), 'content')
    hugo_static_path = os.path.join(os.path.abspath(args.hugo_path), 'static')
    
    # Create the image directory if it doesn't exist
    os.makedirs(os.path.join(hugo_static_path, args.image_dir), exist_ok=True)
    
    # Process each .md file in the vault
    for root, _, files in os.walk(vault_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, vault_path)
                
                # Skip template files, attachments directory, etc.
                if rel_path.startswith('templates/') or rel_path.startswith('attachments/'):
                    continue
                
                try:
                    # Read the file
                    post = frontmatter.load(file_path)
                    content = post.content
                    
                    # Process content
                    content = convert_wikilinks(content)
                    content = process_images(content, args.image_dir, vault_path, hugo_static_path)
                    
                    # Update or create frontmatter
                    if 'title' not in post:
                        post['title'] = os.path.splitext(file)[0]
                    
                    if 'date' not in post:
                        post['date'] = datetime.now().strftime('%Y-%m-%dT%H:%M:%S')
                    
                    if 'draft' not in post:
                        post['draft'] = False
                    
                    # Create tags if they don't exist
                    if 'tags' not in post:
                        post['tags'] = []
                    
                    # Set the processed content back
                    post.content = content
                    
                    # Create the Hugo content file path
                    hugo_file_name = os.path.splitext(file)[0]
                    hugo_file_dir = os.path.join(hugo_content_path, hugo_file_name)
                    os.makedirs(hugo_file_dir, exist_ok=True)
                    hugo_file_path = os.path.join(hugo_file_dir, 'index.md')
                    
                    # Write the processed file
                    with open(hugo_file_path, 'w', encoding='utf-8') as f:
                        f.write(frontmatter.dumps(post))
                    
                    print(f"Processed: {rel_path} -> {hugo_file_path}")
                
                except Exception as e:
                    print(f"Error processing {file_path}: {str(e)}")

if __name__ == "__main__":
    main()