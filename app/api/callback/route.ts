import { getUser } from "@/queries/user";
import { createClient } from "@/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const encodedRedirectTo = requestUrl.searchParams.get("redirect") || "/app";
  const priceId = decodeURIComponent(
    requestUrl.searchParams.get("priceId") || ""
  );
  const discountCode = decodeURIComponent(
    requestUrl.searchParams.get("discountCode") || ""
  );
  const redirectTo = decodeURIComponent(encodedRedirectTo);

  const supabase = await createClient();

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("Auth error:", error);
      return NextResponse.redirect(`${requestUrl.origin}/sign-in?error=auth_error`);
    }
    const userData = await getUser();
    if (!userData) {
      return NextResponse.redirect(`${requestUrl.origin}/sign-in?error=no_user`);
    }
  }

  if (priceId && priceId !== "") {
    // Handle pricing logic here
    return NextResponse.redirect(`${requestUrl.origin}/pricing?priceId=${priceId}`);
  }

  return NextResponse.redirect(`${requestUrl.origin}${redirectTo}`);
}
