import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../../content/${params.slug}.md`)
		const content = post.default
		return { content, metadata: post.metadata }
	} catch (err) {
		console.log(err)
		throw error(404)
	}
}
