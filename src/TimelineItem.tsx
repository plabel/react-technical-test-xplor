import ChatBubble from "./ChatBubble";
import Closed from "./Closed";
import { TimelineEventType } from "./const";
import Labeled from "./Labeled";
import Mentioned from "./Mentioned";
import Reopened from "./Reopened";
import { TimelineItemProps } from "./types";

export default function TimelineItem(props: TimelineItemProps) {
  const { event } = props;
  const selectComponent = () => {
    switch (event) {
      case TimelineEventType.Commented:
        return <ChatBubble {...props!} />;
      case TimelineEventType.Labeled:
        return <Labeled {...props!}></Labeled>;
      case TimelineEventType.Closed:
        return <Closed {...props!}></Closed>;
      case TimelineEventType.Reopened:
        return <Reopened {...props!}></Reopened>;
      case TimelineEventType.CrossReferenced:
        return <Mentioned {...props!}></Mentioned>;
      default:
        return <></>;
    }
  };

  return selectComponent();
}
