<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Github, Loader2 } from 'lucide-svelte';
	// import UserAuthForm from "./(components)/user-auth-form.svelte";

	let isLoading = false;
	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;

			goto('/upload');
		}, 3000);
	}
</script>

<div class="md:hidden">
	<img
		src="/examples/authentication-light.png"
		width={1280}
		height={843}
		alt="Authentication"
		class="block dark:hidden"
	/>
	<img
		src="/examples/authentication-dark.png"
		width={1280}
		height={843}
		alt="Authentication"
		class="hidden dark:block"
	/>
</div>
<div
	class="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<Button href="/" variant="ghost" class="absolute right-4 top-4 md:right-8 md:top-8">Login</Button>
	<div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
		<div
			class="absolute inset-0 bg-cover bg-center"
			style="
				background-image:
					url(talentnexus\ bg.jpg);"
		/>
		<div class="relative z-20 flex items-center text-lg font-medium">
			<!-- <Command class="mr-2 h-6 w-6" /> -->
			<img src="/1.png" alt="Talent Nexus" class="w-28" />
		</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2" />
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">
					Welcome to <span
						class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold"
						>TalentNexus</span
					>
				</h1>
				<p class="text-sm text-muted-foreground">Enter your email below to login</p>
			</div>
			<div class="grid gap-6">
				<form on:submit|preventDefault={onSubmit}>
					<div class="grid gap-2">
						<div class="grid gap-1">
							<Label class="sr-only" for="email">Email</Label>
							<Input
								id="email"
								placeholder="name@example.com"
								type="email"
								autocapitalize="none"
								autocomplete="email"
								autocorrect="off"
								disabled={isLoading}
							/>
							<Input
								id="password"
								placeholder="password"
								type="password"
								autocapitalize="none"
								autocomplete="email"
								autocorrect="off"
								disabled={isLoading}
							/>
						</div>
						<Button disabled={isLoading}>
							{#if isLoading}
								<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							{/if}
							Sign In with Email
						</Button>
					</div>
				</form>
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<span class="w-full border-t" />
					</div>
					<div class="relative flex justify-center text-xs uppercase">
						<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
					</div>
				</div>
				<Button variant="outline" type="button" disabled={isLoading}>
					{#if isLoading}
						<Loader2 class="mr-2 h-4 w-4 animate-spin" />
					{:else}
						<Github class="mr-2 h-4 w-4" />
					{/if}
					Github
				</Button>
			</div>
			<p class="px-8 text-center text-sm text-muted-foreground">
				By clicking continue, you agree to our{' '}
				<a href="/terms" class="underline underline-offset-4 hover:text-primary">
					Terms of Service
				</a>
				and
				<a href="/privacy" class="underline underline-offset-4 hover:text-primary">
					Privacy Policy
				</a>
				.
			</p>
		</div>
	</div>
</div>
