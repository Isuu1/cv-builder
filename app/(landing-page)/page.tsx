import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
