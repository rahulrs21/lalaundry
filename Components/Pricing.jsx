import React from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {motion} from 'framer-motion'


function Pricing() {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="title-font text-2xl md:text-3xl font-medium text-gray-900 text-center" >Get the <span className='underline decoration-[#4b69ff] text-blue-500'>Best Affordable Price</span></h1>

      </div>


      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap ">

          {/* item-1 */}
          <motion.div initial={{y:100, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:2}} className="p-4 w-full lg:w-1/3 mx-auto">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden text-center relative shadow-md cursor-pointer">
              <h2 className="tracking-widest text-lg title-font font-medium text-blue-500 mb-7">
                Best Price
              </h2>

              <div className="flex flex-col my-2 items-center">

                <img src="https://img.freepik.com/premium-photo/laundry-basket-blurred-background-modern-washing-machine_488220-17518.jpg?w=996" className="h-20 w-20 rounded-full " alt="" />
              </div>

              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Laundry Service
              </h1>


              <div className="leading-relaxed mb-3 flex flex-col items-center space-y-3">

                <div ><CheckBoxIcon className="text-blue-400" /> Dry Cleaning</div>
                <div><CheckBoxIcon className="text-blue-400" /> Dry Cleaning</div>
                <div><CheckBoxIcon className="text-blue-400" /> Dry Cleaning</div>

              </div>

              <div className="text-blue-800 inline-flex items-center pt-5">
                <span className="text-5xl font-bold">AED 50</span>
              </div>



            </div>
          </motion.div>

          {/* item-2 */}
          <motion.div initial={{y:100, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:1}} className="p-4 w-full  lg:w-1/3 ">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden text-center relative shadow-md border-2 border-blue-400 cursor-pointer">
              <h2 className="tracking-widest text-lg title-font font-medium text-blue-500 mb-7">
                Best Price
              </h2>

              <div className="flex flex-col my-2 items-center">

                <img src="https://img.freepik.com/premium-photo/laundry-basket-blurred-background-modern-washing-machine_488220-17518.jpg?w=996" className="h-20 w-20 rounded-full " alt="" />
              </div>

              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Home & Bedding
              </h1>
              

              <div className="leading-relaxed mb-3 flex flex-col items-center space-y-3">

                <div><CheckBoxIcon className="text-blue-400" /> Dry Cleaning</div>
                <div><CheckBoxIcon className="text-blue-400" /> Dry Cleaning</div>
                <div><CheckBoxIcon className="text-blue-400" /> Dry Cleaning</div>

              </div>


              <div className="text-blue-800 inline-flex items-center py-5">
                <span className="text-5xl font-bold">AED 40</span>
              </div>

            </div>
          </motion.div>


          {/* item-3 */}
          <motion.div initial={{y:100, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:2}} className="p-4 lg:w-1/3 ">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden text-center relative shadow-md cursor-pointer">
              <h2 className="tracking-widest text-lg title-font font-medium text-blue-500 mb-7">
                Affordable Price
              </h2>

              <div className="flex flex-col my-2 items-center">

                <img src="https://img.freepik.com/premium-photo/laundry-basket-blurred-background-modern-washing-machine_488220-17518.jpg?w=996" className="h-20 w-20 rounded-full " alt="" />
              </div>

              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Dry Cleaning & Ironed laundry
              </h1>
                <div className="leading-relaxed mb-3 flex flex-col items-center space-y-3">

                  <div><CheckBoxIcon className="text-blue-400" /> Dry Cleaning</div>
                  <div><CheckBoxIcon className="text-blue-400" /> Dry Cleaning</div>
                  <div><CheckBoxIcon className="text-blue-400" /> Dry Cleaning</div>

                </div>


                <div className="text-blue-800 inline-flex items-center py-5">
                  <span className="text-5xl font-bold">AED 30</span>
                </div>
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
}

export default Pricing;
