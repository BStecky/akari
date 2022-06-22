import Image from 'next/image'

const secret = () => {
    return (
        <section className="w-screen h-screen flex justify-center p-2 items-center">
            <div className="">
                <Image src="/Hplusbackground.png" alt="H + Background" width={1000} height={1000}/>
            </div>
        </section>
    )
}

export default secret

