import Landing from "./pages/Landing"
import Feature from "./pages/Feature"
import { BrowserRouter,Routes,Route } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/features" element={<Feature />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App