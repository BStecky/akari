import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import NoSsr from './no-ssr'
import {m, useAnimation} from 'framer-motion'

const fadeIn = {
	end: {
		opacity: 1,
		transition: {
			duration: 1.5,
			delay: .5
		}
	},
	start: {
		opacity: 0
	}
}


const CountdownCard = ({setComplete}) => {
	const [hidden, setHidden] = useState(false)
	const controls = useAnimation()

	function toggle() {
		setHidden(!hidden)
	}

	useEffect(() => {

	})

	useEffect(() => {
		controls.start('end')
	},[controls])

	return (
		<section className="w-screen h-screen bg-gradient-to-r from-darkPurple to-[#171717] relative flex justify-center items-center font-acier text-[40px] sm:text-[78px] md:text-[120px] lg:text-[200px] text-white">
			{!hidden && (
				<m.div className='z-10 w-screen h-screen bg-black/30 flex justify-center items-center'
					variants={fadeIn}
					initial='start'
					animate={controls}>
					<NoSsr>
						<Countdown date={1652666400000}>
							<button onClick={() => setComplete()} className='bg-yellow-300 text-sitePurple text-xl sm:text-2xl px-4 py-2 rounded-sm hover:scale-105 transition-all duration-50'>What{"'"}s Inside?</button>
						</Countdown>
					</NoSsr>
				</m.div>
			)}
			<button className='absolute bottom-6 right-6 z-20 text-xl hover:text-yellow-300' onClick={()=> hidden ? window.location.reload(false) : toggle()}>
				{hidden ? "Show" : "Hide"}
			</button>
		</section>
	)
}

//1652666400000

export default CountdownCard;
