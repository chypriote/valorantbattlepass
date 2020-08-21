<template>
	<div class="row">
		<div class="col col-6"><calendar-table /></div>
		<div class="col col-6"><calendar-table half /></div>
	</div>
</template>

<script>
import CalendarTable from '@/components/Calendar/CalendarTable'

export default {
	name: 'Calendar',
	components: { CalendarTable },
}
</script>
