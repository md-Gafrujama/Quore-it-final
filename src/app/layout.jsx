 import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <Navbar/>
      <body className="bg-white text-black dark:bg-black dark:text-white">

        <main className="min-h-screen flex flex-col justify-between">
          <div className="flex-grow">
            {children}
          </div>
 
          <Footer />
        </main>
      </body>
    </html>
  );
}