import {formatDistanceToNow, parseISO} from 'date-fns';

type TimeAgoProps = {
    timestamp: string;
}

const TimeAgo = (props: TimeAgoProps) => {
    const {timestamp} = props;
	let timeAgo = '';
	if (timestamp) {
		const date = parseISO(timestamp);
		const timePeriod = formatDistanceToNow(date);
		timeAgo = `${timePeriod} ago`;
	}

	return (
		<span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
	);
};
export default TimeAgo;
