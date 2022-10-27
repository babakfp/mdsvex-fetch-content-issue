export async function load({ params }) {
	const postFiles = import.meta.glob('/src/content/*.md')

	const posts = await Promise.all(
		Object.entries(postFiles).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path
				.replace('/src/content/', '')
				.replace('.md', '')
	
			return { metadata, slug }
		})
	)

	return { posts }
}
