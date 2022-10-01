
import { motion } from "framer-motion"
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import IronIcon from '@mui/icons-material/Iron';

function Card() {
  return (
    <div className='p-3 md:p-5 mb-12 bg-white relative top-8 md:top-24 max-w-sm md:max-w-3xl lg:max-w-5xl rounded-lg mx-auto shadow-lg'>
      <div className=' '>
        <ul className='flex justify-evenly items-start '>
            <li className='flex flex-col justify-center items-center'>
                <motion.div initial={{y: -50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1}}><DryCleaningIcon  className='rounded-full h-10 w-10  md:h-16 md:w-16 lg:h-20 lg:w-20 p-1  text-blue-500 my-2 bg-blue-200 hover:bg-blue-300 cursor-pointer hover:text-white' alt="" /></motion.div>
                <h3 className='text-[10px] md:text-2xl font-normal uppercase text-center mx-2'>Dry Cleaning</h3>
            </li>

            <span className="inline-block h-14 md:h-24 w-0.5 rounded bg-gray-100 mt-8 mb-6"></span>

            <li className='flex flex-col justify-center items-center '>
            <motion.div initial={{y: -50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1.3}}><OpacityIcon  className='rounded-full h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20 p-1 text-blue-500 my-2 bg-blue-200 hover:bg-blue-300 cursor-pointer hover:text-white' alt="" /></motion.div>
                <h3 className='text-[10px] md:text-2xl font-normal uppercase text-center mx-2'>Wet Cleaning</h3>
            </li>

            <span className="inline-block h-14 md:h-24 w-0.5 rounded bg-gray-100 mt-8 mb-6"></span>


            <li className='flex flex-col justify-center items-center '>
            <motion.div initial={{y: -50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1.5}}><LocalLaundryServiceIcon  className='rounded-full h-10 w-10  md:h-16 md:w-16 lg:h-20 lg:w-20 p-1 text-blue-500 my-2 bg-blue-200 hover:bg-blue-300 cursor-pointer hover:text-white' alt="" /></motion.div>
                <h3 className='text-[10px] md:text-2xl font-normal uppercase text-center mx-2'>Laundry</h3>
            </li>

            <span className="inline-block h-14 md:h-24 w-0.5 rounded bg-gray-100 mt-8 mb-6"></span>


            <li className='flex flex-col justify-center items-center '>
            <motion.div initial={{y: -50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1.7}}><IronIcon  className='rounded-full h-10 w-10  md:h-16 md:w-16 lg:h-20 lg:w-20 p-1 text-blue-500 my-2 bg-blue-200 hover:bg-blue-300 cursor-pointer hover:text-white' alt="" /></motion.div>
                <h3 className='text-[10px] md:text-2xl font-normal uppercase text-center mx-2'>Dry Cleaning</h3>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Card
