import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

import Sidebar from './Sidebar'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggle = () => setMenuOpen(!menuOpen)

    return (
        <div className='fixed top-0 w-screen z-100 h-24 px-12 py-7 flex justify-center align-middle'>
        <nav className='w-screen relative z-100 text-white flex justify-between align-center'>
            <Link href="/" passHref><h3 className='text-3xl font-acierOutline transition-all hover:text-yellow-200 cursor-pointer'>Akari</h3></Link>
            <ul className='hidden md:flex list-none justify-between w-[18rem] pt-1 3xl:d-none'>
                <li><Link href="/" className="transition-all hover:text-yellow-200" passHref>HOME</Link></li>
                <li><Link href="https://light-city.io" className="transition-all hover:text-yellow-200">STAKING</Link></li>
                <li><Link href="https://lp.light-city.io" className="transition-all hover:text-sitePurple hover:bg-white px-4 py-2 border-[1px] rounded border-white" passHref>GLOW LP</Link></li>
            </ul>
            <FaBars onClick={() => setMenuOpen(true)} className='text-2xl md:hidden mt-[5px] cursor-pointer hover:text-yellow-200'/>
            <Sidebar toggle={toggle} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        </nav>
        </div>
    )
}

export default Navbar