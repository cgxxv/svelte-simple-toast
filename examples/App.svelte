<script lang="ts">
	import Menu from "./Menu.svelte";
	import Toast, {type toast_position} from "../src/Toast.svelte";

	let position: toast_position = "top-right";
</script>

<Toast {position} />
<header>
	<h1>Svelte simple toast</h1>
</header>

<main>
	<Menu bind:position />
</main>

<style lang="postcss">
	header {
		text-align: center;
		padding-block: 1rem;
	}
	header h1 {
		@apply text-3xl font-medium;
	}

	main {
		max-width: 32rem;
		margin-inline: auto;
	}
</style>
