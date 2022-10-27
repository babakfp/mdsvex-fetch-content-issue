<script>
  import '../app.postcss'
</script>

<header class="border-b border-gray-100">
	<ul class="container mx-auto p-4 flex gap-4">
		<li>
			<a class="block py-2 px-4 bg-sky-50 rounded font-medium duration-150 hover:bg-sky-100 hover:text-sky-900"
				href="/"
			>
				GO HOME
			</a>
		</li>
	</ul>
</header>

<main class="container mx-auto p-4 pb-8">
	<slot />
</main>
