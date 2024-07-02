import SubscriptionList from "@/components/SubscriptionList"

export default function Page() {
    return (
        <div className="bg-card  rounded-xl p-4 grid gap-4 grow">
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
