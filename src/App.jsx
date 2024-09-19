
import './App.css'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from './Pages/Home/Main';
import Blog from './Pages/Blog/Blog';
import Blog1 from './Pages/Blog/Blog1';

function App() {
 

  return (
    <> 
    <div className="gradient">

     <Router>
     <Layout>
     <Routes>
   
          <Route index element={<Main />} /> {/* Default route to Home */}
          <Route path="blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
 
      
      </Routes>

      </Layout>




     </Router>
     </div>

  
    </>
  )
}

export default App
