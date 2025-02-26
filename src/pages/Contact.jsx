function Contact() {
  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
    { id: 4, name: "Customer Support Agents", value: "1,200+" }, // New stat
    { id: 5, name: "Global Offices", value: "25+" }, // New stat
    { id: 6, name: "Years in Business", value: "10+" }, // New stat
  ];

  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contáctanos
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            We'd love to hear from you! Whether you have questions, feedback, or
            just want to connect, please don't hesitate to reach out.
          </p>
        </div>
        <div className="border-t border-gray-300 my-12"></div>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Contact;
