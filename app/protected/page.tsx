
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LandingPage from "@/components/landing";
export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }
  return(
    <div>
      <LandingPage/>
    </div>
   
  
  )
}
