import SocialLinks from "./components/SocialLinks";

export default function Home() {
	return (
		<>
			<div className="relative gradient"></div>
			<div className='absolute inset-0 z-10 flex flex-col w-full my-32 items-center'>
				<h2 className='font-extrabold text-2xl text-gray-700 tracking-tighter mr-72'>OLÁ &#x1F44B; EU SOU O PEDRO</h2>

				<div className='flex items-center gap-3'>
					<h1 className='title bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
						Fullstack
					</h1>
					<SocialLinks />
				</div>
				<h1 className='title bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] second pb-3'>
					Developer
				</h1>
				<h3 className='max-w-lg text-end mt-6 ml-44 text-gray-700 font-medium'>
					Estudante de Sistemas de Informação, 21 anos. Tenho experiência como desenvolvedor fullstack atuando a mais de dois anos. Amo tecnologia e descobrir coisas novas. Aprendendo Nest.JS no momento...
				</h3>
			</div>
		</>
	)
}
