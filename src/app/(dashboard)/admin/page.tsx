import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async() => {

    const session = await getServerSession(authOptions)
    console.log(session);
    if(session?.user){
      return (
        <div>Welcome to Admin page! <span className="text-2xl">{session?.user.username || session.user.name}</span>
        
        </div>
      )

    }else{
      return <div>Please login to see Admin content</div>
    }
 
}

export default page