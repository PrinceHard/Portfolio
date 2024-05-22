import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'], variable: '--font-inter' })
export const metadata = {
  title: 'Pedro Henrique - Fullstack Developer',
  description: 'Bacharel em Sistemas de Informação, tenho 22 anos. Amo estudar tecnologia e descobrir coisas novas. Tenho experiência com desenvolvimento fullstack a mais de três anos. No momento me especializando em NestJs e AWS...',
  keywords: 'Portfólio, Pedro Henrique, Fullstack, Developer, Java, Spring, Postgres, NestJs, AWS, Typescript, NextJs, React, Tailwind, Pedro Henrique Full Stack, programador pedro henrique, Pedro Henrique de Jesus Silva, Pedro Henrique Silva dev',
  authors: [{name: 'Pedro Henrique'}], 
  robots: 'index, follow',
  creator: 'Pedro Henrique de Jesus Silva', 
  openGraph: {
      title: 'Portfólio Pedro Henrique - Fullstack Developer',
      url: 'https://portfolio-pedrohsj.vercel.app/',
      description: 'Bacharel em Sistemas de Informação, tenho 22 anos. Amo estudar tecnologia e descobrir coisas novas. Tenho experiência com desenvolvimento fullstack a mais de três anos. No momento me especializando em NestJs e AWS...',
      type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
