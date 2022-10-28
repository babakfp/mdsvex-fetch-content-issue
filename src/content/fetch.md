---
title: Fetch
---

<script>
	import { onMount } from 'svelte'

	let content
	onMount(async () => {
		fetch('https://api.github.com/repos/babakfp/fetch-test-repo/contents/README.md')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			content = data.content
			console.log(content)
			console.log(atob(content))
		}).catch(error => {
			console.log(error)
			return []
		})
	})
</script>

<!--
	❌ ERROR: </p> attempted to close an element that was not open
	https://github.com/pngwn/MDsveX/issues/478#issuecomment-1293005387
-->
{#if content}
	{@html atob(content)}
{:else}
	Loading...

{/if}

<!--
	✅ ERROR goes away: </p> attempted to close an element that was not open
	❌ but content doesn't get converted to HTML!
-->
<!-- {@html content ? atob(content) : 'Loading...'} -->

<!-- {content} -->
