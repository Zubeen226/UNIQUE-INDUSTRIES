import emailjs from "@emailjs/browser";

export async function sendEmailQuery(templateParams: Record<string, any>) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      "EmailJS credentials missing from environment. Please define in .env.local:\n" +
      "- NEXT_PUBLIC_EMAILJS_SERVICE_ID\n" +
      "- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID\n" +
      "- NEXT_PUBLIC_EMAILJS_PUBLIC_KEY\n" +
      "\nSimulating EmailJS transmission with parameters:",
      templateParams
    );
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { status: 200, text: "Simulation Success" };
  }

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}
