import Link from 'next/link'
import styles from '../page.module.css'

export default function About() {
    return (
        <main className={styles.main}>
            <section>
                <div className="title-container">
                    <h1 className="slogan">Coming soon...</h1>
                    <p>This is the about page.
                        Nothing to see, go <Link href="/">home</Link>.</p>
                </div>
            </section>
        </main>
    )
}