import dynamic from 'next/dynamic'
import About from './(About)/About'
import Contact from './(Contact)/Contact'
import Footer from './(Footer)/Footer'
import Home from './(Home)/Home'
import Projects from './(Projects)/Projects'
import Header from './(Header)/Header'

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
