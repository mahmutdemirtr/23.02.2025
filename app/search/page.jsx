'use client';
import React, { useState } from 'react'
import Image from 'next/image';

import Loader from '../loading'
import { Input } from '@/components/ui/input'
import SearchResultsCard from '@/components/search/SearchResultsCard';

import crossCircled from '@/public/images/cross-circle.png'


export default function Search() {
  const [unlockInputValue, setUnlockInputValue] = useState('');
  // const [items, setItems] = useState(null);

  return (
    <div className='relative pb-4 bg-gradient-to-br from-[#7F73C7] to-[#C097DB] min-h-screen w-full'>
      <div className='relative w-3/4 mx-auto py-28'>
        <Input
          type='email'
          placeholder="@"
          className='p-6 shadow-lg'
          onChange={(e) => setUnlockInputValue(e.target.value)}
          value={unlockInputValue}
        />
        <button
          onClick={() => setUnlockInputValue('')}
          aria-label="Clear input"
          className='absolute right-4 top-[calc(50%-10px)] text-primary'>
          <Image
            src={crossCircled}
            alt=''
            className='text-xl'
            height={'auto'} />
        </button>
      </div>
      <div className='flex flex-col gap-4 px-6'>
        {unlockInputValue && unlockInputValue ?
          <>
            <SearchResultsCard />
            <SearchResultsCard />
            <SearchResultsCard />
            <SearchResultsCard />
            <SearchResultsCard />
          </>
          :
          <Loader loadingType='fetchLoader' />
        }
      </div>

    </div>
  )
}
