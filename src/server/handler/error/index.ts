export const errorHandler = (err: any, _: any, res: any, next: any) => {
  if (err && err instanceof Error) {
    const msg = err.message;
    return res.status(400).json({ error: msg });
  }
  next();
}
