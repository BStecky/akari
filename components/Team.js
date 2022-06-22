import TeamCard from "./TeamCard"
import corvidd from '../assets/corvidd.png'
import aime from '../assets/Aime.png'
import jaykwa from '../assets/Jaykwa.png'
import octillion from '../assets/Octillion.png'

const Team = () => {

    return (
        <section id='team' className='z-10 relative w-screen bg-darkPurple shadow-innerLg flex justify-center py-20 bg-teambg bg-center bg-cover border-yellow-300 border-t-4 border-b-4'>
            <div className='max-w-screen-xl w-full px-12 flex flex-col justify-start items-center'>
                <div className='w-full'>
                    <div>
                            <h3 className='text-4xl md:text-5xl lg:text-6xl w-full text-right'><span className='text-yellow-300'>Our </span>Team</h3>
                    </div>
                </div>
                <div className='grid gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full pb-6 py-20'>   
                        <TeamCard name='Aime' image={aime} title='Founder / Developer'>
                            Aime is a Founder and Developer, working hard to ensure the continued growth of 
                            our community.
                        </TeamCard>
                        <TeamCard name='Jaykwa' image={jaykwa} title='Artist'>
                            Jaykwa is the talent behind the entire aesthetic of Akari. She delivers consistently 
                            excellent artwork for us all to enjoy.
                        </TeamCard>
                        <TeamCard name='Corvidd' image={corvidd} title='Web Developer'>
                            Corvidd is the Frontend Web Developer at Akari, delivering our message in a sleek package.
                        </TeamCard>
                </div>
            </div>
        </section>
    )
}

export default Team