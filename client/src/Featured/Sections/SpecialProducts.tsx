export default function SpecialProducts() {
  const specials = [
    {
      title: "Essential Basics",
      offer: "UP TO 30% OFF",
      img: "https://themesflat.co/html/ecomus/images/collections/collection-39.jpg",
    },
    {
      title: "Athleisure Wear",
      offer: "UP TO 30% OFF",
      img: "https://themesflat.co/html/ecomus/images/collections/collection-40.jpg",
    },
    {
      title: "Seasonal Favorites",
      offer: "UP TO 30% OFF",
      img: "https://themesflat.co/html/ecomus/images/collections/collection-41.jpg",
    },
  ];

  return (
    <section className="py-20 px-[50px]  mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specials.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-sm"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

    
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center pointer-events-none">
              <div className="flex flex-col items-center gap-3">
                <p className="text-[12px] font-bold text-black tracking-widest">
                  {item.offer}
                </p>
                <h2 className="text-[28px] font-medium text-black mb-4">
                  {item.title}
                </h2>
                <button className="pointer-events-auto bg-white text-black px-7 py-3 rounded-sm text-[14px] font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-sm uppercase tracking-tight">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
