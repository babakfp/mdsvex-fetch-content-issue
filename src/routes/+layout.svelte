<script>
  import '../app.postcss'
</script>

<ul class="flex bg-gray-100">
	<a class="block p-4 text-sky-700 font-medium hover:text-sky-900" href="/">Home</a>
	<a class="block p-4 text-sky-700 font-medium hover:text-sky-900" href="/blog">Blog</a>
</ul>

<main class="container px-4 mt-8">
	<slot />
</main>
