// Script to inject fluid.css into all portfolio pages
const fs = require('fs');
const path = require('path');

const pagesDir = __dirname;
const fluidLink = '    <link rel="stylesheet" href="fluid.css">';

// Get all HTML files
const htmlFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html') && !f.includes('backup'));

htmlFiles.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has fluid.css
    if (content.includes('fluid.css')) {
        console.log(`Skipping ${file} - already has fluid.css`);
        return;
    }

    // Find the last <link> tag in head and insert after it
    const linkRegex = /(<link[^>]+>)(?![\s\S]*<link)/;
    const match = content.match(linkRegex);

    if (match) {
        content = content.replace(match[0], match[0] + '\n' + fluidLink);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`Could not find link tag in ${file}`);
    }
});

console.log('Done!');
