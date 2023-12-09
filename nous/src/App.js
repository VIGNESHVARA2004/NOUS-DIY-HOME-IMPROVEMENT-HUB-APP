
import './App.css';
import { useEffect} from 'react';
import { Routes, useLocation, BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Logobar from './Components/LogoBar/Logobar';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/Mainpage/MainPage';
import Dashboard from './Components/DashBoard/DashBoard';
import MyAccount from './Components/DashBoard/Pages/MyAccount/MyAccount';
import Projects from './Components/DashBoard/Pages/Projects/Projects';
import Shop from './Components/Shop/Shop';
import ProductDetails from './Components/Product/ProductDetails';
import CartMenu from './Components/CartMenu/Cartmenu';
import About from './Components/Footer/About/About';
import Privacy from './Components/Footer/Privacy/Privacy';
import Terms from './Components/Footer/Terms/Terms';
import Community from './Components/Community/Community';
import FAQ from './Components/Footer/FAQ/FAQ';
import { Blog } from './Components/blog/blog';
import { BlogDetails } from './Components/blogDetails/blogDetails';
import { BlogDetails1 } from './Components/blogDetails/blogDetails1';
import { BlogDetails2 } from './Components/blogDetails/blogDetails2';
import { BlogDetails3 } from './Components/blogDetails/blogDetails3';
import { BlogDetails4 } from './Components/blogDetails/blogDetails4';
import { BlogDetails5 } from './Components/blogDetails/blogDetails5';
import Checkout from './Components/checkout/Checkout';
import Confirmation from './Components/checkout/Confirmation';
import { Project } from './Components/project/project';
import { ProjectDetails } from './Components/projectDetails/projectDetails';

const ScrolltoTop = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname])
  return null;
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrolltoTop/>
        <Logobar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='myaccount' element={<MyAccount/>}/>
              <Route path='projects' element={<Projects/>}/>
          </Route>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/product/:productId' element={<ProductDetails/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/blog-details' element={<BlogDetails/>}/>
          <Route path='/blog-details1' element={<BlogDetails1/>}/>
          <Route path='/blog-details2' element={<BlogDetails2/>}/>
          <Route path='/blog-details3' element={<BlogDetails3/>}/>
          <Route path='/blog-details4' element={<BlogDetails4/>}/>
          <Route path='/blog-details5' element={<BlogDetails5/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/confirmation' element={<Confirmation/>}/>
          <Route path='/tutorials' element={<Project/>}/>
          <Route path='/project-details' element={<ProjectDetails/>}/>
        </Routes>
        <CartMenu/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
