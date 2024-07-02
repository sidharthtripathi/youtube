import Link from "next/link"
import Image from 'next/image'
export default function VideoCard({title,thumbnail,authorId} : {title? : string,thumbnail? : string, authorId? : string}){
    return (
        <div className="bg-card rounded-xl overflow-hidden">
            <div>
              <Image
                src={thumbnail ? thumbnail : '/thumbnail.jpg'}
                alt="Thumbnail"
                width={320}
                height={180}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4 grid gap-2">
                <h3 className="font-medium line-clamp-2">
                  <Link href={'/watch/kitty'}>{title  ? title : "Demo title"}</Link>
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <img src="/profile.jpg" alt="Avatar" width={32} height={32} className="rounded-full size-6 object-cover" />
                  <Link href={`/channels/${authorId ? authorId : "custards"}`} className="line-clamp-1 text-xs text-muted-foreground">{authorId ? authorId : "custards"}</Link>
                </div>
              </div>
            </div>
          </div>
    )
}