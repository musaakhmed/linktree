import Header from '../components/Header'
import LinkCard from '../components/LinkCard'
import Socials from '../components/Socials'
import SharePopup from '../components/ShareThis/SharePopup'
import data from '../data.json'

export default function Home() {
    return (
        <div className='bg-gradient-to-tr h-screen from-[#DAC4B7] via-[#F4EEAA] to-[#B5F1D2] '>
            <Header name={data.name} avatar={data.avatar} />
            {data.links.map((link) => (
                <LinkCard key={link.url} {...link} />
            ))}
            <Socials />
        </div>
    )
}
