import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "SBcars",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel="shortcut icon" href="../public/sbcars-logo.png" type="image/x-icon" />
      </head>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
