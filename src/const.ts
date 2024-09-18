import mainConfig from '../config.json';

export const defaultUri = "facebook/react/issues/7901";
export const baseUrl = "https://api.github.com/repos/";
export const authStr = `Bearer ${mainConfig.personal_access_token}`;
export enum TimelineEventType {
    Commented = 'commented',
    Labeled = 'labeled',
    CrossReferenced = 'cross-referenced',
};
export const timelineEventTypes: TimelineEventType[] = [
    TimelineEventType.Commented,
    TimelineEventType.Labeled,
    TimelineEventType.CrossReferenced,
];
