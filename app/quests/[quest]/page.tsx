interface Quest {
	slug: string;
}

export async function generateStaticParams() {
	const quests = await fetch('https://.../quests').then((res) => res.json());

	return quests.map((quest: Quest) => ({
		slug: quest.slug
	}));
}
