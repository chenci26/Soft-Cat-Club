export const pipe = (...fns) => (x) => fns.reduce((acc, cur) => cur(acc), x);

export const andThen = (func) => (promise) => promise.then(func);
