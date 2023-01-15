'use client'

import { useState } from 'react'
import Image from 'next/image'
import SharePopup from './ShareThis/SharePopup'

const LinkCard = ({
    title,
    url,
    image,
}: {
    title: string
    url: string
    image: string
}) => {
    const [showModal, setShowModal] = useState(false)

    const popupCloseHandler = () => setShowModal(false)
    return (
        <div className='px-8'>
            <div className='flex bg-amber-50 group items-center h-10 mb-2 border border-gray-200 w-90% rounded-lg shadow hover:scale-105 transition-all duration-200 ease-out  mx-auto max-w-3xl'>
                <a
                    href={url}
                    className='text-sm sm:text-base flex justify-between items-center w-full'
                >
                    <Image
                        src={image}
                        width={42}
                        height={42}
                        alt={title}
                        className='rounded-lg p-1 opacity-80 group-hover:opacity-100'
                    />

                    {title}
                    <div></div>
                </a>

                <button
                    onClick={() => setShowModal(true)}
                    className=' group-hover:opacity-100 p-2 opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out'
                >
                    <Image
                        src='/share.png'
                        width={32}
                        height={32}
                        alt=''
                        className='group-hover:opacity-80 opacity-0 hover:bg-slate-300 hover:opacity-80 p-1 rounded-full transition-all duration-200 ease-linear'
                    />
                </button>
            </div>
            <SharePopup onClose={popupCloseHandler} popupOpen={showModal} />
        </div>
    )
}

export default LinkCard
