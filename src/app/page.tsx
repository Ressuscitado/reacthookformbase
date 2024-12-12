"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostList } from "@/components/PostList";
import { PostProvider } from "@/contexts/PostContext";

const Page = () => {
  
  return (
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 min-h-screen">
        <PostProvider >
        <div className="container mx-auto ">
        <Header />
        <PostList />
        <Footer />
        
      </div>
      </PostProvider>
      </div>
  );
};

export default Page;