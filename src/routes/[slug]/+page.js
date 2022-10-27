import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../content/${params.slug}.md`)
		return {
			content: post.default,
			metadata: post.metadata,
		}
	} catch (err) {
		console.log(err)
		throw error(404)
	}
}
