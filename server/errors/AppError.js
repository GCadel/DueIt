export class AppError extends Error {
  constructor(message, status) {
    super(message, status);
    this.name = this.constructor.name;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}
