import Image from "next/image";
import linkedinIcon from '../../../public/icons8-linkedin.svg'
import githubIcon from '../../../public/icons8-github.svg'
import fileIcon from '../../../public/icons8-file.svg'

const SocialLinks = () => {
    return (
        <div className='flex gap-1'>
            <a href='https://br.linkedin.com/in/pedro-henrique-89689b146' target='_blank' className='hover:-translate-y-1.5 transition-transform duration-100'>
                <Image src={linkedinIcon} alt='linkedin-link' width={35} />
            </a>
            <a href='https://github.com/PrinceHard/' target='_blank' className='hover:-translate-y-1.5 transition-transform duration-100'>
                <Image src={githubIcon} alt='github-link' width={35} />
            </a>
            <a href='http://localhost:3000/Resume.pdf' download target='_blank' className='hover:-translate-y-1.5 transition-transform duration-100'>
                <Image src={fileIcon} alt='curriculum-link' width={35} />
            </a>
        </div>
    )
}
export default SocialLinks;