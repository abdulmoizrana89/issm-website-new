import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { HeaderContext } from './constants/variables'

import { Navbar, Home, Footer, NewsBlogs, Team, TeamBio, Industries, Applications } from './components/index'

const App = () => {
  const [blogID, setBlogID] = useState(0);
  return (
    <HeaderContext.Provider
      value={{
        blogID,
        setBlogID
      }}>
      <div >
        <Router>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/newsBlogs' element={<NewsBlogs />} />
            <Route path='/team' element={<Team />} />
            <Route path='/teamBio' element={<TeamBio />} />
            <Route path='/industries' element={<Industries />} />
            <Route path='/applications' element={<Applications />} />
          </Routes>
          <div>
            <Footer />
          </div>
        </Router>


      </div>
    </HeaderContext.Provider>

  )
}

export default App