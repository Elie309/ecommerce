import { Form, Link } from 'react-router-dom';
import CenteredLayout from '../../components/Layout/CenteredLayout';
import IResponse from '../../logic/interface/IResponse';

export async function action(
    // { request }: ActionFunctionArgs
    ): Promise<IResponse<null>> {

        //TODO: Implement this function

    return {
        status: 200,
        data: null,
        success: true,
        message: "Password reset link sent to your email",
        error: {
            message: "",
            code: "",
        }
    }
}

export default function ForgotPassword() {


    return (
        <CenteredLayout>
            <div className="w-full h-full md:max-w-md md:h-fit px-6 py-8 bg-white shadow-md rounded-md">
                <h1 className="text-3xl text-center font-bold text-gray-900"><a href="/">Techology</a></h1>
                <h2 className="mt-4 text-xl text-center">Forgot Password</h2>
                <Form method='POST' className="flex flex-col py-4 justify-center">
                    <div>
                        <label className="mt-4 text-sm 
                                    font-semibold text-gray-500"
                            
                        >
                            Email
                        </label>

                        <input

                            className="w-full px-4 py-2 mt-2 border rounded-md 
                                    outline-none border-gray-300 focus:border-indigo-500"
                            type="email"
                            id="email"
                            name='email'
                        />

                    </div>

                    <button className="w-full px-4 py-2 mt-4 text-sm 
                                        font-medium text-white bg-indigo-500 rounded-md 
                                        hover:bg-indigo-600"
                        type="submit"
                    >
                        Reset Password
                    </button>

                </Form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Remember your password?{' '}
                    <Link to="/login" className="text-blue-500">
                        Login
                    </Link>
                </p>
            </div>
        </CenteredLayout>
    );
};

