import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3 h-18 bg-blue-600 text-white">
      <div className="logo">LOGO</div>
      <nav>
        <menu className="flex items-center gap-6 text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </menu>
      </nav>
    </header>
  )
}

export default Header