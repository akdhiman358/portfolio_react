import React from 'react'
import ReactDOM from 'react-dom/client'
import Photo from '../src/photo'
import Name from '../src/name'
import Button from './Buttons'
import About from './about'
import Intersts from './intersts'
import Footer from './footer'
function App(){
    return(
        <div className="container">
            
            <Photo />
            <div className='middle'>
            <Name />
            <Button />
            <About />
            <Intersts />
            </div>
            <Footer />
        </div>
    )
}

//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)