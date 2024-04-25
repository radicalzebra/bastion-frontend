import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Store/LoginSlice';


const useLoginHook = () =>  {

  const [email , setEmail] = useState("")
  const [pass , setPass] = useState("")
  const [lookpwd , setLookPwd] = useState(false)
  const [isDisabled , setIsDisabled] = useState(false)
  const [loading,setLoading] = useState(false)
  const error = useSelector(state => state.login.errMsg)

 

  const dispatch = useDispatch()
  
  const onBtnClick = (e) => {
    e.preventDefault()
    
    setLoading(false)
    dispatch(loginUser({email:email,password:pass}))
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }

  const onPassChange = (e) => {
    setPass(e.target.value)
  }


  useEffect(()=> {
    setIsDisabled(pass.length === 0 || email.length === 0)
  },[pass,email])

  return {
    email,
    setEmail,
    pass,
    setPass,
    lookpwd,
    setLookPwd,
    isDisabled,
    setIsDisabled,
    onBtnClick,
    onPassChange,
    loading
  }
}

export default useLoginHook