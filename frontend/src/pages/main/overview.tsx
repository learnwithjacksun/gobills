import { FirstBox, SecondBox } from "@/components/main";
import { MainLayout } from "@/layouts";

export default function Overview() {
  return (
    <>
      <MainLayout>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 my-6 md:my-10">
          <FirstBox />
          <div className="lg:col-span-2">
            <SecondBox />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
