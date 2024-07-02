"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useToast } from "./ui/use-toast"
import { ID, account } from "@/app/appwrite/appwrite"
export function SignupForm(){
    const {toast} = useToast()
    const [signupForm,setSignupForm] = useState({username:"",email: "",password : "",name: ""})
    const [loading,setLoading] = useState(false)
    return (
        <Card>
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>
            Capture & share your story. Get started now.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Pedro Duarte" value={signupForm.name} onChange={(e)=>{
                setSignupForm(p=>{
                    return {
                        ...p,name : e.target.value
                    }
                })
              }} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">username</Label>
              <Input id="username" placeholder="pedro123" value={signupForm.username} onChange={(e)=>{
                setSignupForm(p=>{
                    return {
                        ...p,username : e.target.value
                    }
                })
              }} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="peduarte@gmail.com" value={signupForm.email} onChange={(e)=>{
                setSignupForm(p=>{
                    return {
                        ...p,email : e.target.value
                    }
                })
              }}  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="********"  value={signupForm.password} onChange={(e)=>{
                setSignupForm(p=>{
                    return {
                        ...p,password : e.target.value
                    }
                })
              }}  />
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled = {loading || (
                signupForm.username ==="" || signupForm.email ==="" || signupForm.password==="" || signupForm.name===""
            )}
            onClick={()=>{
                setLoading(true)
                account.create(ID.custom(signupForm.username),signupForm.email,signupForm.password,signupForm.name).then(res=>{
                    console.log(res)
                    toast({
                        description : "Account Created",
                        title : "Success"
                    })
                }).catch(err=>{
                    console.log(err)
                    toast({
                        title : "Oops",
                        description : err.message,
                        variant : "destructive"
                    })
                })
                .finally(()=>{
                    setLoading(false)
              })
            }}
            >Signup</Button>
          </CardFooter>
        </Card>
    )
}