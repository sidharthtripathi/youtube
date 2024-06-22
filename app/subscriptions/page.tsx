import SubscriptionList from "@/components/SubscriptionList"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BellIcon } from "@radix-ui/react-icons"

export default function Page() {
    return (
        <div className="bg-card  rounded-xl p-4 grid gap-4 grow">  {/* Closing tag added here */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Subscriptions</h2>
            </div>
            <div className="grid gap-2">
                <SubscriptionList/>
                <SubscriptionList/>
            </div>
        </div>
    )
}
