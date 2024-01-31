import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import PageLayout from './pages/PageLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import { DashboardLayout } from './pages/DashboardLayout';
import Overview from './components/UI/dashboard-components/Overview';
import DashboardAction from './components/UI/dashboard-components/DashboardAction';




const router = createBrowserRouter([
  {path:"/",
   element:<PageLayout/>,
   errorElement:<h1 className='text-black'>error hogya bro</h1>,
   children :[
    {index:true,element:<Home/>},
    {path:"products/:type",element:<Products/>},
    {path:"product/:id",element:<Product/>},
  ]
 },
 

 {path:"/dashboard",
  element:<DashboardLayout/>,
  children: [
    {index:true,element:<Overview/>},
    {path:":action/:specify?",element:<DashboardAction/>},
   ]
  }


]);


const queryClient = new QueryClient();

function App() { 
  return <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
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
//       },ن
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