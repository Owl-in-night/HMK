
export default function CardExport ({ image, title, description }) {
  <div className="bg-white dark:bg-stone-800 shadow-lg rounded-lg w-80 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl animate-slide-up-delay-1">
    <img
      src={image}
      alt={title}
      className="mb-4 h-auto max-w-full rounded-lg"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  </div>
};
