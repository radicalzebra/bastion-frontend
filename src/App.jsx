import { createBrowserRouter,RouterProvider } from 'react-router-dom';


import PageLayout,{loader as productsLoader} from './pages/PageLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';







const router = createBrowserRouter([
  {path:"/",
   element:<PageLayout/>,
   errorElement:<h1 className='text-black'>error hogya bro</h1>,
   id:"all-products",
   loader:productsLoader,
   children :[
    {index:true,element:<Home/>},
    {path:"products/:type",element:<Products/>},
    {path:"product/:id",element:<Product/>},
  ]
 },
 
 {path:"dashboard/:action/:specify?",element:<Dashboard/>}
]);

function App() { 
  return <RouterProvider router={router}/>
}

export default App

// gsap.registerPlugin(ScrollTrigger);

// const box = useRef(null);

//   useEffect(()=>{
//      gsap.to(box.current,{
//       duration:3,
//       ease:"elastic.Out",
//       duration:3,
//       css:{
//           borderRadius:"60%",
//           x:100,
//       },
//      scrollTrigger:{
//       trigger:box.current,
//       start:"top 30%",
//       end:"top 20%",
//       markers:true,
//       scrub:4,
//       pin:true,
//       pinSpacing:false
//      }
//     })
//   },[])


{/* <div className='bg-blue-600 w-full h-screen'></div>
<div ref={box} className='w-40 h-40  bg-red-500'></div>
<div className='bg-blue-600 w-full h-screen'></div> */}