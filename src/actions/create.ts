"use server"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const create =  async(data: FormData)=>{

    // console.log(data);

    // convert to plain object to send in backend

    const blogInfo = Object.fromEntries(data.entries())

    const modifiedData = {
        ...blogInfo,
        authorId: 1,
        // convert tags to array and split with ,

        tags: blogInfo.tags.toString().split(",").map((tag) => tag.trim()),
        isFeatured: blogInfo.isFeatured === "true"  // Boolean(blogInfo.isFeatured)
    }


    // console.log(modifiedData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(modifiedData)
    })
    
    const result = await res.json()

    if(result){
        revalidateTag("BLOGS")
        redirect("/blogs")
    }

    return result;
    

}