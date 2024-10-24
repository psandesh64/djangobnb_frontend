'use client';

import { useState } from 'react';
import Image from 'next/image';
import useSearchModal, {SearchQuery} from '../hooks/useSearchModal';

const Categories = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState('');

  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
        country: searchModal.query.country,
        checkIn: searchModal.query.checkIn,
        checkOut: searchModal.query.checkOut,
        guests: searchModal.query.guests,
        bedrooms: searchModal.query.bedrooms,
        bathrooms: searchModal.query.bathrooms,
        category: _category
    }

    searchModal.setQuery(query);
  }


  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
      
      <div 
        onClick={() => _setCategory('')}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}

      >
        {/* <Image 
          src={'/icn_category.png'} 
          alt='category-beach'
          width={20}
          height={20}
        /> */}
        <div className='w-[20px] h-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>


        <span className='text-xs'>All</span>

      </div>

      <div 
        onClick={() => _setCategory('Beach')}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Beach' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image 
          src={'/beach.png'} 
          alt='category-beach'
          width={20}
          height={20}
        />

        <span className='text-xs'>Beach</span>

      </div>

      <div 
        onClick={() => _setCategory('Villas')}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Villas' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}

      >
        <Image 
          src={'/villas.png'} 
          alt='category-beach'
          width={20}
          height={20}
        />

        <span className='text-xs'>Villas</span>

      </div>

      <div 
        onClick={() => _setCategory('Cabins')}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Cabins' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}

      >
        <Image 
          src={'/cabin.png'} 
          alt='category-beach'
          width={20}
          height={20}
        />

        <span className='text-xs'>Cabins</span>

      </div>

      <div 
        onClick={() => _setCategory('Tiny homes')}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Tiny homes' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}

      >
        <Image src={'/tinyhome.png'} 
          alt='category-beach'
          width={20}
          height={20}
        />

        <span className='text-xs'>Tiny homes</span>
        
      </div>

    </div>
  )
}

export default Categories
