import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import Image from "next/image"
import Link from "next/link"
import {notFound} from 'next/navigation'

export function generateMetadata({params}: {params: {postId: string}}){
    const posts = getSortedPostsData() //deduped!
    const {postId} = params

    const post = posts.find(post => post.id === postId)
    
    if(!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title : post.title,
    }
}

export default async function Post({params}: {params: {postId: string}}){
    const posts = getSortedPostsData() //deduped!
    const {postId} = params

    if (!posts.find(post => post.id === postId)){
        return notFound()
    }

    const {title, desc, author, date, contentHtml, read } = await getPostData(postId)

    const pubDate = getFormattedDate(date);
    return (
        <main className="text-white min-h-screen bg-main-page main-page-specific">
            <div  className='max-w-[1500px] mx-auto w-full text-white mt-[20px] px-[16px] py-[16px] '>
                    {/* header starts here */}
            <div className="flex md:flex-row flex-col justify-center items-center  gap-[20px] mt-[100px]">
            <div>
                <Image alt="" src="/assets/post-1.png" width={500} height={500} />
            </div>
            <div>
                <h1 className="md:text-3xl md:max-w-[60%] text-primaryText">{title}</h1>
                <p className="mt-2 md:text-lg text-gray-300 ">By {author}</p>
                <div className=" w-[18%] h-[1px] bg-primaryText"></div>
                <p className="md:text-lg text-gray-300">{pubDate}</p>
                <p>Read time:  {read} minutes</p>
            </div>
            {/* header ends here */}
            </div>
            <article className="mt-[50px] md:text-lg flex justify-center items-center flex-col ">
                <section className="prose prose-lg text-gray-300 bg-gray-800 rounded-lg p-6 max-w-[80%]" dangerouslySetInnerHTML={{__html:contentHtml}}/>
                
                <div className='my-12'>
            <a href="/"   className='p-4  bg-none border-2 border-primaryText text-sm  hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] duration-500 ease-out text-primaryText rounded-lg'>Back to home</a>
            </div>
            </article>
            </div>
            
        </main>
    )
}