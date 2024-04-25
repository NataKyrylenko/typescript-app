export interface FeedbackProps {
    countLike: number,
    countDislike: number,
    onLike: () => void,
    onDislike: () => void,
    resetResult: () => void 
}