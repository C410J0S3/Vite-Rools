
import React from 'react'

//Dependencias
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

//Pages
import Home from './Pages/Home'
import Show from './Pages/Show'
import ErroPage from './Pages/ErroPage'

import Cullinan from './Pages/Cullinan'
import Phanton from './Pages/Phanton'
import Spectre from './Pages/Spectre'
import Ghost from './Pages/Ghost'

import ApresentationCullinan from './Pages/Show/ApresentationCullinan'
import DetailCullinan from './Pages/Show/DetailCullinan'
import ApresentationSpectre from './Pages/Show/ApresentationSpectre'
import DetailSpectre from './Pages/Show/DetailSpectre'

//Components
import Header from './Components/Header'
import Footer from './Components/Footer'

//Scss
import './App.css'

function App() {
  return (

      <BrowserRouter>

        <Header />

        <AnimatePresence >
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='Cullinan' element={<Cullinan />} >
              <Route path='ApresentationCullinan' element={<ApresentationCullinan />} />
              <Route path='DetailCullinan' element={<DetailCullinan />} />
            </Route>
            <Route path='Phanton' element={<Phanton />} />
            <Route path='Spectre' element={<Spectre />} >
              <Route path='ApresentationSpectre' element={<ApresentationSpectre />} />
              <Route path='DetailSpectre' element={<DetailSpectre />} />
            </Route>
            <Route path='Ghost' element={<Ghost />} />
            <Route path='Show' element={<Show />} />
            <Route path='*' element={<ErroPage />} />

          </Routes>
        </AnimatePresence>

        <Footer />
   
      </BrowserRouter>

  );
}

export default App;

