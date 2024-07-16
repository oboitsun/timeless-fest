import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      <Header country={"nz"} />
      {children}
      <Footer country="nz" />
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
    </>
  );
}
