import React, { useState } from 'react'
import defaultUser from "../../assets/navlogos/defaultUser.jpg/"

function ProfilePhotoSetting({logged,data,className,setChanged}) {

  const [pfp,setPfp]  = useState(data)

  const onChangeHandler = (e) => {
   let file = e.target.files[0]

   if(file.type === "image/jpeg") {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPfp(reader.result);
      };

      reader.readAsDataURL(file);
   }

   setChanged(true)

  }

  return (
      <figure className={`bg-red-90  self-center cursor-pointer hover:brightness-95 relative  ${className}`}>
         <input onChange={onChangeHandler} type="file" name="img-file" className='w-60 h-60 bg-red-900 absolute opacity-0 cursor-pointer rounded-full p-1'/>
         <img className='rounded-full w-60 h-60 border-rose-600 border-4' src={logged ? pfp : defaultUser} alt="profile" />
      </figure>
  )
}

export default React.memo(ProfilePhotoSetting)