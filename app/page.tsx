import Header from '../components/Header'
import LinkCard from '../components/LinkCard'
import Socials from '../components/Socials'
import ShareToast from '../components/ShareThis/ShareToast'
import data from '../data.json'
import Backdrop from '../components/ShareThis/Backdrop'

export default function Home() {
    return (
        <div className='bg-gradient-to-tr h-screen from-[#DAC4B7] via-[#F4EEAA] to-[#B5F1D2] '>
            <Header name={data.name} avatar={data.avatar} />
            {data.links.map((link) => (
                <LinkCard key={link.url} {...link} />
            ))}
            <Socials />
            <ShareToast />
        </div>
    )
}
