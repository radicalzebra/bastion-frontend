import {createContext,useState} from "react";

export const loginContext = createContext({
   touched:false,
   onTouchHandler : () => {}
})


const loginProvider = (props) => {


   const [touched,setTouched] = useState(false)

   const onTouchHandler = () => {
      setTouched(state => !state)
      console.log("CONTEXT!")
   }

   return (
      <loginContext.Provider value={{touched,onTouchHandler}}>
        {props.children}
      </loginContext.Provider>
   )
}

export default cartShowProvider