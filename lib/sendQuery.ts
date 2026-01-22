import emailjs from "@emailjs/browser";
export async function sendEmail({
  serviceID,
  templateID,
  templateParams,
  publicKey,
}: {
  serviceID: string;
  templateID: string;
  templateParams: Record<string, string>;
  publicKey: string;
}) {
  await emailjs.send(serviceID, templateID, templateParams, publicKey);
}
