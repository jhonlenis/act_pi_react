"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login";

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="flex-1 container mx-auto p-6">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
