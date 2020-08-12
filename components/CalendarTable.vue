<template>
	<table>
		<thead>
		<tr>
			<th>Week</th>
			<th>Date</th>
			<th>Your XP</th>
			<th>Min XP {{ days.length }}</th>
		</tr>
		</thead>
		<tbody>
		<!-- eslint-disable-next-line vue/require-v-for-key -->
		<tr v-for="(day, index) in days">
			<td v-if="index === 0 || isTuesday(day)" :rowspan="index !== 0 ? 7 : 9 - getDay(day)" class="week">Week {{ Math.round(index / 7) + 1 }}</td>
			<td>{{ format(day, 'dd/MM') }}</td>
			<td>{{ }}</td>
			<td>{{ needed(index) }}</td>
		</tr>
		</tbody>
	</table>
</template>

<script>
import { eachDayOfInterval, format, getDay, isTuesday } from 'date-fns'

export default {
	props: {
		act: {
			type: Object,
			required: true,
		},
	},
	data: () => ({ isTuesday, getDay, format	}),
	computed: {
		days() { return eachDayOfInterval({ start: new Date(this.act.start), end: new Date(this.act.end) }, { weekStartsOn: 1 }) },
		totalXp() { return this.act.levels.reduce((sum, level) => sum + level.needed, 0) },
		daily() { return this.totalXp / this.days.length },
	},
	methods: {
		needed(index, xp = 0) {
			if (index === -1) return xp
		 	const rowxp = Math.ceil((xp + this.totalXp / this.days.length) / 1000) * 1000

			return this.needed(index - 1, Math.min(rowxp, this.totalXp))
		},
	},
}
</script>

<style scoped>
.week {
	vertical-align: middle;
	transform: rotate(-60deg);
}
</style>
