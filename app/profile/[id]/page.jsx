'use client';

import Image from 'next/image'
import React, { useState } from 'react'

import profilePic from '@/public/images/profile-thumb.png';
import infoAltFill from '@/public/images/info-alt-fill.svg';
import iconGallery from '@/public/images/icon-gallery.svg';
import iconVideo from '@/public/images/icon-video.svg';
import iconMarks from '@/public/images/icon-marks.svg';
import GalleryItems from '@/components/Gallery/GalleryItems';

export default function page() {
    const [activeTab, setActiveTab] = useState('gallery');
    return (
        <div className='relative bg-gradient-to-br text-white from-[#7F73C7] to-[#C097DB] min-h-screen w-full'>
            <div className='flex flex-col gap-6 pt-16 px-5'>
                <div className='w-full flex justify-center'>
                    <Image
                        src={profilePic}
                        alt='profile pic'
                        height={'auto'}
                    />
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-2xl font-extrabold'>Mahmut Demir</h4>
                    <p className='font-bold'>@mahmut-demir-tr</p>
                    <p className='font-rubikMonoOne'>Business - spor - cars</p>
                </div>
                <div className='flex justify-between text-lg px-2'>
                    <button><span className='font-bold'>37</span> posts</button>
                    <button><span className='font-bold'>30</span> followers</button>
                    <button><span className='font-bold'>30</span> following</button>
                </div>
                <div className='relative w-1/2 font-bold italic mx-auto text-center'>
                    <p>would you like to know who's also looked for this profile ?</p>
                    <Image
                        src={infoAltFill}
                        alt='icon'
                        height={'auto'}
                        className='absolute -right-5 -top-2'
                    />
                </div>

            </div>
            <div className='w-full flex justify-between items-center p-0.5 mt-4'>
                <button
                    onClick={() => setActiveTab('gallery')}
                    className={`w-1/3 flex justify-center items-center h-12 border-b transition-colors ${activeTab === 'gallery' ? 'border-black ' : 'border-theme-gray'} text-center`}
                >
                    <Image
                        src={iconGallery}
                        alt='icon'
                        height={'auto'}
                    />
                </button>
                <button
                    onClick={() => setActiveTab('video')}
                    className={`w-1/3 flex justify-center items-center h-12 border-b transition-colors ${activeTab === 'video' ? 'border-black ' : 'border-theme-gray'} text-center`}
                >
                    <Image
                        src={iconVideo}
                        alt='icon'
                        height={'auto'}
                    />
                </button>
                <button
                    onClick={() => setActiveTab('marks')}
                    className={`w-1/3 flex justify-center items-center h-12 border-b transition-colors ${activeTab === 'marks' ? 'border-black ' : 'border-theme-gray'} text-center`}
                >
                    <Image
                        src={iconMarks}
                        alt='icon'
                        height={'auto'}
                    />
                </button>
            </div>
            <GalleryItems isPaid={true} isUnlocked={true} />
        </div>
    )
}
