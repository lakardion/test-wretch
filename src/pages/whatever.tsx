import { useMutation } from "@tanstack/react-query";
import { getAuthedReq, postLogin } from "../services/auth";
import { useAuth } from "../store/auth";

export const Whatever = () => {
  const updateToken = useAuth.use.updateToken();
  const { mutate: login } = useMutation(
    () => {
      return postLogin();
    },
    {
      onSuccess: (data) => {
        console.log(data.token);
        updateToken(data.token);
      },
    }
  );
  const { mutate: authedReq } = useMutation(
    () => {
      return getAuthedReq();
    },
    {
      onSuccess: (data) => {
        console.log("success", data.message);
      },
    }
  );
  return (
    <section className="h-screen w-full flex justify-center items-center gap-4">
      <button
        type="button"
        onClick={() => login()}
        className="bg-teal-500 border border-teal-900 p-3 text-white rounded-md"
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => authedReq()}
        className="bg-teal-500 border border-teal-900 p-3 text-white rounded-md"
      >
        Authed-Req
      </button>
    </section>
  );
};
