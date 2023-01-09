import Image from 'next/image'
import data from '../data.json'

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center mt-12 mx-auto opacity-90'>
            <Image
                className='rounded-full'
                src={data.avatar}
                width={80}
                height={80}
                alt={data.name}
            />
            <h1>{data.name}</h1>
        </div>
    )
}
