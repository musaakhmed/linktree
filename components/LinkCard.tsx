import Image from 'next/image'

const LinkCard = ({
    title,
    url,
    image,
}: {
    title: string
    url: string
    image?: string
}) => {
    return (
        <a
            href={url}
            className='flex items-center h-16 mb-4 border border-gray-300 w-full rounded hover:scale-105 transition-all duration-200 ease-out'
        >
            {/* <Image src={image} width={40} height={40} alt='' /> */}
            <span className=''>{title}</span>
        </a>
    )
}

export default LinkCard
