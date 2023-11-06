import { useState, useEffect } from "react";
import AuthStore from "../stores/AuthStore";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router";
import Preloader from "../components/Preloader/Preloader";

const Login = () => {
  const [accountDets, setAccountDets] = useState({ email: "", password: "" });
  const { user } = AuthStore();
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();
  const [showPreloader, setShowPreloader] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    setAccountDets({ ...accountDets, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(accountDets);
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 5000);
  }, []);

  return (
    <>
      {showPreloader ? (
        <Preloader />
      ) : (
        <div className="signup">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>

          {error && <p>{error}</p>}
        </div>
      )}
    </>
  );
};

export default Login;
