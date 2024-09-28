import About from './(roots)/(About)/About'
import Contact from './(roots)/(Contact)/Contact'
import Footer from './(roots)/(Footer)/Footer'
import Home from './(roots)/(Home)/Home'
import Project from './(roots)/(Project)/Project'

export default function App() {
  return (
    <div className="text-black dark:text-white">
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
