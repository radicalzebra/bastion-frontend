import LoginForm from "../Form/LoginForm";
import Card from "../Utilities/Card";
import login from "../../assets/navlogos/login.jpg"
// import loginPattern from ""

function Login() {
  return (
    <Card  className={`flex bg-red-90 w-3/4 h-3/4 border-black border-2 rounded-2xl`} >
      <img className="w-1/2 " src={login} />
      <LoginForm className="bg-red-90 w-1/2"/>

    </Card>
  )
}

export default Login