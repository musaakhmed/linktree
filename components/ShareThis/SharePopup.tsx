import {
    ShareArrow,
    ShareCross,
    ShareEmail,
    ShareFacebook,
    ShareLink,
    ShareLinkedin,
    ShareTwitter,
    ShareWhatsapp,
} from './ShareIcons'

const SharePopup = () => {
    return (
        <div className='mx-auto max-w-sm py-6 px-4 rounded-xl bg-white flex flex-col gap-1 justify-center'>
            <div className='flex pb-4 justify-between items-center px-2'>
                <div></div>
                <div className=''>Share this link</div>
                <ShareCross />
            </div>

            <a href='' className=''>
                <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                    <div className='flex gap-2'>
                        <ShareFacebook />
                        Share on Facebook
                    </div>
                    <ShareArrow />
                </div>
            </a>
            <a href='' className=''>
                <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                    <div className='flex gap-2'>
                        <ShareLinkedin />
                        Share on Linkedin{' '}
                    </div>
                    <ShareArrow />
                </div>
            </a>
            <a href='' className=''>
                <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                    <div className='flex gap-2'>
                        <ShareTwitter />
                        Share on Twitter{' '}
                    </div>
                    <ShareArrow />
                </div>
            </a>
            <a href='' className=''>
                <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                    <div className='flex gap-2'>
                        <ShareWhatsapp />
                        Share on Whatsapp{' '}
                    </div>
                    <ShareArrow />
                </div>
            </a>
            <a href='' className=''>
                <div className='flex justify-between items-center hover:bg-slate-100 transition-all duration-300 ease-in-out px-2 py-2 rounded'>
                    <div className='flex gap-2'>
                        <ShareEmail />
                        Share via email{' '}
                    </div>
                    <ShareArrow />
                </div>
            </a>

            <a
                href=''
                className='flex justify-between items-center border rounded-lg mt-4 px-4 py-3 mx-1 hover:bg-slate-100 transition-all duration-300 ease-in-out'
            >
                <ShareLink />
                <span>short link here</span>
                <a>Copy</a>
            </a>
        </div>
    )
}

export default SharePopup