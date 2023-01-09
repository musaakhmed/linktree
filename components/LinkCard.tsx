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
            className='flex bg-amber-50 group items-center h-12 mb-4 border border-gray-300 w-full rounded hover:scale-105 transition-all duration-200 ease-out justify-between'
        >
            {image && (
                <Image
                    src={image}
                    width={48}
                    height={48}
                    alt={title}
                    className='rounded-lg p-1'
                />
            )}
            <span className='text-sm'>{title}</span>
            <div className=' group-hover:opacity-100 p-2 opacity-0 hover:opacity-100 transition-all duration-150 ease-in-out'>
                SHR
            </div>
        </a>
    )
}

export default LinkCard
