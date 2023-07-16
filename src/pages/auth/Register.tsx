import CenteredLayout from "../../Layout/CenteredLayout";

export default function register() {
  return (

    <CenteredLayout>
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-gray-900">Register</h1>
        <form className="flex flex-col w-full mt-4">
          <label className="text-sm font-semibold text-gray-500">Email</label>
          <input className="w-full px-4 py-2 mt-2 border rounded-md outline-none border-gray-300 focus:border-indigo-500" type="email" />
          <label className="mt-4 text-sm font-semibold text-gray-500">Password</label>
          <input className="w-full px-4 py-2 mt-2 border rounded-md outline-none border-gray-300 focus:border-indigo-500" type="password" />
          <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">Register</button>
        </form>

        <div className="my-2">
          <a className="text-sm text-indigo-400" href="login">Already have an account?</a>
        </div>
      </div>

    </CenteredLayout>

  )
}
