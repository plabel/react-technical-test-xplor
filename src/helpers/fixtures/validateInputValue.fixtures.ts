export type ValidateInputValueTestCase = {
  description: string;
  value: string;
  expected: boolean;
};

export const testCases: ValidateInputValueTestCase[] = [
  {
    description: `
          Given a valid value
          Then it returns true
        `,
    value: "facebook/react/issues/7901",
    expected: true,
  },
  {
    description: `
          Given a valid value
          When the username contains a number
          Then it returns true
        `,
    value: "Elon3/Web-Site3/issues/1",
    expected: true,
  },
  {
    description: `
          Given a valid value
          When the username contains an uppercase
          Then it returns true
        `,
    value: "Elon/Web-Site/issues/1",
    expected: true,
  },
  {
    description: `
          Given a valid value
          When the username contains dashes
          Then it returns true
        `,
    value: "Elon-Musk/Web-Site/issues/1",
    expected: true,
  },
  {
    description: `
          Given a valid value
          When the username contains a number and dashes
          Then it returns true
        `,
    value: "Elon-Musk3/Web-Site/issues/1",
    expected: true,
  },
  {
    description: `
          Given a invalid value
          Then it returns false
        `,
    value: "ts-jest/docs/getting-started/installation/#jest-config-file",
    expected: false,
  },
  {
    description: `
          Given undefined
          Then it returns false
        `,
    value: undefined as unknown as string,
    expected: false,
  },
];
