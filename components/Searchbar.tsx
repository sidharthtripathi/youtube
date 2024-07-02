"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { useRouter } from 'next/navigation'
export default function Searchbar(){
    const router = useRouter()
    const [searchText,setSearchText] = useState("")
    return (
        <div className="max-w-md mx-auto">
            <Input type="search" placeholder="Search" className="w-full  px-4 py-2 text-sm" value={searchText}
            onChange={e=>setSearchText(e.target.value)}
            onKeyDown={e=>{
                if(e.key ==='Enter') router.push(`/search?q=${searchText}`)
            }}
            />
          </div>
    )
}