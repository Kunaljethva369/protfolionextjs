import Image from 'next/image';

function Home1() {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-16 px-3 items-center'>
                <div className='leftImg ml-8 mr-0'>
                    <Image src={'/self.webp'} alt='Slef Image' width={500} height={200} className='m-auto' />
                </div>
                <div className='rightSide'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl lg:text-left text-center font-light tracking-wider leading-snug'>Turning Vision Into Reality With Design & Code. </h1>
                    <p className='mt-6 lg:text-left text-center text-lg md:text-2xl lg:text-xl'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                        Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                    <div className='buttons lg:justify-start justify-center  md:justify-center py-8 flex items-center'>
                        <a target='_blank' href={'/LastestResume.pdf'} download className='text-xl cursor-pointer flex bg-black text-white py-2 px-4 rounded-md hover:bg-slate-900'>
                            Resume
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className=" h-auto ml-1 !w-7 md:!w-6"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"></path></svg>
                        </a>
                        <div className='mx-7'>
                            <a className='text-xl text-gray underline hover:text-slate-800' href="mailto:kunaljethva90@gmail.com">Contact</a>
                        </div>
                    </div>
                </div>
                <div className='relative hidden lg:block'>
                    <div className='absolute -bottom-10 left-10'>
                        <a href='https://www.naukri.com/mnjuser/profile?id=&altresid' target='_blank' className='bg-black py-3 px-4 rounded-xl text-white hover:bg-slate-900'>Hire Me</a>
                    </div>
                </div>
                <div className='relative hidden lg:block'>
                    <div className='absolute -bottom-10 right-0 hidden lg:block'>
                        <Image src={'/lamp.svg'} alt='Lamp Image' width={100} height={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home1;