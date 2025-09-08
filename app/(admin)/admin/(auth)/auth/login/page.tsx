import LoginView from "@/components/auth/LoginView";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};
export default function LoginPage() {
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <LoginView />
    </div>
    </>
  );
}
