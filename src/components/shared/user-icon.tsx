import { auth } from "@/auth"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, Settings2Icon, Trash2Icon } from "lucide-react"
import { signOut } from "next-auth/react"
import SignOut from "./sign-out"
import { Session } from "next-auth"
  
export async function UserAvatar({session}:{session:Session|null}) {
    return (
      <Avatar>
        <AvatarImage src={session?.user?.image!} alt="@shadcn" />
        <AvatarFallback>{session?.user?.name?.slice(0,2)||'CN'}</AvatarFallback>
      </Avatar>
    )
  }

export async function UserDropDown(){
  const session = await auth()
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar session={session}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                  <DropdownMenuItem className="flex cursor-pointer hover:bg-zinc-900 items-center ">
                    <DropdownMenuLabel className="flex items-center gap-2">
                    <Settings2Icon/>
                        Settings
                    </DropdownMenuLabel>
                  </DropdownMenuItem>
                  <SignOut>
                  <DropdownMenuItem className="flex cursor-pointer hover:bg-zinc-900 items-center "
                  >
                    <DropdownMenuLabel className="flex items-center gap-2">
                    <LogOut/>
                        Logout
                    </DropdownMenuLabel>
                  </DropdownMenuItem>
                  </SignOut>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}