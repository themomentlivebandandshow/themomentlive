export const metadata = {
  title: "The Moment Live",
  description: "The Moment — R&B, Soul, Motown Live Band",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
