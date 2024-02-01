import Brand from "../global/Brand"

const Footer = () => {
  return (
    <footer className="border-t p-5">
      <div className="container flex-col sm:flex-row flex-between">
        <Brand />
        <p className="text-xs">&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer