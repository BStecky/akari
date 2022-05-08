import Image from 'next/image'
import teaser from '../assets/teasertwo.png'

const Teaser = () => {
    return (
        <>
            <Image src={teaser} width={443} height={383} className='m-0' alt="Teaser Image"/>
        </>
    )
}

export default Teaser