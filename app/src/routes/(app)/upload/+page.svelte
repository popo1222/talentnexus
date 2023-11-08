<script>
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { Loader2 } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let isLoading = false;
	let isAlert = false;

	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
			showAlert();
		}, 500);
	}

	async function showAlert() {
		isAlert = true;

		setTimeout(() => {
			isAlert = false;
		}, 5000);
	}
</script>

<div class="w-full h-full flex justify-center items-center">
	<div class="max-w-md w-full mt-6 text-center flex flex-col justify-center space-y-4">
		<Label class="text-2xl">Upload candidate resume</Label>
		<Label for="picture" class="text-neutral-500">Only in PDF format</Label>
		<form on:submit|preventDefault={onSubmit} class="w-full space-y-2">
			<Input id="picture" type="file" disabled={isLoading} />
			<Button variant="default" class="w-full" disabled={isLoading}
				>{#if isLoading}
					<Loader2 class="mr-2 h-4 w-4 animate-spin" />{/if}Submit</Button
			>
		</form>
	</div>
</div>

{#if isAlert}
	<div
		transition:fly={{ duration: 500, x: 500, opacity: 0, easing: quintOut }}
		class="fixed bottom-6 right-14 w-96"
	>
		<Alert.Root class="">
			<Alert.Title>Resume uploaded</Alert.Title>
			<Alert.Description
				>You can see uploaded resume at <a href="/candidates" class=" underline">Candidate List</a
				></Alert.Description
			>
		</Alert.Root>
	</div>
{/if}
