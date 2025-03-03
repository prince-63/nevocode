import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
