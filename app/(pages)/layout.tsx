import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

export  default function RootLayout({children} : Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <main className="flex items-start gap-8 mt-4">
            <Sidebar/>
            {children}
        </main>
    )
}