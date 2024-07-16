import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
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
        <meta name="facebook-domain-verification" content="xw9v1eeipdk4tl4ylcq2m6m2txmfqm" />
        <link href="https://fonts.cdnfonts.com/css/backcountry" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        {children}

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
        <Script
          id="fb-pixel"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1678784732863468');
fbq('track', 'PageView');`,
          }}
        />
        <GoogleAnalytics gaId="G-Q451BFG64T›" />
        <Analytics />
      </body>
    </html>
  );
}
