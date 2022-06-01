import React from 'react'
import {HashRouter , Route ,Routes} from 'react-router-dom';
import Home from './Home'
import Start from './components/start'
import Result from './components/result'

const App = () => {
  return (
    <HashRouter>
            <Routes>
            
            <Route path="/" exact element={<Start />} ></Route>
            <Route path="/quiz" exact element={<Home />} ></Route>
            <Route path="/result" exact element={<Result />} ></Route>
          

            </Routes>
    </HashRouter>
  )
}

export default App