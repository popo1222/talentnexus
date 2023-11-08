<script>
	import DataTable from './data-table.svelte';

	export let data;
	$: ({ candidates } = data);
</script>

<div class="w-full mx-auto">
	<DataTable data={candidates} />
</div>
