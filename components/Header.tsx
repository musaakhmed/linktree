import Image from 'next/image'

const Header = ({ avatar, name }: { avatar: string; name: string }) => {
    return (
        <div className='flex flex-col items-center justify-center pt-12 mx-auto opacity-90 px-8'>
            <Image
                className='rounded-full'
                src={avatar}
                width={96}
                height={96}
                alt={name}
            />
            <h1 className='font-semibold py-2 text-xl mb-8'>{name}</h1>
        </div>
    )
}

export default Header
