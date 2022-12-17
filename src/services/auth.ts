import wretch, {
  ConfiguredMiddleware,
  Middleware,
  WretchOptions,
} from "wretch";
import { useAuth } from "../store/auth";

const api = wretch("http://localhost:3000/", { mode: "cors" }).resolve((r) =>
  r.json()
);

const authMiddleware: ConfiguredMiddleware = (next) => {
  console.log("is this middleware being claled?");
  return (url, opts) => {
    const { token } = useAuth.getState();
    console.log("hellooo?? anyone there??", token);
    return next(url, {
      ...opts,
      headers: { ...opts.headers, Authorization: `Bearer ${token}` },
    });
  };
};

// middlewared
const apiAuth = wretch("http://localhost:3000/", { mode: "cors" })
  .resolve((r) => r.json())
  .middlewares([authMiddleware]);

export const postLogin = async () => {
  const res = await api.post(
    {
      email: "something",
      password: "mypass",
    },
    "login"
  );
  return res as { token: string };
};

export const getAuthedReq = async () => {
  const res = await apiAuth.get("authed");
  return res as { message: string };
};
