import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { TimelineEvent } from "../../types";
import { TimelineEventType } from "../../const";

export type GetUsersCommentCountTestCase = {
  description: string;
  timelineEvents?: UseInfiniteQueryResult<TimelineEvent[], unknown>;
  expected: string;
};

export const testCases: GetUsersCommentCountTestCase[] = [
  {
    description: `
            Given a valid timelineEvents
            Then it returns the expected
          `,
    timelineEvents: {
      data: [
        {
          id: 0,
          created_at: "",
          body: "",
          user: {
            login: "user1",
            avatar_url: "",
          },
          event: TimelineEventType.Commented,
        },
        {
          id: 0,
          created_at: "",
          body: "",
          user: {
            login: "user1",
            avatar_url: "",
          },
          event: TimelineEventType.Commented,
        },
        {
          id: 0,
          created_at: "",
          body: "",
          user: {
            login: "user1",
            avatar_url: "",
          },
          event: TimelineEventType.Closed,
        },
      ],
    } as unknown as UseInfiniteQueryResult<TimelineEvent[], unknown>,
    expected: JSON.stringify([{ login: "user1", avatar_url: "", commentCount: 2 }]),
  },
  {
    description: `
            Given undefined
            Then it returns []
          `,
    timelineEvents: undefined,
    expected: JSON.stringify([]),
  },
];
