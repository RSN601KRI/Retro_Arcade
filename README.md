# 🎮 Retro Pixel Platformer

Welcome to **Retro Pixel Platformer** – a nostalgic journey back to the golden age of 8-bit gaming! 🚀 Built using **Next.js**, this side-scrolling platformer features beautiful pixel art, fun collectibles, and smooth gameplay mechanics designed to offer a true retro experience for players.

## 🕹️ Features

- 🎨 Retro 8-bit pixel art aesthetic
- 🌍 Side-scrolling platform environment
- 💎 Collectible items (coins, gems, power-ups)
- 🧠 Simple but effective game logic
- 🎵 Chiptune sound effects
- ⚡ Built using modern web technologies: **Next.js**, **Canvas/WebGL**, and **JavaScript/TypeScript**

## 📦 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Rendering**: HTML5 Canvas / WebGL
- **Art Style**: Pixel Art (16x16, 32x32 sprites)
- **Audio**: Chiptune sound effects
- **Styling**: CSS Modules / Tailwind CSS
- **Deployment**: Vercel / Netlify

## 🏗️ Project Structure

```bash
├── public/
│   ├── assets/
│   │   ├── sprites/
│   │   ├── backgrounds/
│   │   └── audio/
├── src/
│   ├── components/
│   │   ├── GameCanvas.tsx
│   │   └── Collectible.tsx
│   ├── styles/
│   ├── pages/
│   │   └── index.tsx
│   ├── utils/
│   │   └── gameEngine.ts
├── README.md
└── next.config.js

```
## 🚀 Getting Started
1. Clone the repo
```
git clone https://github.com/yourusername/retro-pixel-platformer.git
cd retro-pixel-platformer
```

3. Install dependencies
```
npm install
```

4. Run development server
```
npm run dev
Visit http://localhost:3000 to play the game locally.
```

## 🎨 Pixel Art & Assets
All sprites are custom-designed or sourced from free-to-use pixel art libraries such as:

Kenney.nl

OpenGameArt

Itch.io Free Assets

You can add your own sprites in the /public/assets/sprites directory and modify gameEngine.ts for new logic.

## 🧩 Collectibles System
Collectibles include:

💰 Coins (10 points)

💎 Gems (50 points)

🧃 Power-Ups (temporary speed/jump boosts)

Each collectible has its own animation and collision logic, rendered inside the GameCanvas component.

## 📦 Build & Deployment
To build the app for production:

```
npm run build
```
To start the production server:
```
npm start
```
You can deploy this on Vercel with one click.

📸 Screenshots
![Screenshot (2687)](https://github.com/user-attachments/assets/f02a5232-cf63-4d8c-83ca-7f89682920d1)

![Screenshot (2688)](https://github.com/user-attachments/assets/cfe4ace9-a951-4493-8131-c0a61383eba8)

## 🤝 Contributing
Contributions are welcome! 

Feel free to fork the repo and submit pull requests. You can contribute by:

Improving performance

Adding new levels

Creating new collectibles or enemies

Enhancing mobile support

## 📄 License
This project is licensed under the MIT License.
