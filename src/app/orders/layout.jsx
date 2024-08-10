import styles from '../page.module.css'

export default function PageLayout({ children }) {
    // Supports nested structures via the children prop
    return (
        <main>
            {children}
        </main>
    )
}