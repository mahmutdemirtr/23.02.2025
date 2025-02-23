import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';


import storyImage from '@/public/images/story-image.png';
import storyShape from '@/public/images/story-shape.png';
import storyButtonShape from '@/public/images/story-button-shape.png';
import SectionHeading from '../common/SectionHeading';
import Link from 'next/link';


export default function Stories() {
  return (
    <div
      className='relative pt-16 z-10 outline-none w-full overflow-hidden'
    >

      <Image
        src={storyShape}
        alt='shape'
        height='auto'
        className='absolute right-0 -top-12 mb-2 -z-10'
      />

      <SectionHeading
        subtitle='Story Capture'
        title='Tired of Screenshotting Instagram Stories? 😩📸'
        description='Say goodbye to screenshots! 🚫 With our site, you can view, download, and save Instagram stories and pics—100% anonymously and hassle-free. 😎 Save the hassle and keep the memories—view Instagram Stories privately and securely without screenshotting. Enjoy seamless access to the content you love, anytime!'
      >
        <Link
          href={'/'}
        >
          <Button
            variant='white'
            className='inline-block shadow-custom-inner mt-6 w-auto mx-auto px-16 h-16 text-xl'
          >View Stories 🔥</Button>
        </Link>

        <Image
          src={storyButtonShape}
          alt='shape'
          height='auto'
          className='absolute right-8 -bottom-12 mb-2 -z-10'
        />
      </SectionHeading>
      <div className='flex justify-center pt-16'>
        <Image
          src={storyImage}
          alt='shape'
          height='auto'
          className=''
        />
      </div>
    </div>
  );
}
