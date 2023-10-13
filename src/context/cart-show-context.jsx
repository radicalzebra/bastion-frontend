import {createContext,useState} from "react";

export const cartShowContext = createContext({
   touched:false,
   onTouchHandler : () => {}
})


const cartShowProvider = (props) => {


   const [touched,setTouched] = useState(false)

   const onTouchHandler = () => {
      setTouched(state => !state)
      console.log("CONTEXT!")
   }

   return (
      <cartShowContext.Provider value={{touched,onTouchHandler}}>
        {props.children}
      </cartShowContext.Provider>
   )
}

export default cartShowProvider