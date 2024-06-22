import { ExitIcon, GearIcon, PersonIcon, SymbolIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuItem,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar,AvatarFallback,AvatarImage } from "./ui/avatar";
import Link from "next/link";
export default function UserDropDown(){
    return (
        <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8}>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <PersonIcon/>
                    Account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <GearIcon/>
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <ExitIcon />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
    )
}