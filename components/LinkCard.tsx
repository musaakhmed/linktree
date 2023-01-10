import Image from 'next/image'

const LinkCard = ({
    title,
    url,
    image,
}: {
    title: string
    url: string
    image: string
}) => {
    return (
        <div className='px-8'>
            <a
                href={url}
                className='flex bg-amber-50 group items-center h-10 mb-4 border border-gray-300 w-90% rounded-lg shadow hover:scale-105 transition-all duration-200 ease-out justify-between mx-auto max-w-3xl'
            >
                <Image
                    src={image}
                    width={42}
                    height={42}
                    alt={title}
                    className='rounded-lg p-1 opacity-80 group-hover:opacity-100'
                />

                <span className='text-sm'>{title}</span>

                <div className=' group-hover:opacity-100 p-2 opacity-0 hover:opacity-100 transition-all duration-200 ease-in-out'>
                    <Image
                        src='/share.png'
                        width={24}
                        height={24}
                        alt=''
                        className='opacity-80 bg-gray-300 p-1 rounded-full'
                    />
                </div>
            </a>
        </div>
    )
}

export default LinkCard
