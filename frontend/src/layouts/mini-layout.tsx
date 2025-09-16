import { FirstBox } from "@/components/main";
import { MainLayout } from "@/layouts";

interface MiniLayoutProps {
  children: React.ReactNode;
}

export default function MiniLayout({ children }: MiniLayoutProps) {
  return (
    <>
      <MainLayout>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 my-6 md:my-10">
          <FirstBox />
          <div className="lg:col-span-2 pb-20 md:pb-0">
            {children}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
