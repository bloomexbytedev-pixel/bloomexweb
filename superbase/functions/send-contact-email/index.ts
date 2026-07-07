import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactForm {
  name: string;
  email: string;
  service: string;
  message: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, service, message }: ContactForm = await req.json();

    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const emailTo = Deno.env.get("CONTACT_EMAIL_TO");
    const emailFrom = Deno.env.get("CONTACT_EMAIL_FROM");
    const brandName = Deno.env.get("CONTACT_EMAIL_BRAND") ?? "Bloomexbyte";

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    if (!emailTo || !emailFrom) {
      console.error("CONTACT_EMAIL_TO or CONTACT_EMAIL_FROM not configured");
      return new Response(
        JSON.stringify({ error: "Email recipient not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const safeBrandName = escapeHtml(brandName);

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f9fa;">
        <div style="background: white; border-radius: 12px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #3b82f6;">
            <h1 style="margin: 0; font-size: 24px; color: #1e293b;">New Contact Form Submission</h1>
          </div>

          <div style="margin-bottom: 20px;">
            <div style="font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px;">Name</div>
            <div style="font-size: 16px; color: #1e293b; font-weight: 500;">${safeName}</div>
          </div>

          <div style="margin-bottom: 20px;">
            <div style="font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px;">Email</div>
            <div style="font-size: 16px; color: #3b82f6;">${safeEmail}</div>
          </div>

          <div style="margin-bottom: 20px;">
            <div style="font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px;">Service Interested In</div>
            <div style="font-size: 16px; color: #1e293b; font-weight: 500;">${safeService}</div>
          </div>

          <div style="margin-bottom: 24px;">
            <div style="font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 8px;">Message</div>
            <div style="font-size: 15px; color: #475569; line-height: 1.6; padding: 16px; background: #f1f5f9; border-radius: 8px;">${safeMessage}</div>
          </div>

          <div style="padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
            ${safeBrandName} Contact Form
          </div>
        </div>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [emailTo],
        reply_to: email,
        subject: `New Inquiry: ${safeService} - ${safeName}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API error:", errorData);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
