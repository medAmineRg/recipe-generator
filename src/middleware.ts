import { withAuth } from "next-auth/middleware"

export default withAuth(
    // Matches the pages config in `[...nextauth]`
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        console.log(req.nextauth.token)
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                console.log(token);

                return !!token
            }
        },
        pages: {
            signIn: "/login"
        }
    }
)
export const config = { matcher: ["/recipe"] }