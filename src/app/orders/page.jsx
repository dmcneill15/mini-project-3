import Link from 'next/link'
import styles from '../page.module.css'

export default function Orders() {
    return (
        <main className={styles.main}>
            <section>
                <div className="title-container">
                    <h1 className="slogan">Orders</h1>
                    <p>This is the Orders page.</p>
                </div>
            </section>
        </main>
    )
}