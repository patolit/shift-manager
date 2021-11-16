import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login, logout } from "./authSlice";

function Auth() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  return (
    <>
      <h3> Is Auth {isAuth ? "yes" : "no"}</h3>
      <button aria-label="login" onClick={() => dispatch(login())}>
        +
      </button>
      <button aria-label="logout" onClick={() => dispatch(logout())}>
        -
      </button>
    </>
  );
}

export default Auth;
