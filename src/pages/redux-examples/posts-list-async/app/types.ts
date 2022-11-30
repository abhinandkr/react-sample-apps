export type Reaction = {
	thumbsUp: number,
	wow: number,
	heart: number,
	rocket: number,
	coffee: number,
}

export type Post = {
	id: string;
	title: string;
	body: string;
	userId: string,
	date: string,
	reactions: Reaction,
};

export type PostReaction = {
	postId: string;
	reaction: string;
}

export type User = {
	id: string;
	name: string;
}

export type State = {
	posts: Post[],
	status: string,
	error: any,
};
