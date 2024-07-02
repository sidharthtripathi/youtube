"use client"
import { useRef, useState } from "react"
import { ID, appwriteDB, storage } from "../../appwrite/appwrite"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Cross2Icon } from "@radix-ui/react-icons"
export default function UploadForm({endpoint,hlsBucketId,projectId,databaseId,collectionId,bucketId,thumbnailBucketId} : 
    {endpoint : string
    projectId : string,
    databaseId : string,
    bucketId : string,
    collectionId : string,
    thumbnailBucketId : string,
    hlsBucketId : string
    })
    {
    
    const [videoFile,setVideoFile] = useState<File | null>(null)
    const [localVidURL,setVIDurl] = useState<string | undefined>(undefined)
    const [title,setTitle] = useState("")
    const id = useRef(Date.now())
    const [formDisabled,setFormDisability] = useState(false)
    return (
        <fieldset className="space-y-4" disabled = {formDisabled}>
            {
                localVidURL ? <div className="relative">
                    <video src={localVidURL} controls autoPlay className="h-72"/>
                    <Cross2Icon 
                    onClick={e=>{
                        setVideoFile(null)
                        setVIDurl(undefined)
                    }}
                    className="absolute top-0 bg-black/50 rounded-full z-10 hover:cursor-pointer w-8 h-8"/>
                </div>
                : 
                <Input type="file" onChange={(e)=>{
                    if(e.target.files!=null && e.target.files[0]){
                        setVideoFile(e.target.files[0])
                        setVIDurl(URL.createObjectURL(e.target.files[0]))
                    }
                    
                }}  />
            }
            
            <div>
                <Label htmlFor="title">Video Title</Label>
                <Input id="title" name="title" type="text" value={title} onChange={e=>{setTitle(e.target.value)}}/>
            </div>
            
            <Button

                disabled = {!title || !videoFile || !localVidURL}
                onClick={async (e)=>{
                    e.preventDefault()
                    setFormDisability(true)
                    try {
                        const res = await appwriteDB.createDocument(databaseId,collectionId,(id.current).toString(),{
                            title,
                            originalURL : `${endpoint}/storage/buckets/${bucketId}/files/${id.current.toString()}/view?project=${projectId}`,
                            thumbnail : `${endpoint}/storage/buckets/${thumbnailBucketId}/files/${id.current.toString()}.jpg/view?project=${projectId}`,
                            url : `${endpoint}/storage/buckets/${hlsBucketId}/files/${id.current.toString()}.m3u8/view?project=${projectId}`
                        })
                        console.log(res)
                    } catch (error) {
                        console.log(error)
                    }
                    await storage.createFile(bucketId,id.current.toString(),videoFile as File)
                    setFormDisability(false)
                    setTitle("")
                    setVIDurl(undefined)
                    setVideoFile(null)
                }}
            >submit post</Button>
           
            </fieldset>
    )
}