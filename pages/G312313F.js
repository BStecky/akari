import Image from 'next/image'
import Teaser from '../components/Teaser'

const G312313F = () => {
    return (
        <section className="w-screen h-screen flex justify-center p-2 items-center">
            <div className="border border-yellow-300 bg-yellow-300  rounded-sm">
                <Teaser/>
                <div className='w-full flex justify-center items-center text-sitePurple text-3xl font-acier'>
                    <span className='mb-1'>?</span>
                </div>
            </div>
        </section>
    )
}

export default G312313F

