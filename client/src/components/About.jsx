import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { Toaster,toast } from "react-hot-toast";
import { useEffect } from 'react';


const About=()=>{

    const { ref: AboutRef, inView: Aboutvw } = useInView({
        threshold: 0, // Trigger as soon as any part of the element is visible
        rootMargin: '-30% 0px', // Offset to trigger when the element is in the center
    });

    const AboutCtrl=useAnimation();

    useEffect(() => {
        if (Aboutvw) {
            AboutCtrl.start({ opacity: 1 });
           
        } else {
            AboutCtrl.start({ opacity: 0 });
        }
    }, [Aboutvw]);

    return(
        <motion.div   

        variants={{
            initial: { opacity: 0, },
            animate: { opacity: 1, }
        }}
        initial="initial"
        animate={AboutCtrl}
        transition={{ duration: 0.3, delay: 0.2 }}
        id="about"
        >
        
        <div className="sm:mt-[65px] mt-5 flex  w-full   " >
            <div className="paddingDiv">
                <div className="LargeCon">
                    <div className="ActualCon  border-shadow  sm:flex-col transparent_tone2 sm:items-center  lg:space-x-5 sm:space-y-5 ">
                            <div className="text-fntclr w-full lg:text-[30px] sm:text-[22px] text-[25px] leading-[1.2] ">
                               <h1> Hi I'm Sakthipriyan , 
                                a UnderGraduate from the College of Engineering Guindy.
                                </h1>
                            </div>
                            <div className="text-fntclr w-full  lg:text-[18px] md:text-[17px] text-[15px] leading-[1.3]">
                                <h1 ref={AboutRef} >
                                    I Love Crafting and Cracking things Up.
                                    And I just love coding; the thrill of solving  problems and building  projects keeps me constantly engaged and excited.
                                </h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default About;