'use client' // client component, not server rendered
import Link from 'next/link'

export default function About() {
    return (
        <main>
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