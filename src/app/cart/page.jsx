import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import Orders from '@/components/Orders';

export default async function Cart() {

    const session = await getServerSession(options);

    const user = session?.user.name;
    console.log(user);

    return (
        <div>
            <section>
                <div className="title-container">
                    <h1 className="slogan">Here's your cart, {user}!</h1>
                </div>
            </section>
            <Orders orders={[]}/>
       </div>
    )
}