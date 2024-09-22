import TestimonialSlider from "../../components/TestimonialSlider";
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants';
const Testimonials = () => {
  return (
    <div className=" h-full bg-primary/30 py-32">
        <div className=" container mx-auto h-full flex flex-col justify-center  ">
          <motion.h2 className="h2 text-white mb-8 xl:mb-0 text-center"
           variants={fadeIn("up", 0.6)}
           initial="hidden"
           animate="show"
           exit="hidden">
            What client <span className=" text-accent">say.</span>
          </motion.h2>
          <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          >
            <TestimonialSlider/> 
          </motion.div>
        </div>
    </div>
  );
};

export default Testimonials;
