<script lang="ts">
	import Home from '$lib/components/Home.svelte';
	import { t } from '$lib/i18n';

	const d = t('sv');
</script>

<Home {d} locale="sv" />
