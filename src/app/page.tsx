import About from './(About)/About'
import Contact from './(Contact)/Contact'
import Footer from './(Footer)/Footer'
import Header from './(Header)/Header'
import Home from './(Home)/Home'
import Projects from './(Projects)/Projects'

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
