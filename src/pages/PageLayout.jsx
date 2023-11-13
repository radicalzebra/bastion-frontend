import { Outlet } from 'react-router-dom';
import { OneLineBanner , Nav } from '../components/UI/Navigations';
import Card from '../components/Utilities/Card';

import {cartActions} from '../Store/CartSlice';
import {notifyActions} from '../Store/NotifySlice';
import { useSelector , useDispatch} from 'react-redux';



const PageLayout = (props) => {

   const cartShow = useSelector((state)=> state.cart.touched)
   const notifyShow = useSelector((state)=> state.notify.touched)
   const dispatch = useDispatch();

   
   const onClickHandler = () => {
      dispatch(cartActions.touchHandler(false))
      dispatch(notifyActions.touchHandler(false))
   }

  
   return (

         <div onClick={onClickHandler}  className="flex flex-col gap-8 pt-2 px-4 relative">
           
            <header  className='z-20'>
               {/* <OneLineBanner className="font-medium text- tracking-wider" string="Discover your perfect pair & walk with ease 👟"/> */}
               <Nav links={["all","men", "women" , "kids" ,"sale"]} numNotif="3" numCartItems="4"/>
            </header>


            <div className={'z-10'}>
               <Outlet/>
            </div>
            
            
         </div>
      
   )
};




export default PageLayout;