'use client'
import Image from "next/image";

function Cards({ props }) {
    return (
        <div className="py-3 px-3 border-solid border-2 rounded-lg border-black">
            <Image src={props.image} width={500} height={0} alt={props.title} className="object-contain h-80 !important" />
            <h1 className="text-center font-bold text-xl mt-5">{props.title}</h1>
            <h3 className="mt-6 text-md">{props.description}</h3>
            <div className="mt-10">
                <button className=" bg-black text-white py-4 px-5 rounded-lg hover:bg-slate-900">
                    <a href={props.url} target="_blank">View Site</a>
                </button>
            </div>
        </div>
    )
}

export default Cards