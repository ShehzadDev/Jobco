import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1 className="text-3xl">Login Page</h1>
      <Link to="/register">Register Here</Link>
      <a href="https://shehzad-shifa.web.app" target="_blank">
        Visit Our Site
      </a>
    </div>
  );
};
export default Login;
