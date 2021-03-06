import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import React from 'react'

// eslint-disable-next-line react/prop-types
const Sidebar = ({toggle, menuOpen }) => {
    return (
        <AnimatePresence>
        { menuOpen && (
        <div className='fixed w-screen h-screen z-50'>
            <motion.div className='fixed w-screen h-screen opacity-50 bg-black top-0 left-0'
                onClick={() => toggle()}
                key='background'
                variants= {{
                    hidden: {
                        opacity: 0,
                    },
                    visible: {
                        opacity: 0.75,
                        transition: {
                            duration: .1,
                        }
                    }
                }}
                initial='hidden'
                animate='visible'
                exit='hidden'
            />
            <motion.nav className='fixed top-0 right-0 h-screen w-screen sm:w-96 bg-gray-900 flex-col justify-center items-center text-center p-24'
                key='menu'
                initial={{ x: '100vh' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', damping: 15, duration: .5}}
                exit={{ x: '100vh' }}

            >
                <AiOutlineClose onClick={() => toggle()} className='absolute top-12 right-12 text-2xl'/>
                <Link href="/" passHref>
                    <h2 className='text-4xl font-[acier-bat-outline]'>Akari</h2>
                </Link>
                <hr className='my-4'/>
                <ul className='gap-2 flex flex-col'>
                <li><Link href="https://akarilabs.io/" className="my-4 transition-all hover:text-yellow-200" passHref>HOME</Link></li>
                <li><Link href="https://light-city.io" className="my-4 transition-all hover:text-yellow-200">STAKING</Link></li>
                <li><Link href="https://lp.light-city.io" className="my-4 transition-all hover:text-sitePurple hover:bg-white px-4 py-2 border-[1px] rounded border-white" passHref>GLOW LP</Link></li>
                <li><Link href="https://shrine.light-city.io/" className="my-4 transition-all hover:text-yellow-200" >THE SHRINE</Link></li>
                <li><Link href="https://raffle.light-city.io/" className="my-4 transition-all hover:text-yellow-200" >RAFFLE DISTRICT</Link></li>
                <li><Link href="https://shop.akarilabs.io/" className="my-4 transition-all hover:text-yellow-200" >GLOW OUTLET</Link></li>
                    <li><hr className='my-4'/></li>
                    <li>
                        <div className='flex justify-center text-3xl'>
                            <a href="https://discord.gg/AkariLabs" target='_blank' rel='noreferrer'>
                            <FaDiscord className='mx-2'/>   
                            </a>
                            <a href="https://twitter.com/AkariLabs" target='_blank' rel='noreferrer'>
                            <FaTwitter className='mx-2'/>
                            </a>
                        </div>
                    </li>
                </ul>
            </motion.nav>
        </div>
        )}
        </AnimatePresence>
    )
}

export default Sidebar