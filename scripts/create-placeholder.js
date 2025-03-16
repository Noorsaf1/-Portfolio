const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder image
const svgContent = `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="50%" stop-color="#ec4899" />
      <stop offset="100%" stop-color="#f97316" />
    </linearGradient>
  </defs>
  <rect width="500" height="500" fill="url(#grad)" />
  <circle cx="250" cy="180" r="70" fill="#ffffff" />
  <rect x="150" y="280" width="200" height="150" rx="20" fill="#ffffff" />
  <text x="250" y="400" font-family="Arial" font-size="24" text-anchor="middle" fill="#6366f1">Profile Photo</text>
</svg>`;

// Ensure the images directory exists
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Write the SVG file
const svgPath = path.join(imagesDir, 'profile.svg');
fs.writeFileSync(svgPath, svgContent);

console.log(`Created placeholder image at: ${svgPath}`);
console.log('To use your own profile photo:');
console.log('1. Rename your photo to "profile.jpg"');
console.log('2. Place it in the public/images/ directory');
console.log('3. Make sure it\'s square (e.g., 500x500 pixels) for best results'); 