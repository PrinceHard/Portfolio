"use client";
import { motion } from "framer-motion";
import SocialLinks from "./components/SocialLinks";
import { ParallaxText } from "./ParallaxFunction";
import { Plaster } from "next/font/google";
import {listObject} from "../app/data/index"
import Project from "./components/Project";

const plaster = Plaster({ subsets: ['latin'], weight: '400', variable: '--font-plaster' })
export default function Home() {

	return (
		<>
			<section className="bg-hero-colorful bg-cover bg-no-repeat h-screen">
				<div className="bg-[rgba(255,255,255,0.4)] h-full">
					<div className='flex flex-col w-3/4 sm:w-3/5 md:w-[500px] lg:w-2/4 mx-auto pt-24'>
						<div className="">
							<h2 className='font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-900 tracking-tighter text-left'>
								OLÁ &#x1F44B; EU SOU O PEDRO
							</h2>
						</div>
						<div className="flex items-center">
							<motion.div
								initial={{ opacity: 0, y: -15 }}
								animate={{ opacity: 1, y: 0 }}
							>
								<h1 className='title bg-gradient-to-r from-[#007cf0] to-[#00dfd8] pr-3'>
									Fullstack
								</h1>
							</motion.div>
							<div className="pl-3">
								<SocialLinks />
							</div>
						</div>
						<motion.div
							initial={{ opacity: 0, y: -15 }}
							animate={{ opacity: 1, y: 0 }}
						>
							<h1 className='title bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] second pb-3'>
								Developer
							</h1>
						</motion.div>
						<div className="">
							<h3 className='text-zinc-900 text-[10px] sm:text-xs md:font-normal md:text-sm lg:font-medium text-right'>
								Estudante de Sistemas de Informação, tenho 21 anos. Amo estudar tecnologia e descobrir coisas novas. Tenho experiência com desenvolvimento fullstack a mais de dois anos. No momento estudando mais sobre Nest.JS ...
							</h3>
						</div>
					</div>
					<div className={`${plaster.variable} bg-transparent bottom-0 absolute`}>
						<ParallaxText baseVelocity={-5}>Java spring postgres nest</ParallaxText>
					</div>
				</div>
			</section>
			<section id="projects" className="bg-gradient animate-gradient relative">
				<div className={`${plaster.variable} bg-transparent`}>
					<ParallaxText baseVelocity={5}>Typescript next react tailwind</ParallaxText>
				</div>
				<div className="pt-20">
					<h1 className="font-extrabold text-8xl text-center tracking-[-8px]">
						Projetos
					</h1>
				</div>
				<div className="grid grid-cols-2 px-12 py-20">
					{listObject.map((n) => 
						<Project project={n} />
					)}
				</div>
			</section>
		</>
	)
}
