'use client'
import Image from "next/image";

function Cards({ props }) {
    return (
        <div className="py-4 px-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:-translate-y-1 ease-in-out duration-300 border-solid border-2 rounded-lg border-black flex flex-col justify-center">
            <Image src={props.image} width={500} height={0} alt={props.title} className="object-contain h-[13rem] !important" />
            <h1 className="text-center font-bold text-xl mt-5">{props.title}</h1>
            <h3 className="mt-6 text-md">{props.description}</h3>
            <div className="mt-10">
                <a href={props.url} target="_blank" className=" bg-black text-white py-2 px-3 rounded-lg hover:bg-slate-900">
                    <button>View Site</button>
                </a>
            </div>
        </div>
    )
}

export default Cards