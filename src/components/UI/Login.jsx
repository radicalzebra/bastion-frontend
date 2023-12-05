
import LoginForm from "../Form/LoginForm";


function Login({className}) {
  
  return (
    <LoginForm className={`bg-red-90 flex bg-red-90 w-97 bg-login h-97 p-10 relative border-gray-200 shadow-lg border-2 shadow-gray-300 rounded-md ${className}`}/> 
  )
}

export default Login