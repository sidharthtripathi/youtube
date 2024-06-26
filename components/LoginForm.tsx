"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { account } from "@/app/appwrite/appwrite"
export function LoginForm(){
    const { toast } = useToast()  
    const [loginForm,setLoginForm] = useState({email : "",password : ""})
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    return (
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
            Welcome back! Sign in to connect
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email or Username</Label>
              <Input id="email" type="email" placeholder="peduarte@gmail.com" value={loginForm.email} onChange={(e)=>{
                setLoginForm(p=>{
                    return {
                        ...p,email : e.target.value
                    }
                })
              }} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="********" value={loginForm.password} onChange={(e)=>{
                setLoginForm(p=>{
                    return {
                        ...p,password : e.target.value
                    }
                })
              }}  />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=>{
                setLoading(true)
                account.createEmailPasswordSession(loginForm.email,loginForm.password).then((res)=>{
                    router.push('/')
                }).catch((err)=>{
                    console.log(err)
                    toast({
                        title : "Oops",
                        description : err.message,
                        variant : 'destructive'
                    })
                })
                .finally(()=>{
                    setLoading(false)
                })
               
            }} disabled = {loading || (loginForm.email==="" || loginForm.password === "")}>Login</Button>
          </CardFooter>
        </Card>
    )
}