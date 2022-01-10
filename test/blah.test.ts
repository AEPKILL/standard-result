import {
  isSuccessResult,
  createSuccessResult,
  createErrorResult,
} from '../src';

test('standard result', () => {
  describe('isSuccessResult', () => {
    const successResult = createSuccessResult({ data: null });
    const successResult2 = {};
    Object.setPrototypeOf(successResult2, successResult);

    expect(isSuccessResult(successResult)).toBe(true);
    expect(isSuccessResult(successResult2)).toBe(true);
    expect(isSuccessResult({ success: false })).toBe(false);
    expect(isSuccessResult(null)).toBe(false);
    expect(isSuccessResult(undefined)).toBe(false);
    expect(isSuccessResult(NaN)).toBe(false);
  });

  describe('createSuccessResult', () => {
    const successResult = createSuccessResult({
      data: 0,
      code: 0,
      message: 'ok',
    });

    expect(successResult.success).toBe(true);
    expect(successResult.data).toBe(0);
    expect(successResult.code).toBe(0);
    expect(successResult.message).toBe('ok');
  });

  describe('createErrorResult', () => {
    const successResult = createErrorResult({
      code: -1,
      message: 'error',
    });

    expect(successResult.success).toBe(false);
    expect(successResult.code).toBe(-1);
    expect(successResult.message).toBe('error');
  });
});
