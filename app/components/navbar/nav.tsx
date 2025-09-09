"use client"

import Link from "next/link";
import NavItem, { NavItemInterface } from "../navitem/navitem";
import "./style.css"
import { usePathname } from "next/navigation";
import { FaBarsProgress } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
    const item: NavItemInterface[] = [
        {
            url: "/",
            label: "Home",
        },
        {
            url: "/about",
            label: "Sobre",
        },
        {
            url: "/projects",
            label: "Projetos",
        },
        {
            url: "/contact",
            label: "Contatos",
        },

    ]
    const pathname = usePathname();

    const [openMenu, setOpenmenu] = useState<boolean>(false);
    return (
        <div>
            <header>
                <nav className="navbar">
                    <Link href="/" className="logo">
                        <img src="logo.png" alt="Lucas" />
                    </Link>
                    <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                        {item.map((item, index) => (
                            <NavItem
                                key={index}
                                url={item.url}
                                label={item.label}
                                isActive={pathname === item.url}
                            />
                        ))}

                    </ul>
                    <button className="btn-mobile" onClick={()=> setOpenmenu (!openMenu)}>
                        <FaBarsProgress />
                    </button>
                </nav>

            </header>
        </div>
    )

}