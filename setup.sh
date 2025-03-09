# Clone Quartz repository
git clone https://github.com/jackyzha0/quartz.git my-digital-garden
cd my-digital-garden

# Remove the .git folder to start fresh
rm -rf .git

# Initialize as a new git repository
git init
git add .
git commit -m "Initial commit: Quartz base"

# Install dependencies
npm install