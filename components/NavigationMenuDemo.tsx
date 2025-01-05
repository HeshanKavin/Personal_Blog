import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


const NavigationMenuDemo = () => {
    return (
        <NavigationMenu >
            <NavigationMenuList className='flex space-x-5'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Category</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[200px]">
                            <Link href="/category/subcategory1" title="Subcategory 1">Subcategory 1
                            </Link>
                            <Link href="/category/subcategory2" title="Subcategory 2">Subcategory 2
                            </Link>
                            <Link href="/category/subcategory3" title="Subcategory 3">Subcategory 3
                            </Link>
                            <Link href="/category/subcategory4" title="Subcategory 4">Subcategory 2
                            </Link>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <li><Link href={"/contact"}>Contact</Link></li>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavigationMenuDemo