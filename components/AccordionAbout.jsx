import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
        <>
            <div className="text-left  px-5">
            <Accordion open={open === 1} animate={customAnimation} >
                <AccordionHeader onClick={() => handleOpen(1)} className="text-left">
                    <div className="flex justify-between items-center">

                        What are the rules of laundry?
                           
                    </div>
                    <div className="flex  ml-auto">
                        {open === 1 ? <span className="inline-block text-3xl text-blue-500 mt-8 mb-6">-</span> : <span className="inline-block text-3xl text-blue-500 mt-8 mb-6">+</span> }
                    </div>   
                    
                </AccordionHeader>
                <AccordionBody className="py-4 md:py-0 md:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolore velit sit repellat explicabo, mollitia voluptatum, alias ea rem veniam sunt quo cum ipsum expedita maxime odio eius. Eligendi, reprehenderit!
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={customAnimation} >
                <AccordionHeader onClick={() => handleOpen(2)} className="text-left ">
                <div className="flex justify-between items-center ">

                    What is the most common laundry day?
   
                </div>
                <div className="flex ml-auto">
                    {open === 2 ? <span className="inline-block text-3xl text-blue-500 mt-8 mb-6">-</span> : <span className="inline-block text-3xl text-blue-500 mt-8 mb-6">+</span>  }
                </div> 
                </AccordionHeader>
                <AccordionBody className="py-4 md:py-0 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum labore nostrum perferendis corrupti nulla dolorem officia! Sapiente, nam delectus!
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(3)} className="text-left ">
                <div className="flex justify-between items-center">
                    When should you do laundry?

                    </div>
                    <div className="flex ml-auto">
                    {open === 3 ? <span className="inline-block text-3xl text-blue-500 mt-8 mb-6">-</span> : <span className="inline-block text-3xl text-blue-500 mt-8 mb-6">+</span> }
                </div> 
                
                
                </AccordionHeader>
                <AccordionBody className="py-4 md:py-0 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum labore nostrum perferendis corrupti nulla dolorem officia! Sapiente, nam delectus!
                </AccordionBody>
            </Accordion>
            </div>
            </>

  );
}