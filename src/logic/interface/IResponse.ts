export default interface IResponse<T> {
    success: boolean;
    status: number;
    message: string;
    data: T;
    error: {
        code: string;
        message: string;
    };
}