'use client';
import React, { useState } from 'react';
import * as motion from "motion/react-client";

import Image from 'next/image';

import Navbar from '../nav/Navbar';


import bannerImage from '@/public/images/banner-mobile.png';
import rocket from '@/public/images/rocket.svg';
import eyes from '@/public/images/eyes.svg';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

import crossCircled from '@/public/images/cross-circle.png'


export default function Banner() {
    const [unlockInputValue, setUnlockInputValue] = useState('');

    return (
        <div className='relative pb-4 bg-gradient-to-br from-[#7F73C7] to-[#C097DB]'>
            <Navbar />
            <div className='flex justify-center items-center text-center flex-col mt-6'>
                <h4 className='flex gap-1 text-secondary-light text-xl font-bold italic'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        <Image
                            src={rocket}
                            className=''
                            alt='bg'
                            height='auto'
                        />
                    </motion.div>

                    Unlock the Secrets Now!
                </h4>

                <h2 className='text-4xl font-bold py-4 text-white'>Unlock Any Private <br />Instagram Profile </h2>
                <div className='py'>
                    <p className='text-xl text-white'>See Private Profiles—No Tricks,</p>
                    <p className='inline-flex text-xl text-white'>Just Simple Steps!
                        <Image
                            src={eyes}
                            className='ml-2 h-auto w-auto'
                            alt='bg'
                        />
                    </p>
                </div>
                <div className='w-3/4 mt-6'>
                    <div className='relative w-full'>
                        <Input
                            type='email'
                            placeholder="@"
                            className='p-6 shadow-lg'
                            onChange={(e) => setUnlockInputValue(e.target.value)}
                            value={unlockInputValue}
                        />
                        <button
                            onClick={() => setUnlockInputValue('')}
                            className='absolute right-4 top-[calc(50%-10px)] text-primary'
                            aria-label="Clear input"
                        >
                            <Image
                                src={crossCircled}
                                alt=''
                                className='text-xl'
                                height={'auto'} />
                        </button>
                    </div>
                    <Link
                        href={'/search'}
                    >
                        <Button
                            variant='secondary'
                            className='w-full shadow-lg rounded-full mt-4 p-6 text-lg font-bold hover:bg-primary'
                        >🔓 Unlock Now</Button>
                    </Link>
                </div>

            </div>
            <div
                className='w-full flex justify-center'
            >
                <Image
                    src={bannerImage}
                    className='mt-12 pb-6 min-w-3/4 h-auto'
                    alt='banner mobile image'
                    priority // Prioritizes loading this image
                    loading="eager" // Disables lazy loading
                />
            </div>
        </div>
    );
}
