import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import FeedbackForm from "@/components/FeedbackForm";

type SearchParams = { id?: string };

export default async function ReportPage({ 
  searchParams 
}: { 
  searchParams: SearchParams | Promise<SearchParams>
}) {
  // First await the searchParams object
  const resolvedParams = await Promise.resolve(searchParams);
  
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Check for id parameter using the resolved params
  const reportId = resolvedParams?.id;
  if (!reportId) {
    redirect("/protected/reports");
  }

  // Verify the report exists and belongs to the user
  const { data: report } = await supabase
    .from('reports')
    .select('*')
    .eq('id', reportId)
    .eq('user_id', user.id)
    .single();

  if (!report) {
    redirect("/protected/reports");
  }

  return <FeedbackForm userId={user.id} reportId={reportId} />;
}