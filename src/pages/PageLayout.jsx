import { Outlet, json } from 'react-router-dom';
import { OneLineBanner , Nav } from '../components/UI/Navigations';
import Card from '../components/Utilities/Card';

import {cartActions} from '../Store/CartSlice';
import {notifyActions} from '../Store/NotifySlice';

import { useSelector , useDispatch} from 'react-redux';
import {Login} from '../components/UI/AuthModal';



const PageLayout = (props) => {

   const cartShow = useSelector((state)=> state.cart.touched)
   const notifyShow = useSelector((state)=> state.notify.touched)
   const showLoginForm =  useSelector(state => state.login.showForm)
   const cart =  useSelector(state => state.cart.cart)
   const user =  useSelector(state => state.login.user)

   const dispatch = useDispatch();
   
   const onClickHandler = (e) => {
      dispatch(cartActions.touchHandler(false))
      dispatch(notifyActions.touchHandler(false))

   }
  
   return (

      
         <div onClick={(e) => onClickHandler(e)}  className="flex flex-col gap-8 pt-2 px-4 relative">
           
            <header  className='z-20'>
               {/* <OneLineBanner className="font-medium text- tracking-wider" string="Discover your perfect pair & walk with ease 👟"/> */}
               <Nav links={["all","men", "women" , "kids" ]} numNotif={user?.email && "3"} cart={cart}/>
            </header>

            {showLoginForm && <Login className={""}/>}

            <div className={'z-10'}>
               <Outlet/>
            </div>
            
            
         </div>
      
   )
};




export default PageLayout;