import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import ScrollRevealContainer from '@/components/ScrollRevealContainer';
import Projects from '@/components/projects';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  return (
    <>
      <main className="md:mt-[9rem] pb-[3.5rem] mt-[7rem] lg:max-w-7xl mr-auto ml-auto">

        <div>
          <ScrollRevealContainer>

            <div className='md:flex justify-between'>
              <section id='homepage' />
              <div className='block md:w-[70%]'>
                <h1 className='md:text-5xl w-full text-4xl md:p-0 p-1 md:text-left lg:ml-4 md:ml-[2rem] text-center font-bold md:mt-[7rem]'>
                  Olá, eu sou Rafael 👋
                </h1>
                <h2 className='md:text-3xl text-[#1DDA52] text-4xl md:p-0 p-1 md:text-left lg:ml-4 md:ml-[2rem] text-center'>Software developer</h2>
              </div>
              <div className='flex justify-center md:-mt-[3rem] animate-float md:px-0 px-[2rem] mr-auto ml-auto '>
                <Image
                  src="/developer.webp"
                  alt="iphone"
                  width={600}
                  height={1040}
                  className="z-10 pb-[4rem] py-[4rem] object-contain select-none"
                />
              </div>

            </div>
          </ScrollRevealContainer>
        </div>

        <section id='Sobre' />
        <div className='py-6 px-8'>
          <ScrollRevealContainer>
            <h1 className='text-center mb-[5rem] md:text-2xl text-xl font-semibold text-[#1DDA52]'>Sobre</h1>
            <div className='md:flex'>
              <div className='md:mr-9 mr-auto ml-auto justify-center flex '>
                <Image className="select-none md:px-0 px-[1rem] pb-3 object-contain w-[230rem]" src={"/developing.webp"} width={1400} height={1400} alt="acessórios"></Image>
              </div>
              <div style={{ lineHeight: "1.5" }} className='lg:text-xl md:ml-8 md:text-start text-center mt-auto mb-auto'>
                Hoje em dia, ter uma <span className='text-[#1DDA52] font-semibold'>presença online forte</span> é <span className='text-[#1DDA52] font-semibold'>essencial</span> para <span className='text-[#1DDA52] font-semibold'>qualquer negócio.</span> Como especialista em desenvolvimento web, estou aqui para ajudar sua empresa a se <span className='text-[#1DDA52] font-semibold'>destacar na internet.</span> Ofereço serviços de desenvolvimento web de <span className='text-[#1DDA52] font-semibold'>alta qualidade</span>, incluindo a criação de sites empresariais, landing pages, APIs e sites completos, todos feitos <span className='text-[#1DDA52] font-semibold'>sob medida</span> para <span className='text-[#1DDA52] font-semibold'>atender às necessidades</span> específicas do seu negócio. Com minha experiência e dedicação, garanto que seu projeto seja entregue com <span className='text-[#1DDA52] font-semibold'>excelência</span> e que você tenha um <span className='text-[#1DDA52] font-semibold'>site de qualidade</span> que represente sua marca da melhor forma possível. Entre em contato comigo para saber mais sobre como posso ajudar a <span className='text-[#1DDA52] font-semibold'>impulsionar sua presença online!</span>
              </div>
            </div>
          </ScrollRevealContainer>
        </div>
        <ScrollRevealContainer>
          <section id='Projetos' />
          <div className='mb-[3rem]'>
            <ScrollRevealContainer>
              <h1 className='text-center md:text-2xl text-xl font-semibold mb-[3rem] text-[#1DDA52]'>Projetos</h1>
            </ScrollRevealContainer>
            <div className='mr-auto ml-auto justify-center'>
              <div className='grid flex-col lg:grid-cols-2 md:grid-cols-2 grid-cols-1 m-4 justify-center'>
                <Projects src={"/dmsports.png"} title={"DMSports"} desc={"Loja virtual feita do zero com nodejs e nextjs"} link={"https://dmsports.netlify.app"} />
                <Projects src={"/cturandi.png"} title={"CTUrandi"} desc={"Site empresarial para feito com nextjs"} link={"https://www.clubedetirourandi.com.br"} />
              </div>
            </div>
            <h1 className='text-center mt-[3rem] font-bold text-3xl'>
              Outros projetos no GitHub
            </h1>
            <button onClick={() => router.push("https://github.com/rafinhahdc19")} className='flex border rounded-3xl p-2 px-4 mr-auto ml-auto mt-5'>
              <img className='mt-auto mb-auto' src={"/githublogo.svg"} width={80} height={80}></img>
              <img className='mt-auto mb-auto mx-6' src={"/githublogo.png"} width={100} height={100}></img>
            </button>

          </div>
          <section id='Contato' />
          <div className='py-6 px-8'>
            <h1 className='text-center mb-[4.5rem] md:text-2xl text-xl font-semibold text-[#1DDA52]'>Contato</h1>
            <div className='flex flex-col justify-center mr-auto ml-auto'>
              <h1 className='text-3xl justify-center mr-auto ml-auto mb-[3.5rem] font-medium text-center'>
                Converse comigo pelo Instagram
              </h1>
              <div className='mr-auto mb-[3.5rem] ml-auto justify-center'>
                <Link href={"https://www.instagram.com/_rafadev_"}>
                  <button className=' text-center bg-[#28AE41] md:p-6 p-4 md:text-xl text-lg font-medium rounded-lg'>
                    Entrar em contato pelo Direct
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollRevealContainer>
      </main>
      <Footer></Footer>
    </>
  );
}
