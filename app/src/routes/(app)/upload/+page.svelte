<script>
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="w-full h-full flex justify-center items-center">
	<div class="max-w-md w-full mt-6 text-center flex flex-col justify-center space-y-4">
		<Label class="text-2xl">Upload candidate resume</Label>
		<Label for="picture" class="text-neutral-500">Only in PDF format</Label>
		<div class="w-full space-y-2">
			<Input id="picture" type="file" />
			<Button variant="default" class="w-full">Submit</Button>
		</div>
	</div>
</div>
