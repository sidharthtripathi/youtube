import VideoCard from "@/components/VideoCard";
import { appwriteServerDb } from "../appwrite-node/node-appwrite";
import { dbId, videosCollectionId } from "../appwrite-node/env";

export default async function Component() {
  const videos = await appwriteServerDb.listDocuments(dbId, videosCollectionId);

  return (
    <div className="grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {videos.documents.map((video) => {
        return (
          <VideoCard
            id={video.$id}
            title={video.title}
            thumbnail={video.thumbnail}
            key={video.$id}
          />
        );
      })}
    </div>
  );
}
