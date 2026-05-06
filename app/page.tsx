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
    <section className="relative w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center overflow-hidden">

      {/* GÖRSEL */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src="/gorsel.jpg"
          alt="hidrolik forklift kriko transpalet servisi"
          className="
            h-full
            w-[75%] sm:w-[65%] md:w-[45%]
            object-cover
            object-right
          "
        />

        {/* HAFİF KARARTMA */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-left py-10">

        <div className="max-w-3xl bg-white/86 backdrop-blur-md border border-white/70 shadow-2xl rounded-[32px] p-6 md:p-10">

          {/* ÜST BADGE */}
          <div className="inline-flex items-center gap-2 bg-black border border-yellow-400 px-4 py-2 rounded-full shadow-lg">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span className="text-yellow-400 text-[11px] md:text-xs font-bold tracking-wide">
              HIZLI SERVİS • TAMİR • BAKIM
            </span>
          </div>

          {/* LOGO */}
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-none tracking-tight">
            <span className="text-black">Özdurmuş</span>
            <br />
            <span className="text-yellow-500">Hidrolik</span>
          </h1>

          {/* ALT YAZI */}
          <p className="mt-4 text-sm md:text-lg text-gray-700 max-w-xl leading-relaxed font-medium">
            Forklift, havalı kriko ve transpaletleriniz için güvenilir teknik servis,
            tamir ve bakım çözümleri.
          </p>

          {/* BAŞLIK */}
          <h2 className="mt-8 text-3xl md:text-5xl font-extrabold leading-tight text-black max-w-2xl">
            Arıza Beklemez,{" "}
            <span className="text-yellow-500">
              Servis Hızlı
            </span>
            <br />
            Gelir
          </h2>

          {/* METİN */}
          <div className="mt-6 space-y-3 max-w-xl">

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-[2px] shrink-0" />
              <p className="text-gray-800 text-sm md:text-base font-medium">
                Forklift, havalı kriko ve transpalet arızalarında hızlı müdahale
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-3xl">

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
                className="
                  bg-black
                  border border-yellow-500/30
                  rounded-2xl
                  p-4
                  shadow-xl
                "
              >
                <div className="w-11 h-11 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center mb-3">
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
              className="w-full h-[220px] md:h-[420px] object-cover"
            >
              <source src="/tanitim.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 w-full max-w-md mx-auto space-y-4">

          {/* ÜST BİLGİ */}
          <div className="flex items-center gap-3 bg-yellow-100 text-yellow-800 p-4 rounded-2xl border border-yellow-200 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded-full">
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

          {/* ANA BUTON */}
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

          {/* WHATSAPP */}
          <a
            href="https://wa.me/905011307386?text=Merhaba,%20hidrolik%20forklift,%20haval%C4%B1%20kriko%20veya%20transpalet%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-4 rounded-2xl font-semibold text-yellow-600 shadow-sm hover:bg-gray-50 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Hemen Yaz
          </a>

          {/* INSTAGRAM + KONUM */}
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
              href="https://www.google.com/maps/place/%C3%96zdurmu%C5%9F+Hidrolik/@37.0815682,37.4233249,17z/data=!3m1!4b1!4m6!3m5!1s0x1531e5444bec3fa1:0x3f4b16c814204e34!8m2!3d37.081564!4d37.4281958!16s%2Fg%2F11xfhyr88q!5m2!1e4!1e2?hl=tr&entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-4 rounded-2xl font-semibold text-black shadow-sm hover:bg-gray-50 transition"
            >
              <MapPin className="w-5 h-5 text-yellow-500" />
              Konum
            </a>
          </div>

          {/* ALT GÜVEN */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/20">

            <div className="group relative overflow-hidden rounded-xl bg-white/70 backdrop-blur-md border border-white/70 px-2 py-3 text-center shadow-md">
              <div className="relative z-10">
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
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white/70 backdrop-blur-md border border-white/70 px-2 py-3 text-center shadow-md">
              <div className="relative z-10">
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
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white/70 backdrop-blur-md border border-white/70 px-2 py-3 text-center shadow-md">
              <div className="relative z-10">
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

      </div>

      {/* YÜZEN BUTONLAR */}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">

        <a
          href="tel:+905011307386"
          className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-full shadow-2xl border border-yellow-500/30 hover:scale-105 transition"
        >
          <span className="w-9 h-9 rounded-full bg-yellow-500 text-black flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </span>
          <span className="font-bold text-sm whitespace-nowrap">
            Hemen Ara
          </span>
        </a>

        <a
          href="https://wa.me/905011307386?text=Merhaba,%20hidrolik%20forklift,%20haval%C4%B1%20kriko%20veya%20transpalet%20servisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-3 rounded-full shadow-2xl border border-black/10 hover:scale-105 transition"
        >
          <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </span>
          <span className="font-bold text-sm whitespace-nowrap">
            Hemen Yaz
          </span>
        </a>

      </div>

    </section>
  );
}