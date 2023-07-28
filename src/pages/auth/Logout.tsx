import { useLoaderData } from "react-router-dom";
import CenteredLayout from "../../components/Layout/CenteredLayout";
import IResponse from "../../logic/interface/IResponse";
import User from "../../logic/Objects/User";
import { useEffect } from "react";

export async function loader(): Promise<IResponse<null>>{

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

    const data = useLoaderData() as IResponse<null>;


    useEffect(() => {

        if (data.success) {
            window.location.href = "/login";
        }

    }, [data])

    return (
        <CenteredLayout>
            <div className="w-full h-full md:max-w-md md:h-fit px-6 py-8 bg-white shadow-md rounded-md">
                <h1 className="text-3xl text-center font-bold text-gray-900"><a href="/">Techology</a></h1>
                <h2 className="mt-4 text-xl text-center">Logout</h2>
                <div className="my-4 flex flex-col">
                    <p className="text-md text-center text-red-600 font-semibold">{data.message}</p>
                </div>
            </div>
        </CenteredLayout>
    )

}