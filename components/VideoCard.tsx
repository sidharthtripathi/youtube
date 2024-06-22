import Link from "next/link"
import Image from 'next/image'
export default function VideoCard(){
    return (
        <div className="bg-card rounded-xl overflow-hidden">
            <Link href="/watch/kittyvid" className="block" prefetch={false}>
              <Image
                src="/thumnail.jpg"
                alt="Thumbnail"
                width={320}
                height={180}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4 grid gap-2">
                <h3 className="font-medium line-clamp-2">Vercel Ship Keynote: Introducing the frontend cloud</h3>
                <div className="flex items-center gap-2 text-sm">
                  <img src="/profile.jpg" alt="Avatar" width={32} height={32} className="rounded-full size-6 object-cover" />
                  <Link href={'/channels/custards'} className="line-clamp-1 text-xs text-muted-foreground">Vercel</Link>
                </div>
              </div>
            </Link>
          </div>
    )
}