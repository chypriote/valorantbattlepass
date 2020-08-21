<template>
	<table>
		<thead>
		<tr>
			<th class="week">Week</th>
			<th class="date">Date</th>
			<th class="your-xp">Your XP</th>
			<th class="opti-xp">Optim XP</th>
		</tr>
		</thead>
		<tbody>
			<calendar-row
				v-for="(day, index) in days"
				:key="index"
				:index="index"
				:day="day"
				:needed-xp="needed(index)"
				:me="needed(index) < myXp && needed(index + 1) > myXp"
				:top="index === 0 || isTuesday(day)"
				:bottom="index % 7 === 6"
				/>
		</tbody>
	</table>
</template>

<script>
import { getDay, isTuesday, isToday } from 'date-fns'
import { mapGetters, mapState } from 'vuex'
import CalendarRow from '~/components/Calendar/CalendarRow'

export default {
	components: { CalendarRow },
	data: () => ({ getDay, isTuesday, isToday	}),
	computed: {
		...mapState({
			act: 'act',
			totalXp: 'total_xp',
			days: 'total_days',
		}),
		...mapGetters({
			myXp: 'myXp',
		}),
	},
	methods: {
		needed(index, xp = 0) {
			if (index === -1) return xp
		 	const rowxp = (xp + this.totalXp / this.days.length)

			return this.needed(index - 1, Math.min(rowxp, this.totalXp))
		},
	},
}
</script>

<style scoped>
.week {text-align: center;}
.your-xp {text-align: center;}
.opti-xp {text-align: center;}
</style>
