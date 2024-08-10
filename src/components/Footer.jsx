'use client' // client component, not server rendered
import Link from "next/link"

function Footer() {

    return (
        <footer className="footer">
            All rights reserved<br />
            Follow Us: <Link href="#"> Facebook </Link> | <Link href="#"> Instagram </Link> |
            <Link href="#"> Twitter </Link>
        </footer>
    )
}

export default Footer