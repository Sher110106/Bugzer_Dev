import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ReportDetails from "@/components/ReportDetails";
import { serverApiClient } from "@/utils/server-api-client";

export default async function ReportDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }
  
  // Get the report ID from the parameters
  const reportId = params.id;

  try {
    // Get the report data using the server API client
    const report = await serverApiClient.getReport(reportId);
    
    if (!report) {
      redirect("/protected/reports");
    }

    return <ReportDetails report={report} />;
  } catch (error) {
    console.error("Error fetching report:", error);
    redirect("/protected/reports");
  }
}