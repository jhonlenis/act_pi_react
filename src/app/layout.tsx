import "./globals.css";
import ClientLayout from "@/app/components/ClientLayout";

export const metadata = {
  title: "Chismofilia",
  description: "Tu portal interactivo de chismes y noticias de Colombia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-cover bg-center min-h-screen flex flex-col text-gray-900"
        style={{ backgroundImage: 'url("/chismofondo.png")' }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
