import Link from 'next/link'
import styles from '../page.module.css'

export default function Contact() {
    return (
        <main className={styles.main}>
            <section>
                <div className="title-container">
                    <h1 className="slogan">Contact</h1>
                    <p>This is the Contact page.</p>
                </div>
            </section>
        </main>
    )
}