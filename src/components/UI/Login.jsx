import LoginForm from "../Form/LoginForm";
import Card from "../Utilities/Card";
import login from "../../assets/navlogos/login.jpg"
// import loginPattern from ""

function Login() {
  return (
    <Card  className={`flex bg-red-90 w-97 bg-login h-97 p-8 relative border-gray-200 shadow-lg border-2 shadow-gray-300 rounded-md `} >
      <LoginForm className="bg-red-90 "/>
    </Card>
  )
}

export default Login