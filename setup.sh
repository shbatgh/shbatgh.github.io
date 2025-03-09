# Install Hugo (if not already installed)
# On macOS:
# brew install hugo
# On Windows:
# choco install hugo-extended

# Create a new Hugo site
hugo new site my-digital-garden
cd my-digital-garden

# Initialize git repository
git init

# Add PaperMod theme as git submodule
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod