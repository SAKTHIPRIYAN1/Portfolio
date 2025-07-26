import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { Toaster,toast } from "react-hot-toast";
import { useEffect,useState } from 'react';



const Projects=()=>{
    const { ref: AboutRef, inView: Aboutvw } = useInView({
        threshold: 0, // Trigger as soon as any part of the element is visible
        rootMargin: '-40% 0px', // Offset to trigger when the element is in the center
    });
    const AboutCtrl = useAnimation();

    useEffect(() => {
        if (Aboutvw) {
            AboutCtrl.start({ opacity: 1 });
        } else {
            AboutCtrl.start({ opacity: 0 });
        }
    }, [Aboutvw]);


    const [chan,setchan]=useState(0);
        const projectDet=[
            {
                name:"Alumini Connect Portal",
                des:'A comprehensive Alumini management system integrating admin, alumni,  portals for seamless operations and connectivity.',
                tym:'College 2nd year',
                tools:'React, Express.js, PostgreSQL',
                lnk:"https://github.com/SAKTHIPRIYAN1/College-Management-system"
            },
            {
                name:"ChatMate",
                des:'A Chat App, designed for anonymous chatting with the ability to save users and log in to make users permanent with seamless and interactive experience for users to communicate anonymously ',
                tym:"2nd yr",
                tools:'MERN',
                lnk:"https://github.com/SAKTHIPRIYAN1/ChatMate"
            },
            {
                name:"Harmonix",
                des:'A Flutter Inspired from Spotify UI with extra functionalities like Gesture Based Navigation and Emotion based Recommendation.',
                tym:'3rd yr',
                tools:'Flutter,Fast Api,Tensorflow',
                lnk:"https://github.com/Kris-05/Harmonix"

            },
        ]
        const incre=()=>{
            let tmp=chan+1;
            if(tmp>=projectDet.length)
                tmp=0;
            setchan(tmp);
        }
    
        const decre=()=>{
            let tmp=chan-1;
            if(tmp<0)
                tmp=projectDet.length-1;
            setchan(tmp);
        }

        return(
        <motion.div
        
        variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
        }}
        initial="initial"
        animate={AboutCtrl}
        transition={{ duration: 0.3, delay: 0.2 }}

        ref={AboutRef}

        id="pro">
            <div className=" min-w-[300px] paddingDiv transition-all">
                <div className="LargeCon"> 
                    <h1 className="text-[30px] mb-3 ">Projects</h1>
                        <div className="w-full h-full blmd:hidden sm:hidden flex space-x-2">
                            {
                                projectDet.map((el,ind)=>{
                                    return <ProjComp det={el} key={ind} />
                                })    
                            }
                        </div> 
                        <div className="blmd:visible sm:visible sm:opacity-[1] sm:z-0 sm:flex blmd:flex items-center space-x-2 justify-center blmd:opacity-[1] blmd:z-0 opacity-[0] hidden invisible -z-10  ">
                        <div onClick={incre} className=" sm:h-10 sm:w-10 active:scale-75 transition-transform rotate-90  hover:text-teal-300 bg-teal-300/10  cursor-pointer items-center      h-12 w-12 transparent_blue rounded-full flex justify-center ">
                                    <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="w-8 h-8  cursor-pointer"
                                    >
                                                <path
                                                fill="currentColor"
                                                d="M12 16.5l-6-6h12l-6 6z"
                                                />
                                    </svg>
                        </div> 
                                
                                <ProjComp det={projectDet[chan]} />
                             <div onClick={decre} className=" sm:h-10 sm:w-10 active:scale-75 transition-transform sm:z-30 -rotate-90 hover:text-teal-300  bg-teal-300/10 cursor-pointer  items-center      h-12 w-12 transparent_blue rounded-full flex justify-center ">
                                    <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="w-8 h-8 cursor-pointer"
                                    >
                                                <path
                                                fill="currentColor"
                                                d="M12 16.5l-6-6h12l-6 6z"
                                                />
                                    </svg>
                                </div>
                        </div>  

                        {/* <div className=" flex w-full justify-center space-x-2 py-2">
                        <div className="h-[6px] w-[6px] rounded-full bg-white/70 hover:bg-white cursor-pointer hover:h-[8px] hover:w-[8px] " ></div>
                        <div className="h-[6px] w-[6px] rounded-full bg-white/70 hover:bg-white cursor-pointer hover:h-[8px] hover:w-[8px] " ></div>
                        <div className="h-[6px] w-[6px] rounded-full bg-white/70 hover:bg-white cursor-pointer hover:h-[8px] hover:w-[8px] " ></div>
                        </div> */}
                </div>
            </div>
        </motion.div>
        )
}

const ProjComp=({det})=>{
    let name=det.name
    let tools=det.tools
    let tym=det.tym
    let des=det.des
    let PreLink=det.lnk

    return(
        <div className=" border-shadow sm:min-w-[200px]  sm:h-[260px] sm:text-[14px] md:text-[14px] blmd:w-[50%] sm:w-[50%] sm:mx-auto blmd:mx-auto blmd:text-[17px]   relative  h-[280px] md:h-[310px] flex flex-col hover:shadow-sm hover:shadow-slate-700 cursor-pointer group   w-1/3 bg-[rgba(45,58,83,0.34)] px-4 py-3 rounded-lg"> 
            <div className="flex items-center justify-center font-bold text-teal-300 "> 
                <h1>{name}</h1>
            </div>
            <div className=" sm:my-1 my-2 grid grid-flow-row grid-cols-1 gap-2  sm:gap-0 h-full w-full ">
                <div className=" flex space-x-3 ">
                    <h1 className="font-bold text-teal-00">Tools:</h1>
                    <h1>{tools}</h1>
                </div>
                <div className="absolute top-24 sm:space-y-1 space-y-2">

                
                    <div className="  flex leading-tight ">
                        <h1>    {des}
                        </h1>
                    </div>
                    <div className=" flex space-x-3 ">
                        <h1 className="font-bold text-teal-0">Period:</h1>    
                        <h1>{tym}</h1>
                    </div>   
                </div>            
            </div>
            <a href={PreLink} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                 <p className=" italic group-hover:font-bold "  target="_blank">View Code</p>
            </div>
            </a>
        </div>
    )
}

export default Projects;