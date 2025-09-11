import { FirstBox, SecondBox } from "@/components/main";
import { MainLayout } from "@/layouts";
import { Menu } from "lucide-react";

export default function Overview() {
  return (
    <>
      <MainLayout>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4 my-6 md:my-10">
          <FirstBox />
          <div className="lg:col-span-2"><SecondBox /></div>
          <div className="bg-blue-400 p-4 hidden lg:block"></div>
        </div>
      </MainLayout>

      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <button className="btn-primary h-14 w-14 rounded-full">
          <Menu size={24} />
        </button>
      </div>
    </>
  );
}
