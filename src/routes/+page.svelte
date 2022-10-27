<script>
  export let data
</script>

{#if data.posts.length > 0}
	<ul class="grid gap-2">
		{#each data.posts as post}
			<li>
				<a class="block py-2 px-4 bg-sky-50 rounded text-sky-700 font-medium duration-150 hover:bg-sky-100 hover:text-sky-900"
					href="/{post.slug}"
				>
					{post.metadata.title}
				</a>
			</li>
		{/each}
	</ul>
{/if}
