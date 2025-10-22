
export const metadata = {
  title: "E‑Learning Consulting – Compliance & Leadership Academy",
  description: "Digitale Lernakademie für Unternehmen – Compliance, Leadership, Onboarding.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
        <link rel="stylesheet" href="/styles.css" />
        {children}
      </body>
    </html>
  );
}
