import { dbId, videosCollectionId } from "@/app/appwrite-node/env";
import { appwriteServerDb } from "@/app/appwrite-node/node-appwrite";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { HeartIcon, Share1Icon } from "@radix-ui/react-icons";

export default async function VideoPlayer({
  params: { videoId },
}: {
  params: { videoId: string };
}) {
  console.log(videoId);
  const video = await appwriteServerDb.getDocument(
    dbId,
    videosCollectionId,
    videoId
  );
  console.log(video);
  return (
    <div className="grow max-w-3xl">
      <video
        src={video.originalURL}
        controls
        autoPlay
        className="w-full rounded-lg"
      />
      <div className="space-y-2 mt-2  ">
        <p className="line-clamp-1 font-bold">{video.title}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage
                src="/pic.jpg"
                className="rounded-full size-10 object-cover"
              ></AvatarImage>
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">Custard Cat</p>
              <p className="text-[12px] text-muted-foreground">
                34M Subscribers
              </p>
            </div>
            <Button size={"sm"}>Subscribe</Button>
          </div>
          <div className="space-x-4">
            <Button variant={"outline"} size={"sm"}>
              <HeartIcon />
            </Button>
            <Button size={"sm"} variant={"outline"}>
              <Share1Icon />
            </Button>
          </div>
        </div>
      </div>
      <Separator className="mt-4" />
    </div>
  );
}
