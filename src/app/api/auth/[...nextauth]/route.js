import NextAuth from "next-auth";
import { authOptions } from "@/utils/options";

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
