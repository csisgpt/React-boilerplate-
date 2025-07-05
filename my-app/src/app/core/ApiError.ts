export interface ApiErrorProps {
  status: number;
  message: string;
  details?: unknown;
}

/** Custom error object used by HttpClient */
export class ApiError extends Error {
  status: number;
  details?: unknown;

  constructor({ status, message, details }: ApiErrorProps) {
    super(message);
    this.status = status;
    this.details = details;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
