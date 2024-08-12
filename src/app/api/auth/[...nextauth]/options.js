//import {NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

//export const options: NextAuthOptions = {
export const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username:{
                    label: "Username:",
                    type: "text",
                    placeholder: "Username"
                },
                password:{
                    label: "Password:",
                    type: "Password",
                    placeholder: "Password"
                }

            },
            async authorize(credentials){
                //this is where you would typically fetch user data to verify login details
                //just hard coded user here for demo purposes
                const user = {id: "50", name:"Dan", password:"password"}

                if(credentials?.username== user.name && credentials?.password == user.password){
                    return user;
                }
                else{
                    return null;
                }
            }
        })
    ],
};