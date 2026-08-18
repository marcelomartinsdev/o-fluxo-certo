const utmKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function createWhatsAppGroupUrl(search = ""): string | null {
  const configuredUrl = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL?.trim();

  if (!configuredUrl) {
    return null;
  }

  try {
    const url = new URL(configuredUrl);
    const incoming = new URLSearchParams(search);

    for (const key of utmKeys) {
      const value = incoming.get(key);
      if (value) url.searchParams.set(key, value);
    }

    return url.toString();
  } catch {
    return null;
  }
}
