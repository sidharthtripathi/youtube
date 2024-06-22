import VideoCard from '@/components/VideoCard'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
export default function ChannelPage(){
    return (
        <div className="grow ">
            <section>
                <img src='/coverimg.jpg' alt='cover_img'  className='h-48 rounded-lg w-full object-cover'/>
                <div className='flex gap-4 items-center mt-4'>
                        <img src="/pic.jpg" alt="pic" className='size-28 rounded-full object-cover' />
                        <div className='space-y-2'>
                            <h2 className='font-bold text-xl'>Custards</h2>
                            <div className='space-x-2 text-xs text-muted-foreground'>
                                <span>@custardscat</span><span>5.4M subscribers</span><span>201 Videos</span>
                            </div>
                            <p className=' text-muted-foreground text-xs'>I travell around and taste review mice taste around the globe</p >
                            <Button size={"sm"}>Subscribe</Button>
                        </div>
                    </div>
                    <Separator className='mt-4'/>
            </section>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4'>
                <VideoCard/>
            </section>
        </div>
    )
}