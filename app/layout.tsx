export const metadata = {
  title: "Mamo Powerwash Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
