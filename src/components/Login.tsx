import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true"); // mark user logged in
    navigate("/"); // redirect to home/dashboard
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>

  )
}

export default Login