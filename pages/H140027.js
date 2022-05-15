import CountdownCard from "../components/Countdown"
import Box from "../components/Box"
import Gallery from "../components/Gallery"
import {useState} from 'react'

const H140027 = () => {
    const [complete, setComplete] = useState(false)
    function toggle() {
        setComplete(true)
    }
    return (
        <container className='overflow-x-hidden w-screen min-h-screen flex justify-center items-center'>
            {!complete ? 
            (
                <>
                    <CountdownCard setComplete={toggle}/>
                    <Box/>
                </>
            ) : (
                <>
                    <div className='w-screen flex justify-center py-24'>
                    <Gallery/>
                    </div>
                </>
            )}
        </container>
    )
}

export default H140027