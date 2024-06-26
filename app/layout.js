import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import "./globals.css";
export const metadata = {
  title: "Timeless Festival",
  description:
    " Creating Timeless Live music and entertainment experiences that convert into forever  memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/backcountry" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <Header />
        {children}
        <Footer />
        <Script
          id="chat-bot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.__ow = window.__ow || {};
  window.__ow.organizationId = "991b8994-37d2-4507-a2f6-12d607bf0122";
  window.__ow.integration_name = "manual_settings";
  window.__ow.product_name = "openwidget";
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))`,
          }}
        />
        <GoogleAnalytics gaId="G-Q451BFG64T" />
        <Analytics />
      </body>
    </html>
  );
}
