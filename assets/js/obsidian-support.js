document.addEventListener('DOMContentLoaded', () => {
  // Process Wikilinks
  const content = document.querySelector('.post-content');
  if (content) {
    // Convert [[WikiLinks]] to Hugo internal links
    content.innerHTML = content.innerHTML.replace(
      /\[\[(.*?)\]\]/g, 
      (match, p1) => {
        const parts = p1.split('|');
        const linkPath = parts[0].trim().toLowerCase().replace(/\s+/g, '-');
        const linkText = parts.length > 1 ? parts[1].trim() : parts[0].trim();
        return `<a href="/${linkPath}/">${linkText}</a>`;
      }
    );

    // Support for Obsidian callouts
    content.innerHTML = content.innerHTML.replace(
      /&gt; \[!(\w+)\](.*?)(?:\r\n|\n)((.*?)(?:\r\n|\n))+/g,
      (match, type, title, content) => {
        const calloutClass = type.toLowerCase();
        const calloutTitle = title.trim();
        const calloutContent = match
          .replace(/&gt; \[!\w+\].*?(?:\r\n|\n)/, '')
          .replace(/&gt; /g, '')
          .trim();
        
        return `<div class="callout ${calloutClass}">
          <div class="callout-title">${calloutTitle}</div>
          <div class="callout-content">${calloutContent}</div>
        </div>`;
      }
    );
  }
});