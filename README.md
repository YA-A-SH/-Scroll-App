🌌 MoonLight - Parallax Scrolling Landing Page
This is a visually stunning landing page that showcases the power of Parallax Scrolling Effects. I built this during my early journey to understand how JavaScript can breathe life into static CSS designs.

⏳ The Backstory
Built in: April 2025.

Inspired by: A tutorial from Abdelrahman Gamal on YouTube.

The Goal: To move away from static layouts and explore how to make elements (stars, moon, mountains) move at different speeds while scrolling.

🛠️ Technical Breakdown
The magic happens in the window.onscroll function. Here’s how I handled it:

Dynamic Positioning: I used scrollY to calculate the position of each element. By multiplying the scroll value (e.g., value * 4), I created an illusion of depth—making the moon move faster than the stars.

Visual Logic: * The Moon moves downwards as you scroll.

The Boat moves both down and sideways, making it look like it's sailing.

The H1 Header grows and stays fixed until a certain point, then disappears to let the content take over.

CSS Blend Modes: I used mix-blend-mode: screen on the moon image to make it blend perfectly with the dark night background.

🚀 Key Features
Clean, minimalist navigation bar.

Smooth gradient background that transitions into a deep night sky.

Fully responsive images using object-fit: cover.

🧠 Reflections
Looking back, this project was my first real introduction to Mathematics in UI. Calculating multipliers for each layer to create a realistic 3D effect without using a heavy library was a huge win for me. It’s a simple script, but the visual impact is huge!

Note: I used AI to help write this README because it captures the technical details of the parallax effect in a professional and clear way.
