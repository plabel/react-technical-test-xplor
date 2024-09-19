export const validateInputValue = (value: string): boolean => {
  const issueRegex: RegExp = /^(?:[\w\d-]+\/[\w\d-]+\/issues\/)\d+$/;
  return issueRegex.test(value);
};
export default validateInputValue;
