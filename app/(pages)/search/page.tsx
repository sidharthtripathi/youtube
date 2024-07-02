import { dbId, videosCollectionId } from "@/app/appwrite-node/env"
import { appwriteServerDb } from "@/app/appwrite-node/node-appwrite"
import VideoCard from "@/components/VideoCard"
import { Query } from "node-appwrite"


export default async function Search({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }){
    const {q} = searchParams
    if(!q) return <h4>Please Provide a query</h4>
    const videos = await appwriteServerDb.listDocuments(dbId,videosCollectionId,[
        Query.contains('title',q as string)
    ])
    console.log(videos.documents)
    return(
        <div className="grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {
                videos.documents.map(video=>{
                    return <VideoCard title={video.title} authorId={video.authorId} thumbnail={video.thumbnail}/>
                })
            }
        </div>
    )
}