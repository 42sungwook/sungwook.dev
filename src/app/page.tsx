import About from './(Root)/(About)/About'
import Contact from './(Root)/(Contact)/Contact'
import Footer from './(Root)/(Footer)/Footer'
import Home from './(Root)/(Home)/Home'
import Project from './(Root)/(Project)/Project'

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
