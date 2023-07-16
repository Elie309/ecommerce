import CenteredLayout from "../../Layout/CenteredLayout";

export default function login() {
  return (
    <CenteredLayout>
      <div className="w-full h-full md:max-w-md md:h-fit px-6 py-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl text-center font-bold text-gray-900"><a href="/">Techology</a></h1>
        <h2 className="mt-4 text-xl text-center">Login</h2>
        <form className="flex flex-col w-full mt-4">
          <label className="text-sm font-semibold text-gray-500">Email</label>
          <input className="w-full px-4 py-2 mt-2 border rounded-md outline-none border-gray-300 focus:border-indigo-500" type="email" />
          <label className="mt-4 text-sm font-semibold text-gray-500">Password</label>
          <input className="w-full px-4 py-2 mt-2 border rounded-md outline-none border-gray-300 focus:border-indigo-500" type="password" />
          <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">Login</button>
        </form>

        <div className="my-2 flex flex-col">
          <a className="my-2 text-sm text-center text-indigo-400" href="register">Don't have an account?</a>
          <a className="my-2 text-xs text-center text-gray-400" href="forgot-password">Forgot your password?</a>
        </div>
      </div>
    </CenteredLayout>
  )
}
