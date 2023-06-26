'use client'
import Image from "next/image";
import './About.css';
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const AnimateSkills = ({ name, x, y }) => {
    return (
        <motion.div
            className="absolute bg-black text-white text-center  
            xl:py-4 xl:px-5 md:py-2 md:px-3 lg:py-3 lg:px-4
            py-1 px-2 rounded-full origin-center"
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}>
            {name}
        </motion.div>
    )
}

const Icon = ({ reference }) => {   
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start end", "end end"]
    });

    return (
        <>
            <figure className="absolute left-[8rem] stroke-black">
                <svg width="45" height="45" viewBox="0 0 100 100">
                    <circle cx="75" cy="50" r="20" className="stroke-purple-900 stroke-1 fill-none" />
                    <motion.circle cx="75" cy="50" r="20" className="stroke-red-900" 
                    style={{pathLength : scrollYProgress}}
                    />
                    <circle cx="75" cy="50" r="20" className="stroke-1 fill-none" />
                </svg>
            </figure>
        </>
    )
}

const Details = ({ position, companyName, time, dis }) => {
    const ref = useRef(null);
    return (
        <>
            <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between">
                <Icon reference={ref} />
                <div>
                    <span>{position} {companyName}</span>
                    <div>{time}</div>
                    <p>{dis}</p>
                </div>
            </li>
        </>
    )
}

const Scroller = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"]
    });
    return (
        <>
            <div ref={ref} className="mt-10 w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-40 top-0 w-[4px] h-full origin-top bg-black"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        position='Software Developer'
                        companyName='Tekno Point / DEPT'
                        time='2022 | Present'
                        dis='Working for IDFC FIRST BANK, Looking into the website part bulid logic, calculator, SEO recommended'
                    />
                    <Details
                        position='Junoir Frontend Developer'
                        companyName='Tekno Point / DEPT'
                        time='2021 | 20222'
                        dis='Working for IDFC FIRST BANK, Looking into the website part bulid logic, calculator, SEO recommended'
                    />
                </ul>
            </div>
        </>
    )
}

function About() {

    return (
        <div className='sm:px-4 md:px-5 py-10 px-5'>
            <h1 className='sm:text-5xl text-4xl font-semibold text-center'>Passion Fuels Purpose!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-16 px-3 items-start">
                <div className='leftImg border-x-slate-600 shadow-slate-950 drop-shadow-[[0_35px_35px_rgba(0,0,0,0.25)]'>
                    <Image src={'/kunal.png'} alt='Slef Image' width={500} height={200} className='py-3 px-4 border-2 border-black m-auto rounded-xl' />
                </div>
                <div className='rightSide xl:ml-0 lg:ml-4 md:ml-4'>
                    <h1 className='text-2xl md:text-3xl lg:text-2xl lg:text-left text-center font-light tracking-wider leading-snug'>BIOGRAPHY</h1>
                    <p className='mt-6 lg:text-left text-center text-lg md:text-2xl lg:text-lg'>
                        Hi, I m <b>Kunal</b>, a Web developer and MERN Stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 2 years of experience in the field. I am always looking for new and innovative ways to bring my clients visions to life.
                        <br />
                        <br />
                        I believe that design is about more than just making things look pretty – its about solving problems and creating intuitive, enjoyable experiences for users.
                        <br />
                        <br />
                        Whether I m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-6xl lg:text-center text-center font-semibold tracking-wider leading-snug">Skills</h1>
                <div className="mt-10 w-full h-[90vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center  mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
                    <div className="flex flex-col justify-center items-center">
                        <AnimateSkills name='Web' x='0' y='0' />
                        <AnimateSkills name='HTML' x='-15vw' y='10vh' />
                        <AnimateSkills name='CSS' x='-15vw' y='-10vh' />
                        <AnimateSkills name='Javascript' x='15vw' y='-10vh' />
                        <AnimateSkills name='BOOTSTRAP' x='15vw' y='10vh' />
                        <AnimateSkills name='SCSS' x='-24vw' y='-20vh' />
                        <AnimateSkills name='JQUERY' x='24vw' y='-20vh' />
                        <AnimateSkills name='REACTJS' x='-25vw' y='20vh' />
                        <AnimateSkills name='NEXTJS' x='25vw' y='20vh' />
                        <AnimateSkills name='AEM' x='0vw' y='30vh' />
                        <AnimateSkills name='GIT' x='0vw' y='-30vh' />
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-6xl lg:text-center text-center font-semibold tracking-wider leading-snug">Experience</h1>
                <div className="h-full">
                    <Scroller />
                </div>
            </div>
        </div>
    )
}

export default About