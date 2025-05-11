export const metadata = {
  title: "Zidane Portfolio",
  description: "Portofolio pribadi Zidane Abbas Mallaniung",
  icons: {
    icon: "/foto_wisuda_hitam_putih.jpg",
  },
};

import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
