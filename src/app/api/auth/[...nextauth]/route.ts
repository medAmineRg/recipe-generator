import NextAuth from "next-auth";
import { OPTIONS } from "@/utils/options";

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
