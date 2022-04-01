import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { Image } from 'next/image'

const Footer = () => {
    return (
        <footer className='w-100 h-40 bg-yellow-300 text-black flex items-center justify-center'>
            <div className='w-full max-w-screen-xl flex justify-between px-12'>
                <div className='flex items-center'>
                    <h5 className='text-3xl font-acierOutline'>Akari</h5>  
                    <img src='/Hydra.png' alt="Powered By Hydra" className='w-36 ml-6'/>
                </div>
                <div className='flex text-3xl justify-between w-20'>
                <a href="https://discord.gg/AkariLabs" target='_blank' rel='noreferrer'>
                <FaDiscord className=''/>   
                </a>
                <a href="https://twitter.com/AkariLabs" target='_blank' rel='noreferrer'>
                <FaTwitter className=''/>
                </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer