export const metadata = {
  title: "Mamo Powerwash Solutions",
  description: "Fleet pressure washing services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
