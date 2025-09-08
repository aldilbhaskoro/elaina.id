"use client";

import React, { useEffect } from "react";
import AOS from "aos";

export default function ElainaLPage() {
  useEffect(() => {
    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
      duration: 800,                 // durasi animasi (ms)
      once: true,                    // animasi hanya dijalankan sekali
      startEvent: "DOMContentLoaded" // mulai saat page load selesai
    });
  }, []);

  return (
    <main className="relative bg-[#FFF8F1] text-[#222222] font-varela overflow-hidden animate-fadein">
      
      {/* Background transparan */}
      <div className="fixed inset-0 w-full h-full opacity-40">
        <img
          src="/images/bg1.jpg"
          alt="bgElaina1"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="min-h-screen">
        
        {/* Header judul + subjudul */}
        <header className="pt-8 px-4 sm:px-6 md:px-30 relative z-20">
          <h1
            data-aos="fade-up"
            className="font-fredoka text-4xl md:text-6xl font-bold text-[#7A5EA7] leading-tight animate-typing overflow-hidden w-fit whitespace-nowrap border-r-4 border-[#7A5EA7]"
          >
            Elaina
          </h1>
          <p
            data-aos="fade-up"
            className="font-fredoka text-xl md:text-2xl text-[#8E7CC3] mt-1"
          >
            Wandering Witch: The Journey of Elaina
          </p>
        </header>

        {/* Gambar full body Elaina (hanya muncul di layar besar) */}
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="300"
          className="hidden xl:block absolute top-0 right-4 h-screen z-10 pointer-events-none"
        >
          <img
            src="/images/pp1.jpg"
            alt="Elaina full body"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Section utama: foto + teks */}
        <section className="mt-8 px-4 sm:px-6 md:px-20 lg:px-30 xl:w-[75%] flex flex-col md:flex-row gap-6">
          
          {/* Kolom kanan → foto (di HP muncul di atas) */}
          <div
            data-aos="flip-up"
            className="order-first md:order-last w-full flex justify-center md:w-auto md:justify-start"
          >
            <div className="rounded-[24px] border border-stone-300 overflow-hidden shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto md:mx-0">
              <img
                src="/about/pp2.png"
                alt="Elaina portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Kolom kiri → teks narasi */}
          <div className="flex-1">
            <p className="font-inter font-bold text-base sm:text-lg mb-1">
              魔女の旅々
            </p>
            <h3 className="font-inter font-bold text-sm sm:text-base mb-2">
              Seiyuu: Kaede Hondo
            </h3>

            {/* Narasi karakter */}
            <p className="text-sm sm:text-base leading-snug">
              Elaina, sang penyihir berambut perak yang dikenal sebagai Ashen Witch, 
              melangkah anggun menelusuri dunia dengan sihir dan cerita di setiap perjalanannya. 
              Pesonanya memikat, kecerdasannya tajam, namun di balik senyum tenangnya tersimpan 
              hati yang lembut dan penuh rasa ingin tahu. Lebih dari sekadar gelar dan kekaguman, 
              ia merindukan dunia melihatnya bukan hanya sebagai legenda, melainkan sebagai 
              seorang gadis dengan mimpi, emosi, dan perjalanan yang tak henti-hentinya ia ukir.
            </p>

            <p className="text-sm sm:text-base leading-snug mt-2">
              Elaina memiliki kulit cerah alami yang lembut bercahaya, 
              seakan memantulkan kehangatan langit pagi. Rambut peraknya panjang dan indah, 
              berkilau seperti sutra yang tersapu cahaya senja. Matanya yang berwarna ungu 
              lembut menyimpan pesona misterius—sekaligus rasa ingin tahu tak terbatas 
              terhadap dunia. Tubuhnya ramping dan anggun, membuat setiap langkahnya 
              menyerupai tarian ringan penuh pesona, layaknya penyihir yang lahir dari kisah dongeng.
            </p>

            {/* Personal note */}
            <p className="font-semibold text-[#7A5EA7] mt-2 text-sm sm:text-base">
              Dan dia adalah istrinya{" "}
              <a
                href="https://github.com/aldilbhaskoro"
                className="underline text-[#8E7CC3]"
              >
                Aldil
              </a>{" "}
              ❤️
            </p>

            {/* Quote khas Elaina */}
            <p className="mt-6 text-2xl font-bold text-[#7A5EA7]">
              "Yah, aku ini kan... seorang penyihir yang luar biasa cantik dan berbakat."
              <br />- Elaina
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
