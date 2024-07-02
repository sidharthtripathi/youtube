import UploadForm from "./uploadForm";

export default function Uplaoder(){
  
    return (
        <form className="mx-auto">
            <UploadForm 
            endpoint={process.env.APPWRITE_ENDPOINT as string}
            projectId={process.env.APPWRITE_PROJECTID as string}
            collectionId={process.env.APPWRITE_VIDEOS_COLLECTION as string}
            databaseId={process.env.APPWRITE_DB as string}
            bucketId={process.env.APPWRITE_RAWVIDEOS_BUCKETID as string}
            thumbnailBucketId = {process.env.APPWRITE_THUMBNAIL_BUCKET  as string}
            hlsBucketId = {process.env.APPWRITE_HLS_BUCKET as string}
            />
            
        </form>
    )
}