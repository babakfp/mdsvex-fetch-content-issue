<script>
  export let data
</script>

{#if data.posts.length > 0}
	<ul>
		{#each data.posts as post}
			<a class="block py-2 text-sky-700 font-medium border-b border-dashed last:border-none hover:text-sky-900" href="/blog/{post.slug}">
				{post.metadata.title}
			</a>
		{/each}
	</ul>
{/if}
