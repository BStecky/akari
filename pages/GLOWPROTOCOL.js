import Image from 'next/image'

const GLOWPROTOCOL = () => {
    return (
        <section className="w-screen h-screen flex justify-center p-2 items-center">
            <div className="border border-yellow-300 bg-yellow-300 max-h-[611px] rounded-sm">
                <Image src="/preview.png" alt="Preview Image" width={846} height={609}/>
                <div className='w-full flex justify-center items-center text-sitePurple text-3xl font-acier'>
                    <span className='mb-1'></span>
                </div>
            </div>
        </section>
    )
}

export default GLOWPROTOCOL