import Image from 'next/image'

const ShareToast = () => {
    return (
        <div className=''>
            <div className='mx-auto absolute bottom-0 md:left-0 left-[20%] mb-8 md:m-8 bg-slate-900 w-[60%] md:w-72 md:h-20 p-4 md:p-12 rounded-lg flex flex-col justify-center items-center gap-1'>
                <Image
                    width={32}
                    height={32}
                    alt=''
                    src='./assets/CopySuccess.svg'
                    className='stroke-bold hidden md:block'
                />
                <span className='text-white md:font-semibold text-sm md:text-base'>
                    Link successfully copied!
                </span>
            </div>
        </div>
    )
}

export default ShareToast
