import styles from '../page.module.css'
import Orders from '@/components/Orders';

async function getOrders() {
    const baseUrl = "http://localhost:3000";

    try {
        const response = await fetch(`${baseUrl}/api/orders`, { 'cache': 'no-cache' });
        const ordersArray = await response.json();
        return ordersArray;
    } catch (error) {
        console.error('Failed to fetch orders:', error);
        return [];
    }
}

async function getFilteredOrders(){
    const baseUrl = "http://localhost:3000";

    try {
        const response = await fetch(`${baseUrl}/api/orders/status=new`, { 'cache': 'no-cache' });
        const ordersArray = await response.json();
        return ordersArray;
    } catch (error) {
        console.error('Failed to fetch orders:', error);
        return [];
    }
}

export default async function OrdersDashboard() {
    
    let ordersJSX;
    try{
        //const ordersArray = await getOrders();
        const ordersArray = await getFilteredOrders();
        //console.log(JSON.stringify(ordersArray));
        ordersJSX = <Orders orders={ordersArray}></Orders>
    }
    catch(error){
        ordersJSX = <span>Unable to Fetch Orders</span>
    }

    return (
        <main className={styles.main}>
            <section>
                <div className="title-container">
                    <h1 className="slogan">Orders</h1>
                </div>
            </section>
            {ordersJSX}
        </main>
    )
}