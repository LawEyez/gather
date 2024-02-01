import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-13">{children}</main>
      <Footer />
    </>
  )
}
