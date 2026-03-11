 function Timeline() {
  const data = [
    {
      company: "Cognizant – Pune",
      date: "Sep 2016 - July 2020",
      role: "Experience Designer",
      color: "bg-green-900"
    },
    {
      company: "Sugee , Mumbai",
      date: "Sep 2020 - July 2023",
      role: "UI/UX Designer",
      color: "bg-yellow-400"
    },
    {
      company: "Cinetstox – Pune",
      date: "Sep 2023",
      role: "Lead UX Designer",
      color: "bg-green-900"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="relative">
        
        {/* Vertical Dotted Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] border-l-2 border-dashed border-gray-300"></div>

        {data.map((item, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-3 items-center mb-16"
          >
            {/* LEFT SIDE */}
            <div className="md:text-right md:pr-10">
              <h3 className="font-semibold text-lg text-gray-800">
                {item.company}
              </h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>

            {/* CENTER DOT */}
            <div className="flex justify-center relative">
              <div
                className={`w-5 h-5 rounded-full ${item.color} border-4 border-white shadow-md`}
              ></div>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:pl-10 mt-6 md:mt-0">
              <h3 className="font-semibold text-lg text-gray-800">
                {item.role}
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis lacus nunc, posuere in justo vulputate,
                bibendum sodales.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Timeline;