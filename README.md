# Modern Portfolio Website

A vibrant, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Vibrant design with colorful gradients and animations
- 🌓 Dark/light mode support
- 📱 Fully responsive layout
- ✨ Smooth animations powered by Framer Motion
- 🚀 Built with Next.js for optimal performance

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Profile Image

The website currently uses a placeholder image. To add your own:

1. Prepare a square image (recommended size: 500x500 pixels)
2. Name it `profile.jpg`
3. Place it in the `public/images/` directory

### Personal Information

Update your personal information in the following files:

- `src/app/page.tsx` - Home page content
- `src/app/about/page.tsx` - About page content
- `src/app/projects/page.tsx` - Projects information
- `src/app/contact/page.tsx` - Contact information

### Colors and Theme

Customize colors in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#6366f1', // Indigo
        light: '#818cf8',
      },
      secondary: {
        DEFAULT: '#f97316', // Orange
        light: '#fb923c',
      },
      accent: {
        DEFAULT: '#ec4899', // Pink
        light: '#f472b6',
      },
      // ...other colors
    }
  }
}
```

## Deployment



## License

This project is licensed under the MIT License - see the LICENSE file for details. 