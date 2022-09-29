import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialMessage from './TestimonialMessage'


function Testimonials() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      interval={5000}
    >
      <TestimonialMessage 
        paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolore placeat pariatur quam nobis minus repellendus, totam consequatur ea molestias vel repellat ipsum delectus, laboriosam numquam est cumque facilis natus." 
        author="HOLDEN CAULFIELD"
        image="/img/laundry-logo.png"
        role="Senior Product Designer"
      />
      
      <TestimonialMessage 
        paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolore placeat pariatur quam nobis minus repellendus, totam consequatur ea molestias vel repellat ipsum delectus, laboriosam numquam est cumque facilis natus." 
        author="HOLDEN CAULFIELD"
        image="/img/laundry-logo.png"
        role="Senior Product Designer"
      />
      <TestimonialMessage 
        paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolore placeat pariatur quam nobis minus repellendus, totam consequatur ea molestias vel repellat ipsum delectus, laboriosam numquam est cumque facilis natus." 
        author="HOLDEN CAULFIELD"
        image="/img/laundry-logo.png"
        role="Senior Product Designer"
      />
    </Carousel>
  );
}

export default Testimonials;
