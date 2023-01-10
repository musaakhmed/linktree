import data from '../data.json'

import {
    GitHubIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
} from '../components/Icons'

const Socials = () => {
    return (
        <section className='flex items-center justify-center gap-1'>
            {data.socials.map((social) => {
                if (social.url.includes('twitter')) {
                    return (
                        <a key={social.url} href={social.url}>
                            <TwitterIcon />
                        </a>
                    )
                }
                if (social.url.includes('linkedin')) {
                    return (
                        <a key={social.url} href={social.url}>
                            <LinkedinIcon />
                        </a>
                    )
                }
                if (social.url.includes('instagram')) {
                    return (
                        <a key={social.url} href={social.url}>
                            <InstagramIcon />
                        </a>
                    )
                }
                if (social.url.includes('github')) {
                    return (
                        <a key={social.url} href={social.url}>
                            <GitHubIcon />
                        </a>
                    )
                }
            })}
        </section>
    )
}

export default Socials
