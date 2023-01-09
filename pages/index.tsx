import Image from 'next/image'
import Header from '../components/Header'
import LinkCard from '../components/LinkCard'
import data from '../data.json'

export default function Home() {
    return (
        <div className='bg-gradient-to-b from-blue-50 to-slate-50'>
            <Header name={data.name} avatar={data.avatar} />
            {data.links.map((link) => (
                <LinkCard key={link.url} {...link} />
            ))}
        </div>
    )
}
