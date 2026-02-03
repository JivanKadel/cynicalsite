import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const captchaToken = body.captchaToken;

  if (!captchaToken) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY || "",
        response: captchaToken,
      }).toString(),
    },
  );

  const data = await response.json();

  console.log("Captcha verification result:", data);

  if (data.success && data.score >= 0.5) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json(
      {
        error: "Captcha verification failed",
      },
      {
        status: 403,
      },
    );
  }
}
