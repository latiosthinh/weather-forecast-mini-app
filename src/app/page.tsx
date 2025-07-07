import MainCityCard from "@/components/main-city";
import Sidebar from "@/components/sidebar";

export default function HomePage() {

  return (
    <main className="p-4 bg-gradient min-h-screen flex items-center justify-center">
      <div className="max-w-lg flex flex-col gap-4">
        <MainCityCard />
      </div>

      <Sidebar />
    </main>
  );
}
