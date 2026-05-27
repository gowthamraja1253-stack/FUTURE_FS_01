# Gowtham Raja - Premium Developer Portfolio

A modern, highly interactive developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Features a premium dark-mode aesthetic with glassmorphism, 3D tilt effects, and smooth scroll animations.

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up your environment variables (see below)
4. Run `npm run dev` to start the development server

## EmailJS Configuration (Contact Form)

To make the contact form functional, you need to configure EmailJS.

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Add a new Email Service and note your **Service ID**.
3. Create an Email Template and note your **Template ID**.
4. Go to Account -> API Keys and note your **Public Key**.
5. Create a `.env` file in the root directory (you can copy `.env.example`).
6. Add your keys to the `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

> **Note**: These variables are prefixed with `VITE_` so they can be exposed to the Vite build process.

## Deployment

This project is configured to be easily deployed on Vercel. 
Make sure you add the three `VITE_EMAILJS_` environment variables in your Vercel project settings before deploying, otherwise the contact form will not work in production.

Run `npm run build` to generate a production build.
