import "./globals.css";

export const metadata = {
  title: "The Susan Sontag Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
