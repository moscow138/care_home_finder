"use client"
import Image from "next/image"
import CategoryList from "@/components/home/CategoryList"

const Home = () => {
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="p-3">
        <CategoryList/>
      </div>
      <div className="bg-blue-300 col-span-3">First</div>   

    </div>
  )
}

export default Home;