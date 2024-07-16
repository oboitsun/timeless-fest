import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header country={"nz"} />
      {children}
      <Footer country="nz" />
    </>
  );
}
