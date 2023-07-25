import { ActionFunctionArgs, Form, useActionData, useNavigate, useSubmit } from "react-router-dom";
import CenteredLayout from "../../Layout/CenteredLayout";
import User from "../../logic/Objects/User";
import IResponse from "../../logic/interface/IResponse";
import { useEffect, useState } from "react";

export async function action({ request }: ActionFunctionArgs): Promise<IResponse> {

  try {

    const formData = await request.formData();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user = new User(email, password);

    const response = await user.login();


    return response;



  } catch (error: any) {

    return {
      status: 400,
      data: null,
      success: false,
      message: error.message,
      error: {
        message: error.message,
        code: error.code,
      }
    }

  }


}

export default function login() {

  const actionData = useActionData() as IResponse | null;

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = useSubmit();

  const handleClick = () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    submit(formData, { method: "POST"});
  }
      
  useEffect(() => {

    if(actionData && actionData?.status === 200){
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/")
      }, 1000);
    }

    setLoading(false);
  }, [actionData])



  return (
    <CenteredLayout>
      <div className="w-full h-full md:max-w-md md:h-fit px-6 py-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl text-center font-bold text-gray-900"><a href="/">Techology</a></h1>
        <h2 className="mt-4 text-xl text-center">Login</h2>


        <Form className="flex flex-col w-full mt-4">

          <label className="text-sm font-semibold text-gray-500">Email</label>
          <input className="w-full px-4 py-2 mt-2 border rounded-md outline-none 
              border-gray-300 focus:border-indigo-500"
            name="email"
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label className="mt-4 text-sm font-semibold text-gray-500">Password</label>
          <input className="w-full px-4 py-2 mt-2 border 
                rounded-md outline-none border-gray-300 
                focus:border-indigo-500"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

          <button className={`w-full px-4 py-2 mt-4 
                  text-sm font-medium text-white bg-indigo-500 
                  rounded-md hover:bg-indigo-600
                  ${ loading && actionData?.status !== 200 ? "disabled:hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-progress" : ""}`}
            onClick={handleClick}
            disabled={loading}
          >
            Login
          </button>
        </Form>

        <div className="my-2 flex flex-col">
          <a className="my-2 text-sm text-center text-indigo-400" href="register">Don't have an account?</a>
          <a className="my-2 text-xs text-center text-gray-400" href="forgot-password">Forgot your password?</a>
        </div>
        {actionData && <p className="text-md text-center text-red-600 font-semibold">{actionData.message}</p>}
      </div>

    </CenteredLayout>
  )
}
