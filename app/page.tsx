import {
  BadgePercent,
  Wrench,
  ShieldCheck,
  Clock,
  Users,
  ThumbsUp,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

export default function Page() {
  return (
    <section className="relative w-full min-h-screen bg-[#f5f5f5] flex items-start md:items-center justify-center overflow-x-hidden">

      {/* GÖRSEL */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src="/gorsel.jpg"
        alt="Özdurmuş Hidrolik teknik servis"
          className="
            h-[420px] md:h-full
            w-full md:w-[45%]
            object-cover
            object-center md:object-right
          "
        />

        {/* MOBİL + MASAÜSTÜ OKUNURLUK */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/5 via-[#f5f5f5]/35 md:via-transparent to-[#f5f5f5]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-5 text-left pt-[280px] md:pt-10 pb-28">

        <div className="max-w-3xl bg-white/92 backdrop-blur-md border border-white/80 shadow-2xl rounded-[28px] md:rounded-[32px] p-5 md:p-10">

          {/* ÜST BADGE */}
          <div className="inline-flex items-center gap-2 bg-black border border-yellow-400 px-4 py-2 rounded-full shadow-lg">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span className="text-yellow-400 text-[11px] md:text-xs font-bold tracking-wide">
              HIZLI SERVİS • TAMİR • BAKIM
            </span>
          </div>

          {/* LOGO */}
          <div className="flex justify-center items-center text-center mt-5">
  <h1 className="text-4xl md:text-6xl font-black leading-none tracking-tight">
    <span className="block text-black">Özdurmuş</span>

    <div className="flex items-center justify-center gap-3 mt-2">
      <div className="w-10 md:w-16 h-[3px] bg-yellow-500 rounded-full" />
      
      <span className="text-yellow-500 drop-shadow-sm">
        Hidrolik
      </span>

      <div className="w-10 md:w-16 h-[3px] bg-yellow-500 rounded-full" />
    </div>
  </h1>
</div>

          {/* ALT YAZI */}
        <p className="mt-4 text-sm md:text-lg text-gray-700 max-w-xl leading-relaxed font-medium">
  Özdurmuş Hidrolik; Gaziantep, Kahramanmaraş, Malatya,
  Şanlıurfa ve Adıyaman çevresinde havalı kriko,
  transpalet, hidrolik sistem tamiri, bakım ve teknik
  servis hizmeti sunar.
</p>

          {/* BAŞLIK */}
          <h2 className="mt-7 md:mt-8 text-3xl md:text-5xl font-extrabold leading-tight text-black max-w-2xl">
  Havalı Kriko, Transpalet ve
  <span className="text-yellow-500 block mt-2">
    Hidrolik Sistem Servisi
  </span>
</h2>

          {/* METİN */}
          <div className="mt-6 space-y-3 max-w-xl">

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-[2px] shrink-0" />
              <p className="text-gray-800 text-sm md:text-base font-medium">
                 havalı kriko ve transpalet arızalarında hızlı müdahale
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-[2px] shrink-0" />
              <p className="text-gray-800 text-sm md:text-base font-medium">
                Hidrolik sistemlerde profesyonel tamir ve düzenli bakım
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-[2px] shrink-0" />
              <p className="text-gray-800 text-sm md:text-base font-medium">
                İş kaybını azaltan, güvenilir ve net servis desteği
              </p>
            </div>

          </div>

          {/* KARTLAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 md:mt-10 max-w-3xl">

            {[
              {
                icon: <BadgePercent className="w-5 h-5 text-yellow-500" />,
                title: "Net Fiyat",
                desc: "Şeffaf hizmet",
              },
              {
                icon: <Wrench className="w-5 h-5 text-yellow-500" />,
                title: "Uzman Servis",
                desc: "Tamir bakım",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-yellow-500" />,
                title: "Güvenilir",
                desc: "Kaliteli işçilik",
              },
              {
                icon: <Clock className="w-5 h-5 text-yellow-500" />,
                title: "Hızlı Çözüm",
                desc: "Servis desteği",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black border border-yellow-500/30 rounded-2xl p-4 shadow-xl"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center mb-3">
                  {item.icon}
                </div>

                <p className="text-white font-semibold text-sm">
                  {item.title}
                </p>

                <p className="text-gray-300 text-xs mt-1">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* TANITIM VİDEOSU */}
        <div className="mt-8 w-full max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-[240px] md:h-[420px] object-cover"
            >
              <source src="/tanitim.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 w-full max-w-md mx-auto space-y-4">

          <div className="flex items-center gap-3 bg-yellow-100 text-yellow-800 p-4 rounded-2xl border border-yellow-200 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded-full shrink-0">
              <Phone className="w-5 h-5" />
            </div>

            <div className="text-left">
              <p className="font-semibold text-sm">
                Arıza ve bakım için hemen ulaşın
              </p>

              <p className="text-xs text-yellow-800">
                Servis talebi için telefon veya WhatsApp üzerinden yazabilirsiniz.
              </p>
            </div>
          </div>

          <a
            href="tel:+905011307386"
            className="w-full flex flex-col items-center justify-center bg-black text-white py-4 rounded-2xl shadow-lg hover:opacity-90 transition"
          >
            <div className="flex items-center gap-2 font-semibold">
              <Phone className="w-4 h-4" />
              Hemen Ara
            </div>

            <span className="text-xs text-gray-300 mt-1">
              Servis talebinizi telefonda hızlıca oluşturun.
            </span>
          </a>

          <a
            href="https://wa.me/905011307386?text=Merhaba,%20hidrolik%20haval%C4%B1%20kriko%20veya%20transpalet%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-4 rounded-2xl font-semibold text-yellow-600 shadow-sm hover:bg-gray-50 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Hemen Yaz
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://www.instagram.com/ozdurmushidrolikkriko?igsh=eWgzcmVjb2wyYnBh"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-4 rounded-2xl font-semibold text-black shadow-sm hover:bg-gray-50 transition"
            >
              <FaInstagram className="w-5 h-5 text-yellow-500" />
              Instagram
            </a>

            <a
             href="https://www.google.com/maps/search/+60537+sok+no%2F7+%C5%9Fehitkamil+gaziantep/@37.0814841,37.4226419,16z/data=!5m2!1e4!1e2?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-4 rounded-2xl font-semibold text-black shadow-sm hover:bg-gray-50 transition"
            >
              <MapPin className="w-5 h-5 text-yellow-500" />
              Konum
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/20">

            <div className="rounded-xl bg-white/80 backdrop-blur-md border border-white/70 px-2 py-3 text-center shadow-md">
              <div className="w-8 h-8 mx-auto rounded-xl bg-yellow-400/10 flex items-center justify-center mb-2">
                <ShieldCheck className="w-4 h-4 text-yellow-500" />
              </div>

              <p className="font-bold text-[11px] md:text-[13px] text-black leading-tight">
                Güvenilir
              </p>

              <span className="text-[9px] md:text-[11px] text-gray-600 leading-tight block mt-1">
                Teknik destek
              </span>
            </div>

            <div className="rounded-xl bg-white/80 backdrop-blur-md border border-white/70 px-2 py-3 text-center shadow-md">
              <div className="w-8 h-8 mx-auto rounded-xl bg-yellow-400/10 flex items-center justify-center mb-2">
                <Users className="w-4 h-4 text-yellow-500" />
              </div>

              <p className="font-bold text-[11px] md:text-[13px] text-black leading-tight">
                Deneyimli
              </p>

              <span className="text-[9px] md:text-[11px] text-gray-600 leading-tight block mt-1">
                Uzman ekip
              </span>
            </div>

            <div className="rounded-xl bg-white/80 backdrop-blur-md border border-white/70 px-2 py-3 text-center shadow-md">
              <div className="w-8 h-8 mx-auto rounded-xl bg-yellow-400/10 flex items-center justify-center mb-2">
                <ThumbsUp className="w-4 h-4 text-yellow-500" />
              </div>

              <p className="font-bold text-[11px] md:text-[13px] text-black leading-tight">
                Hızlı
              </p>

              <span className="text-[9px] md:text-[11px] text-gray-600 leading-tight block mt-1">
                Çözüm
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* YÜZEN BUTONLAR */}
      <div className="fixed right-3 bottom-4 z-50 flex flex-col gap-3">

        <a
          href="tel:+905011307386"
          className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-full shadow-2xl border border-yellow-500/30 hover:scale-105 transition"
        >
          <span className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </span>
          <span className="font-bold text-xs md:text-sm whitespace-nowrap">
            Hemen Ara
          </span>
        </a>

        <a
          href="https://wa.me/905011307386?text=Merhaba,%20hidrolik%20haval%C4%B1%20kriko%20veya%20transpalet%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-full shadow-2xl border border-black/10 hover:scale-105 transition"
        >
          <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </span>
          <span className="font-bold text-xs md:text-sm whitespace-nowrap">
            Hemen Yaz
          </span>
        </a>

      </div>

    </section>
  );
}