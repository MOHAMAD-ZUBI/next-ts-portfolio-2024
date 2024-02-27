import BlogCard from '@/components/Blog/BlogCard';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='min-h-screen bg-main-page main-page-specific'>
      <div>
        <BlogCard/>
      </div>
    </div>
  )
}

export default page;