import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ModeToggle from "../ui/mode-toggle";

export default function Header() {
  return (
    <>
    <div className="fixed inset-x-0 top-0 h-[100px] bg-gradient-to-b from-background dark:from-secondary/70 via-background/80 dark:via-secondary/70 to-transparent"/>
      <header className="sticky top-0 z-50 ">
        <nav className="main h-[70px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 ">
            <img src="/logo.svg" alt="Gobills" className="w-10 h-10" />
            <p className="text-2xl font-bold text-shadow-lg">
              Gobills<span className="text-primary">&bull;</span>
            </p>
          </Link>

          <div className="flex items-center md:gap-6 gap-4 ">
            <ModeToggle />
            <a
              href="https://help.gobills.com"
              target="_blank"
              className="flex items-center gap-2"
            >
              <HelpCircle size={20} className="text-yellow-500" />
              <p className="text-sm">Need help?</p>
            </a>
            <div className="md:flex items-center gap-4 hidden">
              <Link
                to="/login"
                className="btn text-sm bg-secondary font-semibold border border-line px-6 py-3 rounded-full"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary text-sm font-semibold border border-line px-6 py-3 rounded-full"
              >
                Register
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
