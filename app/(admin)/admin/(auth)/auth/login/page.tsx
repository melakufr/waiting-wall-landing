import LoginView from "@/components/auth/LoginView";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};
export default function LoginPage() {
  return <LoginView />;
}
