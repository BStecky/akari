import dynamic from 'next/dynamic';
import { m, useAnimation } from 'framer-motion'
import {useEffect} from 'react'

const springIn = {
  end: { 
      opacity: 1,
      transition: {
          duration: 2,
          delay: 0.1,
          type: "spring",
          bounce: 0
      }
  },
  start: {
      opacity: 3
  }
}

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function Box() {
  const controls = useAnimation()

  useEffect(() => {
      controls.start('end')
  },[controls])
  return (
    <m.div className='w-screen h-screen absolute top-0 left-0 -z-1 overflow-x-hidden'
    variants={springIn}
    initial='start'
    animate={controls}>
        <Spline scene="https://prod.spline.design/SKDDnKdOGDJiLBkU/scene.splinecode" />
    </m.div>
  );
}