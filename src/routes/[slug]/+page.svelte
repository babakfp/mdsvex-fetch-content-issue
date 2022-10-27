<script>
  export let data
</script>

<h1 class="mb-2 font-medium">
	{data.metadata.title}
</h1>

<svelte:component
	this={data.content}
/>
