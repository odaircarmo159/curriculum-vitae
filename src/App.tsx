import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContactPage } from './routes/contato'
import { HomePage } from './routes/index'
import { ProjectsPage } from './routes/projetos'
import { AboutPage } from './routes/sobre'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
