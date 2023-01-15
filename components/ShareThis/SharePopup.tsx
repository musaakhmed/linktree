import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast'
import Backdrop from './Backdrop'

import {
    ShareArrow,
    ShareCross,
    ShareFacebook,
    ShareLink,
    ShareLinkedin,
    ShareTwitter,
    ShareWhatsapp,
} from './ShareIcons'

const SharePopup = ({
    popupOpen,
    onClose,
    url,
    title,
}: {
    popupOpen: boolean
    onClose: any
    url: string
    title: string
}) => {
    const linkCopied = () =>
        toast.success('Link copied to clipboard!', {
            duration: 4000,
            position: 'bottom-left',
        })

    if (!popupOpen) return null
    return (
        <div className='fixed inset-0 flex justify-center items-center '>
            <div>
                <Toaster />
            </div>
            <Backdrop onClose={onClose} popupOpen={popupOpen} />
            <div className='w-4/6 sm:max-w-xs text-sm sm:text-base py-6 px-4 rounded-xl bg-white flex-col gap-1 flex z-50 '>
                <div className='flex pb-4 justify-between items-center px-2'>
                    <div></div>
                    <div className=''>Share this link</div>
                    <button onClick={onClose}>
                        <ShareCross />
                    </button>
                </div>

                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                    className=''
                >
                    <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                        <div className='flex gap-2'>
                            <ShareFacebook />
                            Share on Facebook
                        </div>
                        <ShareArrow />
                    </div>
                </a>
                <a
                    href={`https://www.linkedin.com/shareArticle?url=${url}&title=${title}`}
                    className=''
                >
                    <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                        <div className='flex gap-2'>
                            <ShareLinkedin />
                            Share on Linkedin{' '}
                        </div>
                        <ShareArrow />
                    </div>
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?url=${url}&text=${title}&via=punhan`}
                    className=''
                >
                    <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                        <div className='flex gap-2'>
                            <ShareTwitter />
                            Share on Twitter{' '}
                        </div>
                        <ShareArrow />
                    </div>
                </a>
                <a
                    href={`https://api.whatsapp.com/send?text=${title}%0a${url}`}
                    className=''
                >
                    <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                        <div className='flex gap-2'>
                            <ShareWhatsapp />
                            Share on Whatsapp{' '}
                        </div>
                        <ShareArrow />
                    </div>
                </a>
                {/* <a
                    href={`https://t.me/share/url?url=${url}&text=${title}`}
                    className=''
                >
                    <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                        <div className='flex gap-2'>
                            <ShareTelegram />
                            {/* <Image
                                alt=''
                                width={28}
                                height={28}
                                src='./assets/ShareTelegram.svg'
                            /> 
                            Share via Telegram{' '}
                        </div>
                        <ShareArrow />
                    </div>
                </a> */}

                <button
                    onClick={() =>
                        navigator.clipboard
                            .writeText(url)
                            .then(linkCopied, () => {
                                /* clipboard write failed */
                            })
                    }
                    className='flex justify-between items-center border rounded-lg mt-4 px-4 py-3 mx-1 hover:bg-slate-100 transition-all duration-300 ease-in-out'
                >
                    <ShareLink />
                    <span className='text-md text-slate-700 text-ellipsis whitespace-nowrap overflow-hidden px-5'>
                        {url}
                    </span>
                    <span className='px-2 py-1 hover:bg-opacity-100 bg-opacity-80 bg-blue-600 rounded-lg text-white duration-100 transition-all ease-linear'>
                        Copy
                    </span>
                </button>
            </div>
        </div>
    )
}

export default SharePopup
