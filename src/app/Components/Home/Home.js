import Image from 'next/image';

function Home1() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-16'>
                <div className='leftImg'>
                    <Image src={'/self.webp'} width={500} height={200} style={{ borderRadius: '10px' }} />
                </div>
                <div className='rightSide'>
                    <h1 className='heading text-5xl font-light tracking-wider leading-snug'>Turning Vision Into Reality With Design & Code. </h1>
                    <p className='mt-5 text-2xl'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                        Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                    <div className='buttons py-8 flex items-center'>
                        <a target='_blank' href={'/LastestResume.pdf'} download className='text-xl cursor-pointer flex bg-black text-white py-2 px-4 rounded-md hover:bg-slate-900'>
                            Resume
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" class="w-full h-auto ml-1 !w-7 md:!w-6"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"></path></svg>
                        </a>
                        <div className='mx-7'>
                            <a className='text-xl text-gray underline hover:text-slate-800' href="mailto:kunaljethva90@gmail.com">Contact</a>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-10 left-10'>
                    <a href='https://www.naukri.com/mnjuser/profile?id=&altresid' target='_blank' className='bg-black py-3 px-4 rounded-xl text-white hover:bg-slate-900'>Hire Me</a>
                </div>
                <div className='absolute right-10 bottom-10'>
                    <div className='bottom-0 right-0'>
                        <Image src={'/lamp.svg'} width={100} height={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home1;