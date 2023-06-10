import Cards from "../Cards";
import ProjectData from "./ProjectData";

function Project() {
    return (
        <div className='py-14'>
            <h1 className='text-7xl font-semibold text-center'>Imagination Trumps Knowledge!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
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