<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Menubar from '$lib/components/ui/menubar';
	import { LayoutDashboard, Upload, FileSpreadsheet } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	import { page, navigating } from '$app/stores';

	// MOCK DATA HERE
	const menuData = [
		{
			header: 'Discover',
			body: [
				{
					name: 'Dashboard',
					route: '/dashboard'
				}
			]
		},
		{
			header: 'Management',
			body: [
				{
					name: 'Search Candidate',
					route: '/candidates'
				},
				{
					name: 'Upload Resume',
					route: '/upload'
				}
			]
		}
	];
</script>

<div class="w-screen h-screen lg:flex lg:items-center lg:px-6 lg:py-6">
	<div class="lg:border lg:shadow-xl w-full h-full overflow-hidden bg-white">
		<div class="hidden lg:flex items-center h-12 py-1 px-3 space-x-1 rounded-none">
			<Menubar.Root class="rounded-none border-none h-0 font-normal">
				<Menubar.Menu>
					<Menubar.Trigger class="font-bold "
						><span
							class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold"
							>TalentNexus</span
						></Menubar.Trigger
					>
					<Menubar.Content>
						<Menubar.Item>About Talent Nexus</Menubar.Item>
						<Menubar.Separator />
						<Menubar.Item>Quit</Menubar.Item>
					</Menubar.Content>
				</Menubar.Menu>
				<Menubar.Menu>
					<Menubar.Trigger>Account</Menubar.Trigger>
					<Menubar.Content>
						<Menubar.Group>
							<Menubar.Label inset>Switch Account</Menubar.Label>
							<Menubar.Separator />
							<Menubar.RadioGroup value="Jayden">
								<Menubar.RadioItem value="Kelvin">Kelvin</Menubar.RadioItem>
								<Menubar.RadioItem value="Jayden">Jayden</Menubar.RadioItem>
								<Menubar.RadioItem value="Alvin">Alvin</Menubar.RadioItem>
							</Menubar.RadioGroup>
						</Menubar.Group>
						<Menubar.Separator />
						<Menubar.Item inset>Add Account...</Menubar.Item>
						<Menubar.Separator />
						<Menubar.Item inset class="text-red-600">Logout</Menubar.Item>
					</Menubar.Content>
				</Menubar.Menu>
			</Menubar.Root>
		</div>
		<div class="border-t grid sm:grid-cols-5 h-full">
			<div class="hidden lg:block">
				<div class="py-4 space-y-4">
					{#each menuData as header}
						<div class="px-3 py-2">
							<h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">{header.header}</h2>
							{#each header.body as menu}
								<div class="space-y-1">
									<a
										href={menu.route}
										class={cn(
											buttonVariants(
												menu.route == $page.url.pathname
													? { variant: 'secondary' }
													: { variant: 'ghost' }
											),
											'w-full justify-start'
										)}
									>
										<LayoutDashboard class="mr-2 h-4 w-4" />
										{menu.name}
									</a>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
			<div class="lg:border-l lg:col-span-4 lg:px-8 lg:py-4"><slot /></div>
		</div>
	</div>
</div>
