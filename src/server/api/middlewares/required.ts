interface RequiredArgs {
  query?: string[];
  params?: string[];
}

const isNotNullable = (value: any) => typeof value !== 'undefined' && value !== null;
const isNotEmpty = (value: any) => value !== "";
const getProperties = (arr: string[]) => arr.join(' | ');
const runValidators = (validators: ((value: any) => boolean)[]) => (value: any) => validators.every(fn => fn(value));

export const required = (opts: RequiredArgs) => (req: any, _: any, next: any) => {
  const { query: queryToCheck, params: paramsToCheck } = opts;
  const validators = runValidators([isNotNullable, isNotEmpty]);

  if (queryToCheck) {
    const { query } = req;
    const valid = queryToCheck.every(key => validators(query[key]));
    if (!valid) {
      const properties = getProperties(queryToCheck);
      return next(new Error(`Query params ${properties} are required`))
    }
  }

  if (paramsToCheck) {
    const { params } = req;
    const valid = paramsToCheck.every(key => validators(params[key]));
    if (!valid) {
      const paramsExpected = getProperties(paramsToCheck);
      return next(new Error(`Params ${paramsExpected} are required`))
    }
  }

  next();
}
