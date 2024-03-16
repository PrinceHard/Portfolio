import Image from "next/image";

const SocialLinks = () => {
    return (
        <div className='flex gap-1'>
            <a href='https://br.linkedin.com/in/pedro-henrique-89689b146' target='_blank' className='hover:-translate-y-1.5 transition-transform duration-100'>
                <Image src="/linkedin.png" alt='linkedin-link' width={35} height={35} />
            </a>
            <a href='https://github.com/pedrohsjdev/' target='_blank' className='hover:-translate-y-1.5 transition-transform duration-100'>
                <Image src='/github.png' alt='github-link' width={35} height={35} />
            </a>
            <a href='/resume.pdf' download target='_blank' className='hover:-translate-y-1.5 transition-transform duration-100'>
                <Image src='/document.png' alt='curriculum-link' width={35} height={35} />
            </a>
        </div>
    )
}
export default SocialLinks;
