import { useState, useEffect } from 'react';

const images = [
  {
    src: 'https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
    text: 'Push to deploy.',
    link: '/services/deploy',
  },
  {
    src: 'https://tailwindui.com/plus-assets/img/component-images/light-project-app-screenshot.png',
    text: 'SSL certificates.',
    link: '/services/ssl',
  },
  {
    src: 'https://tailwindui.com/plus-assets/img/component-images/dashboard-app-screenshot.png',
    text: 'Database backups.',
    link: '/services/backups',
  },
  {
    src: 'https://tailwindui.com/plus-assets/img/component-images/task-app-screenshot.png',
    text: 'Advanced security.',
    link: '/services/security',
  }
];

export default function SectionTwo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  const { text, src, link } = images[index];

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full relative">
        <img
          src={src}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-white max-w-lg">
            <h2 className="text-5xl font-bold mb-6">{text}</h2>
            <a
              href={link}
              className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition"
            >
              Ver servicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
