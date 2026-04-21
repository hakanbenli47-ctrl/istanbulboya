export default function Page() {
  return (
    <section className="relative w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center overflow-hidden">

      {/* GÖRSEL */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src="/gorsel.jpg"
          alt="boya"
          className="
            h-full
            w-[75%] sm:w-[65%] md:w-[45%]
            object-cover
            object-right
          "
        />

        {/* SOL OKUNURLUK KATMANI */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3f3f3] via-[#f3f3f3]/90 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center md:text-center">

        {/* LOGO */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="text-black">İstanbul </span>
          <span className="text-green-600">Boya</span>
        </h1>

        {/* ALT */}
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Profesyonel Boya & Badana Hizmeti
        </p>

        {/* BADGE */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-8 h-[1px] bg-gray-300" />
          <div className="border border-green-600 text-green-600 px-4 py-1 rounded-full text-xs md:text-sm font-semibold bg-white/60 backdrop-blur">
            İSTANBUL’UN GÜVENİLİR BOYACISI
          </div>
          <div className="w-8 h-[1px] bg-gray-300" />
        </div>

        {/* BAŞLIK */}
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mt-6 text-gray-900">
          Evinizi{" "}
          <span className="text-green-600">İlk Günkü</span>{" "}
          Gibi Yeniliyoruz
        </h2>

        {/* METİN */}
        <div className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed space-y-2 max-w-xl mx-auto">

          <p>
            <span className="text-green-600 font-semibold">Uygun fiyat</span>, titiz işçilik ve zamanında teslim
          </p>

          <p>ile yaşam alanlarınızı yeniliyoruz.</p>

          <p className="font-semibold text-gray-800">
            Temiz, kokusuz ve uzun ömürlü boya
          </p>

        </div>

        {/* KARTLAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">

          {[
            ["Uygun Fiyat", "Bütçe dostu"],
            ["Temiz İşçilik", "Pürüzsüz sonuç"],
            ["Garantili", "İşçilik garantisi"],
            ["Zamanında", "Söz verdiğimiz gün"],
          ].map((item, i) => (
            <div key={i} className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-sm">
              <p className="font-semibold text-gray-800 text-sm">{item[0]}</p>
              <p className="text-xs text-gray-500">{item[1]}</p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 items-center">

          <a
            href="tel:+905456433535"
            className="w-full max-w-sm bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-xl font-semibold text-base shadow-lg hover:scale-[1.02] transition"
          >
            📞 Ücretsiz Keşif
          </a>

          <a
            href="https://wa.me/905456433535"
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-sm border border-gray-200 bg-white py-4 rounded-xl font-semibold text-base text-gray-800 hover:bg-gray-50 transition"
          >
            💬 WhatsApp’tan Yaz
          </a>

        </div>

      </div>
    </section>
  );
}