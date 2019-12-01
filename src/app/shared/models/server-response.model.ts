export class ServerResponse<T> {
  constructor(
    public body: T[],
    public error?: string,
    public errno?: string | number,
  ) { }
}
