import Image from 'next/image'
import { useState, useEffect } from 'react'
import { m, useAnimation } from 'framer-motion'

const fadeIn = {
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 3,
            type: "spring"
        }
    },
    start: {
        opacity: 0,
        scale: 2
    }
}

const fadeOut = {
    end: {
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    start: {
        opacity: 1
    }
}

const WHATISTHIS = () => {
    const [revealed, setRevealed] = useState(false);
    const controls = useAnimation();

    return (
        <section className='h-screen flex justify-center items-center'>
            {!revealed ? (
                <m.div className=""
                onMouseEnter={
                    () => {
                        controls.start('end')
                        setTimeout(() => {
                            setRevealed(true)
                        }, 1000)
                    }
                }
                variants={fadeOut}
                initial='start'
                animate={controls}
                onClick={
                    () => setRevealed(true)
                }>
                    <Image src="/logo.png" alt="Akari Logo" width={500} height={500}/>
                </m.div>
            ) : (
                <m.div className="border border-yellow-300 aspect-square relative"
                variants={fadeIn}
                initial='start'
                animate={controls}
                onLoad={() => controls.start('end')}
                >
                    <Image src="/demon_girl.png" alt="What is this?" width={500} height={500} className='absolute top-0 right-0'/>
                </m.div>
            )}
        </section>
    )
}

export default WHATISTHIS