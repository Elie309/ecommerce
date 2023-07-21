import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import CenteredLayout from "../../Layout/CenteredLayout";
import IResponse from "../../logic/interface/IResponse";
import User from "../../logic/Objects/User";

export async function loader(): Promise<IResponse>{

    try {

        const response = await User.logout();

        return response;

    }catch(error: any) {

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

export default function logout() {

    const data = useLoaderData() as IResponse;

    const navigate = useNavigate();

    if(data.status === 200) {
        setTimeout(() => {
            navigate("/")
        },2000)
    }

    return (
        <CenteredLayout>
            <div className="w-full h-full md:max-w-md md:h-fit px-6 py-8 bg-white shadow-md rounded-md">
                <h1 className="text-3xl text-center font-bold text-gray-900"><a href="/">Techology</a></h1>
                <h2 className="mt-4 text-xl text-center">Logout</h2>
                <div className="my-4 flex flex-col">
                    <p className="text-sm text-center text-red-600">{data.message}</p>
                </div>
                
            </div>

        </CenteredLayout>
    )

}