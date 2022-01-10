# standard-result

define a standard result interface

## install

`npm install standard-result --save`

## usage

```typescript
import { isSuccessResult, Result } from 'standard-result';

interface User {
  id: number;
  name: string;
  email: string;
}

function login(): Result<User> {
  ...
}

const loginResult = login();

if (!isSuccessResult(loginResult)) {
  console.log(`login fail: ${loginResult.message || 'unknown reason'}`)
  ...
}


```

## interfaces

- SuccessResult
- ErrorResult

## apis

- isSuccessResult
- createSuccessResult
- createErrorResult

## License

MIT © AEPKILL
