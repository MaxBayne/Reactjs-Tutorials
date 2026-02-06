//Import Routers
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'

//Import Styles
import './styles/App.css'

//Import Context Provider (Shared Data Cross Components)
import ThemeProvider from './contexts/ThemeProvider.jsx'
import UserProvider from './contexts/UserProvider.jsx'

//Import Components 
import HomeComponent from './components/HomeComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import SideMenusComponent from './components/SideMenusComponent.jsx';
import CssComponent from './components/CssComponent.jsx';
import JavaScriptComponent from './components/JavaScriptComponent.jsx';
import ProductsListComponent from './components/ProductsListComponent.jsx'
import UseStateHookComponent from './components/UseStateHookComponent.jsx';
import UseStateHookWithFormsComponent from './components/UseStateHookWithFormsComponent.jsx'
import UseStateHookWithArraysComponent from './components/UseStateHookWithArraysComponent.jsx'
import RequestLoanFormComponent from './components/RequestLoanFormComponent.jsx'
import UseContextHookComponent from './components/UseContextHookComponent.jsx'
import ProductDetailComponent from './components/ProductDetailComponent.jsx'





export default function App()
{
  return (

    <BrowserRouter>

      <ThemeProvider>
        <UserProvider>
        

        <div className="App">

          <div className='App-Header'>
            <HeaderComponent/>
          </div>
          

          <div className="App-content">

            <Routes>
              <Route path='/' element={<HomeComponent/>}/>
              <Route path='/css' element={<CssComponent/>}/>
              <Route path='/javascript' element={<JavaScriptComponent/>}/>
              <Route path='/products' element={<ProductsListComponent/>}/>
              <Route path='/product/:id' element={<ProductDetailComponent/>}/>
              <Route path='/useState' element={<UseStateHookComponent/>}/>
              <Route path='/useStateWithArrays' element={<UseStateHookWithArraysComponent/>}/>
              <Route path='/useStateWithForms' element={<UseStateHookWithFormsComponent/>}/>
              <Route path='/useStateWithFormsLoanForm' element={<RequestLoanFormComponent/>}/>
              <Route path='/useContext' element={<UseContextHookComponent/>}/>

            </Routes>

          </div>

          <div className="App-SideMenu">
            {/* <SideMenusComponent/> */}

            <Link to="/"> Home </Link>
            <Link to="/css"> Css </Link>
            <Link to="/javascript"> Javascript </Link>
            <Link to="/products"> Products </Link>
            <Link to="/useState"> UseState </Link>
            <Link to="/useStateWithArrays"> UseState With Arrays </Link>
            <Link to="/useStateWithForms"> UseState With Forms </Link>
            <Link to="/useStateWithFormsLoanForm"> UseState With Forms (Loan) </Link>
            <Link to="/useContext"> UseContext </Link>

          </div>
      
        </div>

        </UserProvider>
      </ThemeProvider>

    </BrowserRouter>
  )
}

 
