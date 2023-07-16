import { Form, Link } from 'react-router-dom';
import CenteredLayout from '../../Layout/CenteredLayout';

export default function ForgotPassword() {


    return (
        <CenteredLayout>
            <div className="w-full h-full md:max-w-md md:h-fit px-6 py-8 bg-white shadow-md rounded-md">
                <h1 className="text-3xl text-center font-bold text-gray-900"><a href="/">Techology</a></h1>
                <h2 className="mt-4 text-xl text-center">Forgot Password</h2>
                <Form method='POST' className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700">
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
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-2"
                    >
                        Reset Password
                    </button>
                </Form>
                <p className="mt-4 text-sm text-gray-600">
                    Remember your password?{' '}
                    <Link to="/login" className="text-blue-500">
                        Login
                    </Link>
                </p>
            </div>
        </CenteredLayout>
    );
};

