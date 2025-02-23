import { createClient } from "@/utils/supabase/server"
import {redirect} from "next/navigation";
import ReportPage from "@/components/report";
export default async function Report(){
    const supabase=await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/sign-in");
  }

    return(
        <div>
                <ReportPage/>
        </div>
    )
}