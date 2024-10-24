import React from 'react'
import { getUserId } from '../lib/action'
import PropertyList from '../components/properties/PropertyList'

const MyPropertiesPage = async () => {
  const userId = await getUserId()

  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
        <h1 className='my-6 text-2xl'>My properties</h1>
        
        <PropertyList
          landlord_id={userId}/>
      
    </main>
  )
}

export default MyPropertiesPage
