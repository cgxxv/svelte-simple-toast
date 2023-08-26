# Svelte simple toast

Demo: https://svelte-simple-toast.vercel.app

## Installation

```bash
npm install @cgxxv/svelte-simple-toast
```

## Usage

```svelte
<script lang="ts">
	import Toast from "@cgxxv/svelte-simple-toast";
</script>

<Toast position="top-right" />
```

You can pass one of 6 positions as a prop: `top-left` (default), `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`.

When you want to send a toast, from wherever you like, import the `send_toast` function and execute it.

```typescript
import { send_toast } from "@cgxxv/svelte-simple-toast";

send_toast({
	title: "Information",
	description: "You can use this component in any Svelte project",
});
```

Pass the following options to this function:

-   `title: string` (default: `""`)
-   `description: string` (default: `""`)
-   `variant: "info" | "success" | "error"` (default: `info`)
-   `duration: number` (default: `3000`)
