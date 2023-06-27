import SocialLinks from "./components/SocialLinks";

export default function Home() {
	return (
		<div className="flex items-center justify-center">
			<div className='grid grid-rows-5 grid-cols-10 max-w-4xl'>
				<div className="col-start-3 col-end-7 self-end">
					<h2 className='font-extrabold text-2xl text-gray-700 tracking-tighter'>
						OLÁ &#x1F44B; EU SOU O PEDRO
					</h2>
				</div>
				<div className='row-start-2 col-start-3 col-end-8 self-end'>
					<h1 className='title bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
						Fullstack
					</h1>
				</div>
				<div className="row-start-2 col-start-8 self-center">
					<SocialLinks />
				</div>
				<div className="row-start-3 col-start-3 col-end-9 self-start">
					<h1 className='title bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] second pb-3'>
						Developer
					</h1>
				</div>
				<div className="row-start-4 col-start-4 col-end-10 flex-wrap">
					<h3 className='max-w-lg text-end mt-6 ml-44 text-gray-700 font-medium'>
						Estudante de Sistemas de Informação, tenho 21 anos. Amo estudar tecnologia e descobrir coisas novas. Tenho experiência com desenvolvimento fullstack a mais de dois anos. No momento estudando mais sobre Nest.JS ...
					</h3>
				</div>
			</div>
		</div>
	)
}
