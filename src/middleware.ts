import { withAuth } from "next-auth/middleware"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        console.log(req)
    },
    {
        secret: process.env.NEXTAUTH_SECRET,
        callbacks: {
            authorized: async ({ token }) => {
                return !!token
            }
        },
    }
)
export const config = { matcher: ["/recipe", "/collection"] }