import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="font-sans w-max-5xl mx-auto ">
      <main className="flex flex-col sm:items-start">
        <Header/>
        <Hero/>
      
      </main>
      <footer className="row-start-3 flex gap-[24px] text-gray-400 flex-wrap items-center border-t border-gray-300 justify-center w-full p-6">
     <span>© 2023 VexAura</span>
      </footer>
    </div>
  );
}
