import Header from "../components/UI/Header";
import "./globals.css";

export const metadata = {
  title: "Timeles Festival",
  description:
    " Creating Timeless Live music and entertainment experiences that convert into forever  memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
