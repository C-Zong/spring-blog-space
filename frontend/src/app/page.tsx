import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen gap-16">
      <Header />
      <main className="row-start-2 flex flex-col gap-[32px] items-center sm:items-start">
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
