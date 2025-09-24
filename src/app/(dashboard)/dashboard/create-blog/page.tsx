import CreateBlogForm from "@/components/modules/Blogs/createBlogForm";
import React from "react";

const CreateBlog = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      {/* <h1 className="text-center text-xl">Create Blog</h1> */}
      <CreateBlogForm />
    </div>
  );
};

export default CreateBlog;
