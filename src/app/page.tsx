import MainCityCard from "@/components/main-city";
import Sidebar from "@/components/sidebar";

export default function HomePage() {

  return (
    <div className="max-w-lg md:min-w-md flex flex-col gap-8">
      <MainCityCard />
    </div>
  );
}
