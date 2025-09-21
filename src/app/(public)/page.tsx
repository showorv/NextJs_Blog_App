import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`, {
    next: {
      revalidate: 30 // 30 scnd por por updated post thkle ta dekhabe isr er maddhome. homepage e ssr na kora better loading nibe
    }
  } )
  const {data:blogs} = await res.json()

  
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>

      <div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto my-5">
        {blogs.slice(0,3).map((blog: any)=> <BlogCard key={blog?.id} post={blog}/>)}
      </div>
    </div>
  );
}
