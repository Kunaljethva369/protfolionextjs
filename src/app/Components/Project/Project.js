import Cards from "../Cards";
import ProjectData from "./ProjectData";

function Project() {
    return (
        <div className='sm:px-4 md:px-5 py-14 px-5'>
            <h1 className='sm:text-5xl text-4xl font-semibold text-center'>Imagination Trumps Knowledge!</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    ProjectData.map(function (el, id) {
                        return (
                            <>
                                <Cards props={el} key={id} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Project