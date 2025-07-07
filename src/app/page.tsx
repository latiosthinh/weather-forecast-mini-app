import MainCityCard from "@/components/main-city";
import Sidebar from "@/components/sidebar";

export default function HomePage() {

  return (
    <div className="md:max-w-lg md:min-w-md max-md:min-w-screen max-md:p-4 flex flex-col gap-8 mx-auto">
      <MainCityCard />
    </div>
  );
}
