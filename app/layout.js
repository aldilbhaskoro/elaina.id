import "./globals.css";
import "aos/dist/aos.css";

/* ---------------------------
   Metadata aplikasi (SEO + Info)
---------------------------- */
export const metadata = {
  title: "Elaina - Istrinya Aldil",
  description: `
    Elaina adalah istri dari Aldil, dan kisah mereka adalah perjalanan cinta yang tak pernah berakhir.
    Sejak Elaina hadir, hidup Aldil berubah menjadi lebih berarti. Setiap hari bersamanya adalah
    kebahagiaan yang sulit diungkapkan dengan kata-kata. Elaina selalu mengisi hari-harinya dengan
    senyum, perhatian, dan cinta yang tulus. Ketika Elaina memasak, Aldil selalu berkata,
    “Ini makanan terenak di dunia.” Ia tahu betapa istrinya itu begitu memperhatikan detail,
    bahkan dalam hal kecil sekalipun. Elaina sering memberinya kejutan dengan resep baru, dan Aldil
    selalu menjadi orang pertama yang mencicipinya. Kehidupan mereka dipenuhi kebiasaan sederhana
    yang terasa luar biasa. Saat Elaina belajar, Aldil setia menemani, menjadi pengingat kecil agar
    istrinya beristirahat. Bagi Aldil, Elaina bukan hanya pendamping hidup, melainkan rumah tempat
    ia selalu ingin kembali. Dan bagi Elaina, Aldil adalah sandaran yang membuat setiap langkah terasa
    lebih ringan.
  `,
  icons: {
    icon: "/favicon.ico",
  },
};

/* ---------------------------
   Root Layout untuk Next.js App
   -> membungkus seluruh halaman
---------------------------- */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Inter:wght@700&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Render halaman anak (page.tsx/page.jsx) */}
        {children}
      </body>
    </html>
  );
}
