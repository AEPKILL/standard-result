interface ResultBase {
  code?: number;
  message?: string;
}

export interface SuccessResult<T = void> extends ResultBase {
  success: true;
  data: T;
}

export interface ErrorResult extends ResultBase {
  success: false;
}

export type Result<T = void> = SuccessResult<T> | ErrorResult;

export function isSuccessResult<T = any>(value: any): value is SuccessResult<T>;
export function isSuccessResult<T>(value: Result<T>): value is SuccessResult<T>;
export function isSuccessResult<T = any>(
  value: any
): value is SuccessResult<T> {
  if (value) {
    return value.success === true;
  }

  return false;
}

export function createSuccessResult<T>(
  value: Omit<SuccessResult<T>, 'success'>
): SuccessResult<T> {
  return {
    ...value,
    success: true,
  };
}

export function createErrorResult(
  value: Omit<ErrorResult, 'success'>
): ErrorResult {
  return {
    ...value,
    success: false,
  };
}
