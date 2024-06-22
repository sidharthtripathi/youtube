import Link from "next/link"
import { Separator } from "./ui/separator"
export default function Sidebar(){
    return(
        <nav className="bg-card rounded-xl p-4 pt-0 md:grid gap-2 hidden">
          <Link href="/" className="font-medium hover:bg-primary-foreground p-2 rounded-lg" prefetch={false}>
            Home
          </Link>
          
          <Link href="/subscriptions" className="font-medium hover:bg-primary-foreground p-2 rounded-lg" prefetch={false}>
            Subscriptions
          </Link>
          <Separator />
          <Link href="#" className="font-medium hover:bg-primary-foreground p-2 rounded-lg" prefetch={false}>
            Library
          </Link>
          <Link href="/history" className="font-medium hover:bg-primary-foreground p-2 rounded-lg" prefetch={false}>
            History
          </Link>
          <Link href="#" className="font-medium hover:bg-primary-foreground p-2 rounded-lg" prefetch={false}>
            Watch Later
          </Link>
          <Link href="/likes" className="font-medium hover:bg-primary-foreground p-2 rounded-lg" prefetch={false}>
            Liked Videos
          </Link>
        </nav>
    )
}