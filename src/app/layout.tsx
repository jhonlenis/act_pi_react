import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Chismofilia",
  description: "Tu portal interactivo de chismes y noticias de Colombia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-cover bg-center min-h-screen flex flex-col text-gray-900"
        style={{ backgroundImage: 'url("/chismofondo.png")' }}>
        <Navbar />
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
