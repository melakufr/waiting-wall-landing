"use client";



import { authenticate } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
//import { signIn } from "@/auth";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const LoginView: React.FC = () => {
  // const { setModalView, closeModal } = useUI();

  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [message, setMessage] = useState("");

  return (
    <form
      action={dispatch}
      className="w-80 flex flex-col justify-between p-6 space-y-4 rounded-lg "
    >


      <div className="flex flex-col space-y-4">
        {errorMessage && (
          <div className="text-accent-danger-600 text-sm">{errorMessage}</div>
        )}

        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
         
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          
        />

        <div className="flex justify-center pt-4">
          <LoginButton
          // className="w-full bg-gray-700 hover:bg-gray-900 text-gray-100 py-2 rounded-md"
          />
        </div>

 



        {message && (
          <div className="text-accent-danger-600 text-sm">{message}</div>
        )}


      </div>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      // className="w-full bg-gray-600 text-gray-100 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      className="w-full bg-gray-700 hover:bg-gray-900 text-gray-100 py-2 rounded-md"
      type="submit"
      
      disabled={pending}
    >
      Log In
    </Button>
  );
}

export default LoginView;
