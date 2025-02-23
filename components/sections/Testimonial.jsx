import Image from 'next/image'
import React from 'react'
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';
import Reviews from '../Reviews/Reviews';

export default function Testimonial() {
    return (
       <div
         className='relative pt-16 z-10 outline-none'
       >
   
         <SectionHeading
           subtitle='Testimonials'
           title='What Our Users Say About Us 👤💬'
           description={`Hear Directly From Those We've Helped ⭐💬`}
         >
         
         </SectionHeading>
         <Reviews />
       </div>
     );
}
