import { Footer, Navbar } from "@/components";
import "./globals.css";
import StyledNavbar from "@/components/StyledNavbar";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <StyledNavbar/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
