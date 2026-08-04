import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "El Palacio | Presentación del proyecto SPA",
    description:
      "Landing de entrega académica con los videos, documentación y accesos del proyecto SPA El Palacio.",
    openGraph: {
      title: "El Palacio | Presentación del proyecto SPA",
      description:
        "Todos los entregables, evidencias y accesos del proyecto El Palacio en un solo lugar.",
      type: "website",
      locale: "es_MX",
      images: [{ url: imageUrl, width: 1716, height: 916, alt: "El Palacio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "El Palacio | Presentación del proyecto SPA",
      description: "Una entrega. Todo el proyecto.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
