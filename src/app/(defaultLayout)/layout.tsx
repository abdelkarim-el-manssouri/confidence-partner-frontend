import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "../globals.css";
import SmoothScroll from "@/utils/SmoothScrolling";
import localFont from "next/font/local";

const hurme = localFont({
  variable: "--hurme",
  src: [
    {
      path: "../../../public/fonts/hurme/hurmegeometricsans100.woff",
      weight: "100",
      style: "normal",
    },

    {
      path: "../../../public/fonts/hurme/hurmegeometricsans200.woff",
      weight: "200",
      style: "normal",
    },

    {
      path: "../../../public/fonts/hurme/hurmegeometricsans300.woff",
      weight: "300",
      style: "normal",
    },

    {
      path: "../../../public/fonts/hurme/hurmegeometricsans400.woff",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../../public/fonts/hurme/hurmegeometricsans700.woff",
      weight: "700",
      style: "normal",
    },

    {
      path: "../../../public/fonts/hurme/hurmegeometricsans800.woff",
      weight: "800",
      style: "normal",
    },

    {
      path: "../../../public/fonts/hurme/hurmegeometricsans900.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

const butler = localFont({
  variable: "--butler",
  src: [
    {
      path: "../../fonts/butler/Butler-UltraLight.woff",
      weight: "200",
      style: "normal",
    },

    {
      path: "../../fonts/butler/Butler-Light.woff",
      weight: "300",
      style: "normal",
    },

    {
      path: "../../fonts/butler/Butler.woff",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../fonts/butler/Butler-Medium.woff",
      weight: "500",
      style: "normal",
    },

    {
      path: "../../fonts/butler/Butler-Bold.woff",
      weight: "700",
      style: "normal",
    },

    {
      path: "../../fonts/butler/Butler-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },

    {
      path: "../../fonts/butler/Butler-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

const quicksand = localFont({
  variable: "--quicksand",
  src: [
    {
      path: "../../fonts/quicksand/Quicksand-Light.woff",
      weight: "300",
      style: "normal",
    },

    {
      path: "../../fonts/quicksand/Quicksand-Regular.woff",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../fonts/quicksand/Quicksand-Medium.woff",
      weight: "500",
      style: "normal",
    },

    {
      path: "../../fonts/quicksand/Quicksand-SemiBold.woff",
      weight: "600",
      style: "normal",
    },

    {
      path: "../../fonts/quicksand/Quicksand-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${butler.variable} ${quicksand.variable} ${hurme.variable} antialiased`}
        style={
          {
            // backgroundImage: "url('/svg/bgPatterns.svg')",
          }
        }
      >
        <SmoothScroll>
          <div className="min-h-dvh grid grid-rows-[auto,1fr,auto]">
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
