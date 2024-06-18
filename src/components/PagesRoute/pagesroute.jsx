import { Suspense } from 'react'
import { Routes,Route } from 'react-router-dom'
import RouterPages from "../../router/router"
import Header from '../Common/Header/header'
import Footer from '../Common/Footer/footer'

function Pagesroute() {
  return (
    <div className=''>
    <Header/>
    <Suspense fallback={<h1>..Loading</h1>}>
     <Routes>
        {RouterPages.map(({ path, Component, exact })=>{
            return (
                <Route
                key={path}
                path={path}
                //element={<Component />}
                element={ <Component />}
                exact={exact}
              />
            )
        })}
     </Routes>
    </Suspense>
    <Footer/>
</div>
  )
}

export default Pagesroute