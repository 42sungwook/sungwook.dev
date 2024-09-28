import About from './(root)/(About)/About'
import Contact from './(root)/(Contact)/Contact'
import Footer from './(root)/(Footer)/Footer'
import Home from './(root)/(Home)/Home'
import Project from './(root)/(Project)/Project'

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
