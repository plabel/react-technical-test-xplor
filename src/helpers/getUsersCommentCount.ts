import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { TimelineEvent, UserWithCommentCount } from "../types";
import { TimelineEventType } from "../const";

export const getUsersCommentCount = (
  timelineEvents?: UseInfiniteQueryResult<TimelineEvent[], unknown>,
): UserWithCommentCount[] => {
  const initialVal: Record<string, UserWithCommentCount> = {};

  const recordOfUsersWithCommentCount: Record<string, UserWithCommentCount> | undefined = timelineEvents?.data
    ?.filter((timelineEvent) => timelineEvent.user !== undefined && timelineEvent.event === TimelineEventType.Commented)
    .reduce((acc, current) => {
      if (acc[current.user.login] === undefined) {
        acc[current.user.login] = {
          ...current.user,
          commentCount: 1,
        } as UserWithCommentCount;
      } else {
        acc[current.user.login].commentCount++;
      }
      return acc;
    }, initialVal);
  return Object.values(recordOfUsersWithCommentCount ?? {});
};
export default getUsersCommentCount;
