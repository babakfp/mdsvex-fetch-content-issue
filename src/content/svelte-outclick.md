---
title: Svelte OutClick
---

<script>
	import { onMount } from 'svelte'

	let content
	onMount(async () => {
		fetch('https://api.github.com/repos/babakfp/test/contents/README.md')
		// fetch('https://api.github.com/repos/babakfp/svelte-outclick/contents/README.md')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			content = data.content
			console.log(content)
		}).catch(error => {
			console.log(error)
			return []
		})
	})
</script>

This is *Svelte OutClick* content.

<!--
	❌ ERROR: </p> attempted to close an element that was not open
-->
<!-- {#if content}
	{@html atob(content)}
{:else}
	Loading...
{/if} -->

<!--
	✅ ERROR goes away: </p> attempted to close an element that was not open
	❌ but content doesn't get converted to HTML!
-->
{@html content ? atob(content) : 'Loading...'}
