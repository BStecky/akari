import Image from 'next/image'
import { useState, useEffect } from 'react'
import {m, useAnimation} from 'framer-motion'

const fadeIn = {
	end: {
		opacity: 1,
        scale: 1,
		transition: {
			duration: 1.5,
			delay: .5
		}
	},
	start: {
		opacity: 0,
        scale: 1.1
	}
}

const Gallery = () => {
    const [page, setPage] = useState(1)
    const controls = useAnimation()

	useEffect(() => {

	})

	useEffect(() => {
		controls.start('end')
	},[controls])

    return (
        <m.div className='flex flex-col'
        variants={fadeIn}
        initial='start'
        animate={controls}>
        <h1 className='px-[50px] text-3xl pb-6'>AKARI <span className='text-yellow-300 text-4xl'>LOOKBOOK</span> SPRING 2022</h1>
        <div className='masonry sm:masonry-sm md:masonry-md max-w-[1280px] px-[50px]'>
            {page === 1 && (
                <>
                    <div className='pb-4 break-inside'><Image src='/gallery25.jpeg' alt='Gallery Image' quality={50} layout='' width={806} height={604}/></div>
                    <div className='pb-4 break-inside'><Image src='/gallery1.jpeg' alt='Gallery Image' quality={50} layout='' width={677} height={1166}/></div>
                    <div className='pb-4 break-inside'><Image src='/gallery9.jpeg' alt='Gallery Image' quality={50} layout='' width={729} height={1094}/></div>
                    <div className='pb-4 break-inside'><Image src='/gallery20.jpeg' alt='Gallery Image' quality={50} layout='' width={806} height={604}/></div>
                    <div className='pb-4 break-inside'><Image src='/gallery21.jpeg' alt='Gallery Image' quality={50} layout='' width={867} height={735}/></div>
                    <div className='pb-4 break-inside'><Image src='/gallery10.jpeg' alt='Gallery Image' quality={50} layout='' width={608} height={973}/></div>
                </>
            )}
            {page === 2 && (
                <>
                    <div className='pb-4 break-inside'><Image src='/gallery23.jpeg' alt='Gallery Image' quality={50} layout='' width={806} height={604}/></div>
                    <div className='pb-4 break-inside'><Image src='/gallery11.jpeg' alt='Gallery Image' quality={50} layout='' width={1094} height={729}/></div>
                    <div className='pb-4 break-inside'><Image src='/gallery8.jpeg' alt='Gallery Image' quality={50} layout='' width={782} height={1036}/></div>
                    <div className='pb-4 break-inside'><Image src='/gallery24.jpeg' alt='Gallery Image' quality={50} layout='' width={806} height={604}/></div>
                    <div className='pb-4 break-inside'><Image src='/gallery3.jpeg' alt='Gallery Image' quality={50} layout='' width={781} height={1192}/></div>

                </>
            )}
        </div>
        <div className='w-full flex justify-center'>
            <div className='w-6 flex justify-between'>
                <button onClick={()=>setPage(1)} className='hover:text-yellow-300'>{page === 1 ? (<p className='text-yellow-300'>1</p>) : (<p>1</p>)}</button>
                <button onClick={()=>setPage(2)} className='hover:text-yellow-300'>{page === 2 ? (<p className='text-yellow-300'>2</p>) : (<p>2</p>)}</button>
            </div>
        </div>
        </m.div>
    )
}

export default Gallery