const fs = require('fs');
const path = require('path');

// Create project placeholder images
const createProjectImage = (id, title, color1, color2) => {
  const svgContent = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#grad)" />
  <rect x="50" y="50" width="700" height="300" rx="15" fill="white" fill-opacity="0.1" stroke="white" stroke-width="2" />
  <text x="400" y="180" font-family="Arial" font-size="36" text-anchor="middle" fill="white" font-weight="bold">${title}</text>
  <text x="400" y="240" font-family="Arial" font-size="24" text-anchor="middle" fill="white">Project ${id}</text>
</svg>`;

  return svgContent;
};

// Ensure the images directory exists
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Project data
const projects = [
  { id: 1, title: "E-handelsplattform", color1: "#6366f1", color2: "#818cf8" },
  { id: 2, title: "Portfolio Webbplats", color1: "#ec4899", color2: "#f472b6" },
  { id: 3, title: "Task Manager App", color1: "#f97316", color2: "#fb923c" }
];

// Create project images
projects.forEach(project => {
  const svgContent = createProjectImage(project.id, project.title, project.color1, project.color2);
  const svgPath = path.join(imagesDir, `project${project.id}.svg`);
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Created project image at: ${svgPath}`);
});

console.log('All project images created successfully!');
console.log('To use your own project images:');
console.log('1. Prepare images with 800x400 dimensions');
console.log('2. Name them "project1.jpg", "project2.jpg", etc.');
console.log('3. Place them in the public/images/ directory'); 