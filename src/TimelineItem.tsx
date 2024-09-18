import ChatBubble from "./ChatBubble";
import { TimelineEventType } from "./const";
import { Labeled } from "./Labeled";
import { Mentioned } from "./Mentioned";
import { TimelineItemProps } from "./types";

export const TimelineItem = (props: TimelineItemProps) => {
    const { event } = props;
    const selectComponent = () => {
        switch (event) {
            case TimelineEventType.Commented:
                return <ChatBubble {...props!} />
            case TimelineEventType.Labeled:
                return <Labeled {...props!}></Labeled>
            case TimelineEventType.CrossReferenced:
                return <Mentioned {...props!}></Mentioned>
            default:
                return <></>;
        }
    }

    return selectComponent()
}