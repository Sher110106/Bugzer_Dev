import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ReportDetails from "@/components/ReportDetails";
import { serverApiClient } from "@/utils/server-api-client";

type TParams = Promise<{ id: string }>;

export default async function ReportDetailPage({ params }: { params: TParams }) {
  const { id: reportId } = await params;

  const supabase = await createClient();
  const { data: { user } = {} } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Verify the report exists and belongs to the user
  const { data: report } = await supabase
    .from("reports")
    .select("*")
    .eq("id", reportId)
    .eq("user_id", user.id)
    .single();

  if (!report) {
    return redirect("/protected/reports");
  }

  return <ReportDetails report={report} />;
}
