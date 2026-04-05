# 🏎️ Scroll-Driven Hero Section Animation

A high-performance, scroll-linked hero section built with **Next.js**, **Tailwind CSS**, and **GSAP**. 

This project demonstrates how to create a premium, Apple-style scroll experience where user scrolling controls a timeline animation (scaling and moving a 3D-like object), rather than relying on standard time-based autoplay.

## ✨ Features

* **Scroll-Scrubbing Animation:** The central visual element scales and translates fluidly based on the user's scroll depth (`scrub: 1`).
* **Section Pinning:** The hero section locks into place (`pin: true`) while the animation completes, releasing only when the object fills the screen.
* **Initial Load Sequence:** Staggered, time-based entrance animations for typography and statistics using `gsap.timeline()`.
* **Hardware Accelerated:** Animations rely strictly on CSS transforms (`scale`, `translateY`) and `opacity` to bypass layout thrashing and maintain a solid 60fps.
* **Optimized Image Delivery:** Uses Next.js `<Image>` component with `fill` properties for perfect responsiveness and automatic WebP conversion.
* **Fully Responsive:** Adapts seamlessly to mobile, tablet, and desktop viewports using Tailwind utility classes.

## 🛠️ Tech Stack

* **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation Engine:** [GSAP (GreenSock)](https://gsap.com/)
* **Scroll Integration:** GSAP ScrollTrigger & `@gsap/react`
* **Language:** TypeScript / React

---

## 🚀 Setup & Structure

Make sure you have Node.js installed (v18.17 or higher recommended). 

**1. Clone the Repository**
```bash
git clone https://github.com/Sachin27182003/scroll-animation-learning.git
cd scroll-animation-assignment
```

**2. Install Dependencies & Run**
```bash
npm install
npm run dev
```

**3. Project Structure**
Open `http://localhost:3000` in your browser. The code is organized as follows:
```text
├── app/
│   ├── layout.tsx         # Root layout and global fonts
│   ├── page.tsx           # Main entry point (Imports HeroSection)
│   └── globals.css        # Tailwind directives
├── components/
│   └── HeroSection.tsx    # Core GSAP animation logic and UI
├── public/                # Local images (e.g., local-car.png)
└── tailwind.config.ts     # Tailwind configuration
```

---

## 🎨 Customizing the Animation

You can easily tweak the feel of the animation by adjusting the variables inside the `useGSAP` hook in `components/HeroSection.tsx`:

* **Change the End Zoom Size:** Modify the `scale: 3.5` property inside the `gsap.to()` block. Higher numbers = bigger zoom.
* **Change the Scroll Duration:** The `h-screen` container combined with `end: "+=100%"` in ScrollTrigger dictates how long the user must scroll to finish the animation. Change it to `end: "+=200%"` to make the animation last twice as long.
* **Change the Smoothing:** Adjust `scrub: 1` to `scrub: 0.5` for a snappier response to the scroll wheel, or `scrub: true` for zero delay.

## 📜 License

This project is open-source and available for all.

##                  ❤️ Thank Youu for visiting my project !! ❤️