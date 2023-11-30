import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Store/LoginSlice';


const useLoginHook = () =>  {

  const [email , setEmail] = useState("")
  const [pass , setPass] = useState("")
  const [lookpwd , setLookPwd] = useState(false)
  const [isDisabled , setIsDisabled] = useState(false)
 

  const dispatch = useDispatch()
  
  const onBtnClick = (e) => {
    e.preventDefault()
    dispatch(loginUser({email:email,password:pass}))
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
    onPassChange
  }
}

export default useLoginHook