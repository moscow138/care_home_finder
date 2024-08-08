import { db } from '@/lib/db'
import Image from 'next/image';
import { useEffect } from 'react';

export default async function CategoryList() {
    const categories = await db.category.findMany();

    useEffect(() => {}, []);

  
  return (
    <div>
        
       <h2 className='font-bold'> Choose HealthCare Type</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {categories.map((category,index) => (
        
        <div className='flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer' 
        key={index} onClick={console.log('hi')}>
            <Image src='/carefinder.png'
            alt={category.categoryname}
            width={40}
            height={40}
            />
            {category.categoryname}
            
        </div>

      ))}

      </div>
    </div>
    
  );
}