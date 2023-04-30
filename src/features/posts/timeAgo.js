import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
    // if timestamp is null, timeAgo will be an empty string
    let timeAgo = '';

    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }

    return (
        // fancy formatting for timestamp, italics and spacing
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
};

export default TimeAgo;