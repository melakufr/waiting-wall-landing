import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.email = user.email;     
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      // Only run this for OAuth providers, not credentials
      if (account && account.provider !== "credentials" && user.email) {
        // Check if this OAuth account has a linked user account
       

      }
      return true;
    },
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;
              
        const emailMock = "admin@waitingwall.com";
        const passwordMock = "P@ssw0rd";

        if(email != emailMock || password != passwordMock){
          return null;
        }

        console.log("User authorized");

        // In a real app, you would fetch the user from your database here
        // and verify the password. This is just a basic example.
        return {
          id: 'temp-id', // You should generate or get a real user ID
          email: email,
          name: "",
          firstName: "", // Required by User type
          lastName: "",  // Required by User type
          accessToken: "temp-access-token", // You should generate a real JWT token
          refreshToken: "temp-refresh-token", // You should generate a real refresh token
          accessTokenExpires: Date.now() + 3600 * 1000, // 1 hour from now
        };
      },
    }),
  ],
});
