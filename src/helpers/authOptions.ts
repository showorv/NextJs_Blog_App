import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      }),
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Email", type: "text"},
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          // Add logic here to look up the user from the credentials supplied

          if(!credentials?.email || !credentials.password){
            console.log("email or password missing");
            
            return null
          }

          try {

            const res = await fetch (`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,{
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
              })
          })
          if(!res.ok){
              console.log("user registration failed", res.text());
              return null
              
          }

          const user = await res.json()

          if (user.id) {
           
            return{
              id: user?.id,
              name: user.name,
              email: user?.email,
              picture: user?.picture
            }
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
            
          } catch (error) {
            console.log(error);
            return null
            
          }
         
    
         
        }
      })
  ],
  callbacks: {
    async jwt ({token,user}){
      if(user){
        token.id = user?.id
      }
      return token
    },
    async session ({session,token}){
      if(session?.user){
       session.user.id = token?.id
      }
      return session
    },
  },
  secret: process.env.AUTH_SECRET,
  pages:{
    signIn: "/login"
  }
}

