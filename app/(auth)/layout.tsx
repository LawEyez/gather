const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4">
      <h1 className="tracking-tight text-2xl capitalize font-bold">gather</h1>
      {children}
    </div>
  )
}

export default Layout