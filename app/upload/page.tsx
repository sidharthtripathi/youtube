"use client"

import { useRef } from "react"
import { appwriteDB, storage } from "../appwrite/appwrite"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

export default function Uplaoder(){
    const fileRef = useRef<HTMLInputElement>(null)
    const titleRef = useRef<HTMLInputElement>(null)
    const id = useRef(Date.now())
    return (
        <div>

            <Input type="file" ref={fileRef} />

            <Input ref ={titleRef} type="text"/>
            <Button
                onClick={async ()=>{
                    if(fileRef.current?.files){
                        await storage.createFile("6677cbd1002d6154f48b",id.current.toString(),fileRef.current.files[0]).then(res=>console.log(res))
                        .catch(err=>console.log(err))
                    }
                    await appwriteDB.createDocument("6677e9d7001de0814521",'6677e9de001e36c48571',id.current.toString(),{
                        title : titleRef.current?.value,
                        // https://cloud.appwrite.io/v1/storage/buckets/6678141f0015a5ed911b/files/1719154492562.m3u8/view?project=6677cb9f0008bce34727&mode=admin
                        url : `https://cloud.appwrite.io/v1/storage/buckets/6678141f0015a5ed911b/files/${id.current}.m3u8/view?project=6677cb9f0008bce34727`
                    }).then(res=>console.log(res))
                    .catch(err=>console.log(err))
                }}
            >submit post</Button>
        </div>
    )
}