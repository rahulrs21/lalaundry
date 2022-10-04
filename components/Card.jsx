import { motion } from "framer-motion";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import OpacityIcon from "@mui/icons-material/Opacity";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import IronIcon from "@mui/icons-material/Iron";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// react icons
// import { MdIron } from 'react-icons/fa'
// import { GiDrop } from 'react-icons/fa'
// import { GiHanger } from 'react-icons/fa'
// import { MdLocalLaundryService } from 'react-icons/fa'

function Card() {
  return (
    <div className="p-3 md:p-5 mb-12 bg-white relative top-8 md:top-24 max-w-sm md:max-w-3xl lg:max-w-5xl rounded-lg mx-auto shadow-lg">
      <div className=" ">
        <div className="flex justify-evenly items-start ">
          <div className="flex flex-col justify-center items-center">
            {/* <motion.div initial={{y: -50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1}}><DryCleaningIcon  className='rounded-full h-[40px] w-[40px]  md:h-[64px] md:w-[64px] lg:h-[80px] lg:w-[80px] p-1  text-blue-500 my-2 bg-blue-200 hover:bg-blue-300 cursor-pointer hover:text-white' alt="" /></motion.div>
             */}

            <motion.img
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              src="/img/icons/anger.png"
              className="rounded-full h-[40px] w-[40px]  md:h-[64px] md:w-[64px] lg:h-[80px] lg:w-[80px] p-2  text-blue-500 my-2 bg-blue-400 hover:bg-blue-500 cursor-pointer hover:text-white"
              alt=""
            />

            <h3 className="text-[10px] md:text-2xl font-normal uppercase text-center mx-2">
              Dry Cleaning
            </h3>
          </div>

          <span className="inline-block h-14 md:h-24 w-0.5 rounded bg-gray-100 mb-6"></span>

          {/* <div className="flex flex-col justify-center items-center ">
            <div className="rounded-full p-1 my-2 bg-blue-200 hover:bg-blue-300 cursor-pointer">
              <OpacityIcon
                className="h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20  text-blue-500  hover:text-white"
                alt=""
              />
            </div>
            <h3 className="text-[10px] md:text-2xl font-normal uppercase text-center mx-2">
              Wet Cleaning
            </h3>
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              src="/img/icons/drop.png"
              className="rounded-full h-[40px] w-[40px]  md:h-[64px] md:w-[64px] lg:h-[80px] lg:w-[80px] p-2  text-blue-500 my-2 bg-blue-400 hover:bg-blue-500 cursor-pointer hover:text-white"
              alt=""
            />

            <h3 className="text-[10px] md:text-2xl font-normal uppercase text-center mx-2">
              WET CLEANING
            </h3>
          </div>

          <span className="inline-block h-14 md:h-24 w-0.5 rounded bg-gray-100 mb-6"></span>

          {/* <div className="flex flex-col justify-center items-center ">
            <div className="rounded-full p-1 my-2 bg-blue-200 hover:bg-blue-300 cursor-pointer">
              <LocalLaundryServiceIcon
                className=" h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20  text-blue-500  hover:text-white"
                alt=""
              />
            </div>
            <h3 className="text-[10px] md:text-2xl font-normal uppercase text-center mx-2">
              Laundry
            </h3>
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.6 }}
              src="/img/icons/laundry.png"
              className="rounded-full h-[40px] w-[40px]  md:h-[64px] md:w-[64px] lg:h-[80px] lg:w-[80px] p-2  text-blue-500 my-2 bg-blue-400 hover:bg-blue-500 cursor-pointer hover:text-white"
              alt=""
            />

            <h3 className="text-[10px] md:text-2xl font-normal uppercase text-center mx-2">
              Laundry
            </h3>
          </div>


          <span className="inline-block h-14 md:h-24 w-0.5 rounded bg-gray-100  mb-6"></span>

          <div className="flex flex-col justify-center items-center">
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.9 }}
              src="/img/icons/iron.png"
              className="rounded-full h-[40px] w-[40px]  md:h-[64px] md:w-[64px] lg:h-[80px] lg:w-[80px] p-2  text-blue-500 my-2 bg-blue-400 hover:bg-blue-500 cursor-pointer hover:text-white"
              alt=""
            />

            <h3 className="text-[10px] md:text-2xl font-normal uppercase text-center mx-2">
              Wash & press
            </h3>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
