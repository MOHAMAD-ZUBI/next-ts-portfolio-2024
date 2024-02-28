import {BlogCard} from '@/components/Blog/BlogCard';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { getSortedPostsData } from '@/lib/posts';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const posts = getSortedPostsData()
  return (
    <div className='min-h-screen bg-main-page main-page-specific'>
      <div>
        <div className='text-center mt-[100px]'>
          <TextGenerateEffect words={"\"Insights in Code: A Web Developer's Journey\""} color='white' size='3xl' />
          <TextGenerateEffect words='Exploring trends, tips, and stories for developers' color='primaryText' size='xl' className='' />
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center md:gap-[15px] max-md:mx-2'>
          {posts.map((post) => {
            return <BlogCard key={post.id} post={post} />
          })}
        

        </div>
      </div>
    </div>
  )
}

export default page;