'use client' // client component, not server rendered
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar() {
    const path = usePathname(); // hook to check current path
    return (
        <header className="NavHeader">
            <div className="Logo">
                <Image src="/images/ThreeCheeseLogo.png" alt="Three Cheese Logo"
                    width={150} height={150} priority
                />
            </div>
            <nav className="NavBar">
                <ul className="NavMain">
                    <li><Link href="/" className={path === '/' ? 'active' : null}>Home</Link></li>
                    <li><Link href="/orders" className={path.startsWith('/orders') ? 'active' : null}>Orders</Link></li>
                    <li><Link href="/about" className={path.startsWith('/about') ? 'active' : null}>About</Link></li>
                    <li><Link href="/contact" className={path.startsWith('/contact') ? 'active' : null}>Contact</Link></li>
                </ul>
                <ul className="NavIcons">
                    <li><Link href="/"><SearchIcon style={{fontSize:"30px"}} /></Link></li>
                    <li><Link href="/"><ShoppingCartIcon style={{fontSize:"30px"}} /></Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar