export class CommonResponse<T> {
    public data: T[];
    public message: string;
    public error: string;
}
