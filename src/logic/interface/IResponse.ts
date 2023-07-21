export default interface IResponse {
    success: boolean;
    status: number;
    message: string;
    data: any;
    error: {
        code: string;
        message: string;
    };
}