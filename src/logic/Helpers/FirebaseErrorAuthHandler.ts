import IResponse from "../interface/IResponse";

export default function firebaseErrorAuthHandler(error: any): IResponse<null> {
    let response: IResponse<null> = {
        error: {
            code: "",
            message: "",
        },
        status: 500,
        success: false,
        message: "",
        data: null,
    };

    switch (error.code) {
        case "auth/invalid-email":
            response.error.code = error.code;
            response.error.message = "Invalid email format.";
            response.status = 400;
            response.message = "Invalid email format.";
            break;

        case "auth/weak-password":
            response.error.code = error.code;
            response.error.message = "Weak password. Password must be stronger.";
            response.status = 400;
            response.message = "Weak password. Password must be stronger.";
            break;

        case "auth/wrong-password":
            response.error.code = error.code;
            response.error.message = "Please check your credentials.";
            response.status = 401;
            response.message = "Please check your credentials.";
            break;

        case "auth/email-not-verified":
            response.error.code = error.code;
            response.error.message = "Email not verified. Please verify your email address.";
            response.status = 403;
            response.message = "Email not verified. Please verify your email address.";
            break;


        case "auth/email-already-in-use":
            response.error.code = error.code;
            response.error.message = "Email is already registered.";
            response.status = 409;
            response.message = "Email is already registered.";
            break;

        case "auth/user-not-found":
            response.error.code = error.code;
            response.error.message = "Please check your credentials.";
            response.status = 404;
            response.message = "Please check your credentials.";
            break;

        case "auth/user-not-signed-in":
            response.error.code = error.code;
            response.error.message = "No user signed in. Cannot perform sign-out.";
            response.status = 400;
            response.message = "No user signed in. Cannot perform sign-out.";
            break;
        case "auth/user-cancelled":
            response.error.code = error.code;
            response.error.message = "User cancelled the sign-out process.";
            response.status = 200; // Status 200 for successful cancellation
            response.message = "User cancelled the sign-out process.";
            break;

        case "auth/user-disabled":
            response.error.code = error.code;
            response.error.message = "This account has been disabled.";
            response.status = 403;
            response.message = "This account has been disabled.";
            break;

        case "auth/network-request-failed":
            response.error.code = error.code;
            response.error.message = "Network request failed. Please check your internet connection.";
            response.status = 500;
            response.message = "Network request failed. Please check your internet connection.";
            break;

        case "auth/too-many-requests":
            response.error.code = error.code;
            response.error.message = "Too many requests. Please try again later.";
            response.status = 429;
            response.message = "Too many requests. Please try again later.";
            break;

        case "auth/server-error":
            response.error.code = error.code;
            response.error.message = "Server error occurred during sign-out.";
            response.status = 500;
            response.message = "Server error occurred during sign-out.";
            break;


        default:
            response.error.code = "auth/unknown-error";
            response.error.message = error.message || "An unknown error occurred";
            response.status = 500;
            response.message = error.message || "An unknown error occurred.";
            break;
    }

    return response;
}
