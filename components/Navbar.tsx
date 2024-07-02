import { Button } from "./ui/button"
import Link from "next/link"
import { Input } from "./ui/input"
import UserDropDown from "./UserDropDown"
import {  PlayIcon } from "@radix-ui/react-icons"
import Searchbar from "./Searchbar"
export default function Navbar(){
    return (
        <header className="bg-background border-b px-4 md:px-6 flex items-center h-14 shrink-0 sticky top-0 ">
        <Link href="/" className="flex items-center gap-2 font-semibold" prefetch={false}>
          <PlayIcon className = 'w-8 h-8'/>
          YouTube
        </Link>
        <div className="flex-1 ml-6 hidden md:block">
          <Searchbar/>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <SearchIcon className="w-6 h-6" />
          </Button>
          <UserDropDown/>
        </div>
      </header>
    )
}

function YoutubeIcon(props : any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    )
  }


  function SearchIcon(props : any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  