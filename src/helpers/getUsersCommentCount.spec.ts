import { GetUsersCommentCountTestCase, testCases } from "./fixtures/getUsersCommentCount.fixtures";
import getUsersCommentCount from "./getUsersCommentCount";

describe("getUsersCommentCount", () => {
  it.each(testCases)(`$description`, ({ timelineEvents, expected }: GetUsersCommentCountTestCase) => {
    expect(JSON.stringify(getUsersCommentCount(timelineEvents))).toEqual(expected);
  });
});
