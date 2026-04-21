"use client";

import { motion, Variants } from "framer-motion";
import { Phone, MessageCircle, PaintRoller, Building2, Wrench, CheckCircle2, MapPin, Sparkles } from "lucide-react";

export default function Home() {
  // TypeScript için explicit (belirgin) tip tanımlamaları
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" // Artık hata vermeyecek
      } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-green-200">
      
      {/* HERO SECTION */}
     <section className="relative pt-20 pb-14 px-4 text-center overflow-hidden">

  {/* ARKA PLAN */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute w-[500px] h-[500px] bg-zinc-200/50 blur-[100px] top-[-100px] left-[-100px] rounded-full" />
    <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[120px] bottom-[-100px] right-[-100px] rounded-full" />
  </div>

  <motion.div 
    className="relative z-10 max-w-4xl mx-auto"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >

    {/* LOGO */}
    <motion.div variants={fadeIn} className="mb-4">

      <motion.h1 className="text-2xl md:text-5xl font-extrabold tracking-tight">
        <span className="text-zinc-900">İstanbul </span>

        <motion.span
          className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Boya
        </motion.span>
      </motion.h1>

      {/* ALT YAZI (RENK AYRILDI) */}
      <motion.p
        variants={fadeIn}
        className="text-sm text-zinc-500 tracking-wide mt-1"
      >
        Profesyonel Boya & Badana Hizmeti
      </motion.p>

    </motion.div>

    {/* ALT SLOGAN (RENK AYRILDI) */}
    <motion.div 
      variants={fadeIn} 
      className="flex items-center justify-center gap-3 mb-6"
    >
      <div className="h-[1px] w-8 bg-zinc-200" />

      <span className="text-[11px] md:text-xs tracking-[0.18em] uppercase text-zinc-500 font-medium">
        İstanbul’un Güvenilir Boyacısı
      </span>

      <div className="h-[1px] w-8 bg-zinc-200" />
    </motion.div>

    {/* BAŞLIK */}
<motion.h2 
  variants={fadeIn} 
  className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-zinc-900"
>
  Eviniz{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-600">
    Sıfır Gibi
  </span>{" "}
  Olsun
</motion.h2>

    {/* AÇIKLAMA */}
    <motion.p 
      variants={fadeIn} 
      className="text-base md:text-lg text-zinc-500 mb-6 max-w-2xl mx-auto"
    >
      Temiz işçilik, kokusuz boya ve zamanında teslim garantisi ile
      evinizi baştan sona yeniliyoruz.
    </motion.p>

    {/* GÜVEN */}
    <motion.div 
      variants={fadeIn} 
      className="flex flex-wrap justify-center gap-4 text-xs text-zinc-500 mb-6"
    >
      <span>✔ Aynı gün keşif</span>
      <span>✔ 1 günde teslim</span>
      <span>✔ Garantili işçilik</span>
    </motion.div>

    {/* CTA */}
    <motion.div 
      variants={fadeIn} 
      className="flex flex-col sm:flex-row gap-3 justify-center items-center"
    >
      <a 
        href="tel:+905456433535" 
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg"
      >
        <Phone className="w-4 h-4" />
        Ücretsiz Keşif
      </a>

      <a
        href="https://wa.me/905456433535?text=Merhaba%20boya%20yaptırmak%20istiyorum"
        target="_blank"
        rel="noreferrer"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-6 py-3 rounded-xl font-medium transition-all shadow-sm"
      >
        <MessageCircle className="w-4 h-4 text-green-500" />
        WhatsApp
      </a>
    </motion.div>

  </motion.div>
</section>

      {/* HİZMETLER */}
      <section className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="bg-white/70 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all group">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PaintRoller className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl mb-3">Ev Boyama</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Eşyalarınızı özenle paketliyor, maskeleme yapıyor ve sıfır iz bırakarak boyuyoruz.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/70 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl mb-3">Ofis Boyama</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">İş akışınızı aksatmadan, mesai saatleri dışında hızlı ve temiz teslimat.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white/70 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all group">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl mb-3">Alçı & Tamir</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Çatlaklar ve dökülmeler boya öncesi profesyonelce onarılır, zemin pürüzsüzleşir.</p>
          </motion.div>
        </motion.div>
      </section>
<section className="max-w-6xl mx-auto px-4 py-20">

  {/* BAŞLIK */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Hizmetlerimiz
    </h2>
    <p className="text-zinc-500">
      Evinizi baştan sona yenileyen profesyonel çözümler
    </p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-3 gap-6">

    {/* 1 */}
    <div className="glass p-6 rounded-3xl card-hover">
      <h3 className="font-bold text-lg mb-2">İç Cephe Boyama</h3>
      <p className="text-sm text-zinc-600 mb-4">
        Duvarlarınız pürüzsüz ve iz bırakmadan boyanır. Temiz ve kokusuz uygulama.
      </p>
      <span className="text-xs text-green-600 font-semibold">
        ✔ En çok tercih edilen
      </span>
    </div>

    {/* 2 */}
    <div className="glass p-6 rounded-3xl card-hover">
      <h3 className="font-bold text-lg mb-2">Tavan Boyama</h3>
      <p className="text-sm text-zinc-600 mb-4">
        Sararma ve lekeleri tamamen kapatan profesyonel tavan uygulaması.
      </p>
      <span className="text-xs text-green-600 font-semibold">
        ✔ Lekesiz sonuç
      </span>
    </div>

    {/* 3 */}
    <div className="glass p-6 rounded-3xl card-hover">
      <h3 className="font-bold text-lg mb-2">Kapı & Panel Boyama</h3>
      <p className="text-sm text-zinc-600 mb-4">
        Kapılarınız yeni gibi görünür. Fırça izi bırakmayan özel teknik.
      </p>
      <span className="text-xs text-green-600 font-semibold">
        ✔ Yeni görünüm
      </span>
    </div>

    {/* 4 */}
    <div className="glass p-6 rounded-3xl card-hover">
      <h3 className="font-bold text-lg mb-2">Alçı & Duvar Tamiri</h3>
      <p className="text-sm text-zinc-600 mb-4">
        Çatlak, delik ve bozuk yüzeyler boya öncesi tamamen düzeltilir.
      </p>
      <span className="text-xs text-green-600 font-semibold">
        ✔ Kusursuz zemin
      </span>
    </div>

    {/* 5 */}
    <div className="glass p-6 rounded-3xl card-hover">
      <h3 className="font-bold text-lg mb-2">Eşya Koruma</h3>
      <p className="text-sm text-zinc-600 mb-4">
        Tüm eşyalarınız profesyonel şekilde kaplanır, kirlenmez.
      </p>
      <span className="text-xs text-green-600 font-semibold">
        ✔ Temiz işçilik
      </span>
    </div>

    {/* 6 */}
    <div className="glass p-6 rounded-3xl card-hover">
      <h3 className="font-bold text-lg mb-2">Anahtar Teslim Boya</h3>
      <p className="text-sm text-zinc-600 mb-4">
        Hiç uğraşmadan tüm süreç bizde. Siz sadece sonucu görün.
      </p>
      <span className="text-xs text-green-600 font-semibold">
        ✔ Sıfır zahmet
      </span>
    </div>

  </div>

</section>
      {/* PAKETLER */}
      <section className="max-w-6xl mx-auto px-4 py-20">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
      Paket Seçenekleri
    </h2>
    <p className="text-zinc-500">
      Her bütçeye uygun profesyonel çözümler.
    </p>
  </div>

  <motion.div
    className="grid md:grid-cols-3 gap-8 items-stretch"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
  >
    {/* STANDART */}
    <motion.div
      variants={fadeIn}
      className="bg-white border border-zinc-200 p-8 rounded-3xl flex flex-col shadow-sm"
    >
      <h3 className="font-bold text-2xl mb-2">Standart</h3>
      <p className="text-zinc-500 text-sm mb-8">
        Hızlı ve ekonomik tazelenme
      </p>

      <div className="space-y-4 mb-10 flex-grow">
        {[
          "Boya malzemesi dahil",
          "2 kat uygulama",
          "Temel yüzey koruma",
          "Standart temizlik",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-zinc-600">
            <CheckCircle2 className="w-5 h-5 text-zinc-300" />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="tel:+905456433535"
          className="w-full py-4 text-center bg-zinc-900 text-white rounded-2xl font-semibold"
        >
          📞 Hemen Ara
        </a>

        <a
          href="https://wa.me/905456433535?text=Merhaba%20Standart%20paket%20için%20fiyat%20almak%20istiyorum.%20Bilgi%20verir%20misiniz?"
          target="_blank"
          className="w-full py-4 text-center bg-green-500 text-white rounded-2xl font-semibold"
        >
          💬 WhatsApp Yaz
        </a>
      </div>
    </motion.div>

    {/* PREMIUM */}
    <motion.div
      variants={fadeIn}
      className="relative bg-zinc-900 text-white p-8 rounded-3xl flex flex-col shadow-2xl md:-translate-y-4 border border-zinc-800"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg">
        EN ÇOK TERCİH EDİLEN
      </div>

      <h3 className="font-bold text-2xl mb-2">Premium</h3>
      <p className="text-zinc-400 text-sm mb-8">
        Mükemmel sonuç isteyenlere
      </p>

      <div className="space-y-4 mb-10 flex-grow">
        {[
          "1. Sınıf silinebilir boya",
          "Tam kapsamlı eşya koruma",
          "Detaylı alçı tamiri",
          "Boya sonrası detaylı temizlik",
          "Kusursuz işçilik",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-sm text-zinc-200">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="tel:+905456433535"
          className="w-full py-4 text-center bg-white text-zinc-900 rounded-2xl font-bold shadow-lg"
        >
          📞 Ustayla Görüş
        </a>

        <a
          href="https://wa.me/905456433535?text=Merhaba%20Premium%20paket%20için%20bilgi%20ve%20fiyat%20almak%20istiyorum.%20Müsait%20misiniz?"
          target="_blank"
          className="w-full py-4 text-center bg-green-500 text-white rounded-2xl font-bold"
        >
          💬 Premium Bilgi Al
        </a>
      </div>

      <p className="text-center text-[11px] text-zinc-400 mt-3">
        ⚡ En hızlı dönüş yapılan paket
      </p>
    </motion.div>

    {/* VIP */}
    <motion.div
      variants={fadeIn}
      className="bg-white border border-zinc-200 p-8 rounded-3xl flex flex-col shadow-sm"
    >
      <h3 className="font-bold text-2xl mb-2">VIP</h3>
      <p className="text-zinc-500 text-sm mb-8">
        Tam lüks, sıfır zahmet
      </p>

      <div className="space-y-4 mb-10 flex-grow">
        {[
          "Özel marka/renk seçimi",
          "VIP mobilya paketleme",
          "Tavan ve kapı boyama",
          "Aynı gün hızlı teslimat",
          "Profesyonel son kontrol",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-zinc-600">
            <CheckCircle2 className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="tel:+905456433535"
          className="w-full py-4 text-center bg-black text-white rounded-2xl font-semibold"
        >
          📞 VIP Hizmet Al
        </a>

        <a
          href="https://wa.me/905456433535?text=Merhaba%20VIP%20paket%20ile%20boya%20yaptırmak%20istiyorum.%20Detaylı%20bilgi%20alabilir%20miyim?"
          target="_blank"
          className="w-full py-4 text-center bg-green-500 text-white rounded-2xl font-semibold"
        >
          💬 VIP Teklif İste
        </a>
      </div>
    </motion.div>
  </motion.div>
</section>

      {/* HARİTA */}
      <section className="px-4 pb-32">
        <motion.div 
          className="max-w-5xl mx-auto bg-white p-2 rounded-3xl shadow-xl border border-zinc-100 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Sancaktepe Boya"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12048.974959146522!2d29.2144707119934!3d41.00295289947938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad198d024d271%3A0x6d9f756023253b84!2zU2FyxLFnYXppLCBTYW5jYWt0ZXBlL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1715456433535!5m2!1str!2str"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        <div className="flex flex-col items-center gap-2 mt-8 text-zinc-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="font-semibold text-zinc-800">Sarıgazi Mahallesi, Sancaktepe / İstanbul</span>
          </div>
          <p className="text-xs uppercase tracking-widest font-medium">Tüm İstanbul'a Hizmet Veriyoruz</p>
        </div>
      </section>

      {/* MOBİL ALT BAR (STICKY) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-2xl border-t border-zinc-100 z-50 flex gap-3">
        <a 
          href="tel:+905456433535" 
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white py-4 rounded-2xl font-bold shadow-lg shadow-zinc-900/20 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" /> Ara
        </a>
        <a
          href="https://wa.me/905456433535?text=Merhaba%20boya%20hizmeti%20almak%20istiyorum"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-500/20 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>

    </div>
  );
}