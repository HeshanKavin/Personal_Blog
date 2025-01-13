import React from 'react'
import { CategoryCarousel } from './CategoryCarousel'


const CategorySection = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16">
            <h1 className='text-center font-bold text-3xl sm:text-4xl lg:text-5xl m-5'>Category</h1>
            <div>
                <div className='flex justify-center'>
                    <div className=' m-5 p-5 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-2/3'>
                        <CategoryCarousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorySection