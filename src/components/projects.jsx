import Link from "next/link"

const Projects = ({ src, title, desc, link }) => {
    return (
        <>
            <div className="flex justify-center mb-3">
                <div className="border justify-center p-3 border-[#1DDA52] rounded-2xl">
                    <img
                        src={src}
                        className="mb-4"
                    />
                    <h1 className="font-bold text-2xl mb-2">{title}</h1>
                    <h2 className="font-medium text-xl mb-2">{desc}</h2>
                    <Link href={link} className="flex text-xl mb-2 text-[#4593F0]">
                        <h3 className="mr-2 font-light ">Visitar site </h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Projects