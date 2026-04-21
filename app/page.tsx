import { BadgePercent, PaintRoller, ShieldCheck, Clock } from "lucide-react";
import { Users, ThumbsUp } from "lucide-react";
import { Phone, MessageCircle } from "lucide-react";
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
  

<div className="grid grid-cols-4 gap-2 mt-6">

  {[
    {
      icon: <BadgePercent className="w-4 h-4 text-green-600" />,
      title: "Uygun Fiyat",
      desc: "Bütçe dostu",
    },
    {
      icon: <PaintRoller className="w-4 h-4 text-green-600" />,
      title: "Temiz İşçilik",
      desc: "Pürüzsüz",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-green-600" />,
      title: "Garantili",
      desc: "İşçilik",
    },
    {
      icon: <Clock className="w-4 h-4 text-green-600" />,
      title: "Zamanında",
      desc: "Teslim",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 p-2 rounded-xl text-center shadow-sm"
    >
      {/* ICON */}
      <div className="flex justify-center mb-1">
        <div className="w-7 h-7 flex items-center justify-center border border-green-200 rounded-lg bg-green-50">
          {item.icon}
        </div>
      </div>

      {/* TITLE */}
      <p className="font-semibold text-[10px] text-gray-800 leading-tight">
        {item.title}
      </p>

      {/* DESC */}
      <p className="text-[9px] text-gray-500 leading-tight">
        {item.desc}
      </p>
    </div>
  ))}

</div>
        {/* CTA */}
      

<div className="mt-10 w-full max-w-md mx-auto space-y-4">

  {/* ÜST BİLGİ KUTUSU */}
  <div className="flex items-center gap-3 bg-green-100 text-green-800 p-4 rounded-2xl">

    <div className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full">
      <Phone className="w-5 h-5" />
    </div>

    <div className="text-left">
      <p className="font-semibold text-sm">
        Bir telefon kadar yakınız!
      </p>
      <p className="text-xs text-green-700">
        Ücretsiz keşif için hemen arayın.
      </p>
    </div>

  </div>

  {/* ANA BUTON */}
  <a
    href="tel:+905456433535"
    className="w-full flex flex-col items-center justify-center bg-[#0f172a] text-white py-4 rounded-2xl shadow-lg hover:opacity-90 transition"
  >
    <div className="flex items-center gap-2 font-semibold">
      <Phone className="w-4 h-4" />
      Ücretsiz Keşif İsteyin
    </div>
    <span className="text-xs text-gray-300 mt-1">
      Hemen arayın, ücretsiz keşif fırsatını kaçırmayın!
    </span>
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/905456433535"
    target="_blank"
    rel="noreferrer"
    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-4 rounded-2xl font-semibold text-green-600 shadow-sm hover:bg-gray-50 transition"
  >
    <MessageCircle className="w-5 h-5" />
    WhatsApp’tan Yazın
  </a>

  {/* ALT GÜVEN ALANI */}
  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 text-center">

    <div className="flex flex-col items-center text-xs text-gray-600">
      <ShieldCheck className="w-5 h-5 text-green-600 mb-1" />
      <p className="font-semibold">Güvenilir Hizmet</p>
      <span className="text-[10px] text-gray-500">
        İstanbul’un her noktasına hizmet
      </span>
    </div>

    <div className="flex flex-col items-center text-xs text-gray-600">
      <Users className="w-5 h-5 text-green-600 mb-1" />
      <p className="font-semibold">Deneyimli Ekip</p>
      <span className="text-[10px] text-gray-500">
        Alanında uzman boya ustaları
      </span>
    </div>

    <div className="flex flex-col items-center text-xs text-gray-600">
      <ThumbsUp className="w-5 h-5 text-green-600 mb-1" />
      <p className="font-semibold">%100 Memnuniyet</p>
      <span className="text-[10px] text-gray-500">
        Önceliğimiz müşteri memnuniyeti
      </span>
    </div>

  </div>

</div>

      </div>
    </section>
  );
}