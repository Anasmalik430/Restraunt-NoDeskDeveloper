import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "ALADDIN | The Golden Kitchen",
  description: "Expereince the best food in Roorkee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg-deep selection:bg-primary selection:text-bg-deep">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
