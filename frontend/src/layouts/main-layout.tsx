import { Footer, Header } from "@/components/main";

interface MainLayoutProps {

  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
        <Header />
        <main className="main">
            {children}
        </main>
        <Footer />
    </>
  )
}
