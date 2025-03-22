import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ReportPage({ params }: Props) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Await the params to access the `id`
  const { id: reportId } = await params;

  // Verify the report exists and belongs to the user
  const { data: report } = await supabase
    .from("reports")
    .select("*")
    .eq("id", reportId)
    .eq("user_id", user.id)
    .single();

  if (!report) {
    redirect("/protected/reports");
  }

  return <div>Report Details for ID: {reportId}</div>;
}
