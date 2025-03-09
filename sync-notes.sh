#!/bin/bash
# Script to sync Obsidian vault to Quartz content directory

# Set paths
OBSIDIAN_VAULT="path/to/your/obsidian/vault"
QUARTZ_CONTENT="path/to/your/quartz/content"

# Copy published notes
rsync -av --include="*.md" --include="*/" --exclude="*" \
  --prune-empty-dirs \
  "$OBSIDIAN_VAULT/" "$QUARTZ_CONTENT/"

# Copy attachments
mkdir -p "$QUARTZ_CONTENT/attachments"
rsync -av --include="*.png" --include="*.jpg" --include="*.gif" --include="*.pdf" \
  --include="*/" --exclude="*" \
  "$OBSIDIAN_VAULT/" "$QUARTZ_CONTENT/attachments/"

echo "Sync completed!"