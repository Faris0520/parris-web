# My Simple Personal Website

Personal portfolio website for Faris Daffa (parris).

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fparris.lol)](https://parris.lol)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/cf8b2c4a-b38b-4ec8-af29-033c917f7d4d" />


## 🔗 Live Website

Visit: [https://parris.lol](https://parris.lol)

## ✨ Features

- **Animated Landing Page** - Beautiful particle.js background with glassmorphism design
- **Discord Status Integration** - Real-time Discord status using Lanyard API
- **Spotify Integration** - Display currently playing music
- **Responsive Design** - Mobile-friendly layout with Bootstrap
- **About Page** - Personal information and Spotify playlist embed
- **Social Links** - Quick access to GitHub, Instagram, Twitter, LinkedIn, and Spotify

## 🛠️ Technologies Used

- **Frontend:**
  - HTML5, CSS3, JavaScript
  - Bootstrap 4.5.2
  - jQuery 3.5.1
  - Particles.js
  - Tachyons CSS
  - Animate.css
  - Font Awesome icons

- **Backend:**
  - Node.js
  - Express.js

- **APIs:**
  - [Lanyard API](https://api.lanyard.rest/) - Discord status
  - Spotify Web API

## 📁 Project Structure

```
parris-web/
├── index.html          # Main landing page
├── about/
│   └── index.html      # About page
├── assets/
│   ├── script.js       # Main JavaScript file
│   ├── umu.css         # Custom styles
│   ├── clock.js        # Clock functionality
│   └── bg.webp         # Background image
├── package.json        # Node.js dependencies
└── README.md          # This file
```

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Faris0520/parris-web.git
   cd parris-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` (or the port specified by your server)

## 🔧 Configuration

To customize the website for your own use:

1. **Discord Status**: Update the Discord user ID in `assets/script.js`:
   ```javascript
   $.get("https://api.lanyard.rest/v1/users/YOUR_DISCORD_ID", ...)
   ```

2. **Personal Information**: Edit the content in `index.html` and `about/index.html`

3. **Social Links**: Update the social media links in `index.html`

4. **Spotify Playlist**: Replace the Spotify embed URL in `about/index.html`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

