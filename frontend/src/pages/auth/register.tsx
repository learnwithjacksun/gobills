import { ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock, Mail, Phone, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <AuthLayout>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">Create an Account</h3>
        <p className="text-sm text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>

      <form className="space-y-4 bg-background dark:bg-secondary/80 p-6 border border-line rounded-3xl my-10">
        <InputWithIcon
          icon={<UserRound size={20} />}
          label="Username"
          type="text"
          className="bg-secondary dark:bg-secondary/70"
          placeholder="e.g John Doe"
        />
        <InputWithIcon
          icon={<Mail size={20} />}
          label="Email"
          type="email"
          className="bg-secondary dark:bg-secondary/70"
          placeholder="e.g johndoe@example.com"
        />
        <InputWithIcon
          icon={<Phone size={20} />}
          label="Phone Number"
          type="tel"
          className="bg-secondary dark:bg-secondary/70"
          placeholder="e.g +1234567890"
        />
        <InputWithIcon
          icon={<Lock size={20} />}
          label="Password"
          type="password"
          className="bg-secondary dark:bg-secondary/70"
          placeholder="Min 8 characters"
        />

        <ButtonWithLoader
          initialText="Register"
          loadingText="Registering..."
          className="btn-primary text-sm font-semibold h-11 rounded-full w-full"
        />

        <p className="text-sm text-center text-muted">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="text-blue-500 underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-500 underline">
            Privacy Policy
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
