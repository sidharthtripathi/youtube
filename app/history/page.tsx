import VideoCard from "@/components/VideoCard";

export default function History(){
    return(
        <div className="grow space-y-4">
            <h3 className="text-muted-foreground text-2xl font-bold">Your Watch History</h3>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </section>
        </div>
    )
}