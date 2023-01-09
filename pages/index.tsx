import Image from 'next/image'
import LinkCard from '../components/LinkCard'
import data from '../data.json'

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center mt-12 mx-auto opacity-90 px-8'>
            <Image
                className='rounded-full'
                src={data.avatar}
                width={96}
                height={96}
                alt={data.name}
            />
            <h1 className='font-semibold py-2 text-xl mb-8'>{data.name}</h1>

            {data.links.map((link) => (
                <LinkCard key={link.url} {...link} />
            ))}
        </div>
    )
}
