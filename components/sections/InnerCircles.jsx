import React from 'react'
import Image from 'next/image';

import innerLeftShape from '@/public/images/inner-circle-left-shape.png';
import innerRightShape from '@/public/images/inner-circle-right-shape.png';
import { Button } from '../ui/button';
import SectionHeading from '../common/SectionHeading';
import Link from 'next/link';

export default function InnerCircles() {
    return (
        <div
            className='relative pt-16 z-10 outline-none w-full'
        >
            <Image
                src={innerLeftShape}
                alt='shape'
                height='auto'
                className='absolute left-0 top-16 mt-2 -z-10'
            />
            <Image
                src={innerRightShape}
                alt='shape'
                height='auto'
                className='absolute right-0 bottom-24 mb-2 -z-10'
            />
            <SectionHeading
                subtitle='Inner Circles'
                title='Wonder What They’re Posting Privately? 🤔'
                description='Discover private Instagram stories and posts—no need to ask for follows! 👀 Get the full view instantly, 100% anonymously. Unlock access to hidden moments and see what you’ve been curious about, completely under the radar. Experience the freedom to view private posts with no notifications or alerts sent. Stay in the know while keeping your identity discreet and secure.'
            >
                <Link href={'/'}>
                    <Button
                        variant='white'
                        className='inline-block shadow-custom-inner mt-6 w-auto mx-auto px-16 h-16 text-xl'
                    >See It Now 👀</Button>
                </Link>

            </SectionHeading>
        </div>
    );
}
