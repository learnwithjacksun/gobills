import { Footer } from "@/components/main";
import { AuthLayout } from "@/layouts";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";


export default function Notfound() {
  return (
    <>
    <AuthLayout>
        <div className="text-center space-y-4">
            <h1 className="text-7xl font-bold font-space">404</h1>
            <p className="text-sm text-muted">The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary w-fit mx-auto px-6 py-3 rounded-full"><Home size={20} />Go to Home</Link>
        </div>
    </AuthLayout>
    <Footer />
    </>
  )
}
