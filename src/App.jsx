import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative overflow-x-hidden bg-mist-50">
      <div className="grain" aria-hidden="true" />
      <Sidenav />
      <Main />
      <Work />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
