import { BellIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function SubscriptionList(){
    return (

        <div className="flex items-center justify-between hover:bg-primary-foreground rounded-lg p-2">
                    <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12 border">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>V</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-medium">Vercel</div>
                            <div className="text-sm text-muted-foreground">1.2M subscribers</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <BellIcon className="w-6 h-6" />
                        </Button>
                        <Button variant="outline" size="sm">
                            Unsubscribe
                        </Button>
                    </div>
         </div>
    )
}