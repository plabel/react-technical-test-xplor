import { testCases, ValidateInputValueTestCase } from "./fixtures/validateInputValue.fixtures"
import { validateInputValue } from "./validateInputValue"

describe('validateInputValue', () => {
    it.each(testCases)(
        `$description`,
        (
            {
                value,
                expected
            }: ValidateInputValueTestCase
        ) => {
            expect(validateInputValue(value)).toBe(expected);
        }
    )
})