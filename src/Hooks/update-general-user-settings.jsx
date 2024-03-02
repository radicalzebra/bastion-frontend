import React, { useRef, useState } from 'react'
import api from '../components/Utilities/Api'
import { useDispatch, useSelector } from 'react-redux'
import dateFormat from '../components/Utilities/DateFomat'
import { loginActions } from '../Store/LoginSlice'


export default function useUpdateGeneralSettings(user) {
 
  
  const [changed,setChanged] = useState(false)
  const [btnClick,setBtnClick] = useState("Save")
  const token = useSelector(state => state.login.token)
  const dispatch = useDispatch()
  
  
  const Data = useRef({
    email:user.email,
    gender:user.gender ,
    username:user.username,
    birthday:dateFormat(user.birthday) ,
    phone:user.phone,
    photo:user.photo ,
    photoModified : false
  })


  async function updateGeneral(data=Data) {
     const body = Data.current
     delete body.photoModified
     const res = await api("/bastion/api/users/updateMe","PATCH",body,token)
     if(res.status === "success") {
      dispatch(loginActions.setUpdatedUser(res.data.user))
     }
  } 
  


  return {
     changed,
     btnClick,
     Data,
     setBtnClick,
     setChanged,
     updateGeneral
  }
}
