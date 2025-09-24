import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard'
import React from 'react'

export const generateStaticParams = async ()=>{
    // return [
    //     {
    //         blogId: "1" // ssg hbe .loading hbe na
    //     }

    // ]

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`)

    const {data: blogs} = await res.json()

    return blogs.slice(0,2).map((blog:any)=> ({  // return the map ()
        blogId: String(blog.id) // must be string
    })) // ekkhn build howar smy prothom 2 ta post build hoye jabe.laoding ashbe na
}


export const generateMetadata = async ({params}: {params: Promise<{blogId: string}>})=>{

  const {blogId} = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${blogId}`)

  const blog = await res.json()

  return {
    title: blog?.title,
    description: blog?.content
  }


}
export default async function BlogDetails({params}: {params: Promise<{blogId: string}>}) {

    const {blogId} = await params
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${blogId}`)

    const blog = await res.json()


  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
       <h2>Blog Details</h2>

       <div>
       
       </div>
        <BlogDetailsCard blog={blog}/>
        </div>
    
  )
}
