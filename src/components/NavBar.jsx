'use client' // client component, not server rendered
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import navList from '@/data/navList'

function NavBar() {
    const path = usePathname(); // hook to check current path

    const navList = [
        {
            id: 1,
            title: 'Home',
            href: '/'
        },
        {
            id: 2,
            title: 'Orders',
            href: '/ordersDashboard'
        },
        {
            id: 3,
            title: 'About',
            href: '/about'
        },
        {
            id: 4,
            title: 'Contact',
            href: '/contact'
        },
    ]

    return (
        <header className="NavHeader">
            <nav className="NavBar" style={{ justifyContent: 'space-between' }}>
                <div className="Logo" style={{marginLeft:"2em"}}>
                    <Image src="/images/ThreeCheeseLogo.png" alt="Three Cheese Logo"
                        width={150} height={150} priority
                    />
                </div>
                <ul className="NavMain" style={{marginRight:"12em"}}>
                    {navList.map((item, id) => (
                        <li key={id}>
                            <Link href={item.href} className={path === item.href ? 'active' : null}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="NavIcons" style={{marginRight:"2em"}}>
                    <li><Link href="/"><SearchIcon style={{ fontSize: "30px" }} /></Link></li>
                    <li><Link href="/cart"><ShoppingCartIcon style={{ fontSize: "30px" }} /></Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar