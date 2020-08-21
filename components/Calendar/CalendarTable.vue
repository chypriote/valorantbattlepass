<template>
	<table>
		<thead>
		<tr>
			<th class="week">Week</th>
			<th class="date">Date</th>
			<th class="your-xp">Your XP</th>
			<th class="opti-xp">Optimal XP</th>
		</tr>
		</thead>
		<tbody>
			<calendar-row
				v-for="(day, index) in all_days"
				:key="index"
				:index="index + start"
				:day="new Date(day)"
				:needed-xp="needed(index + start)"
				:me="needed(index + start) > myXp && needed(index + start - 1) < myXp"
				:top="index + start === 0"
				:bottom="(index + start) % 7 === 6"
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
	props: {
		half: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState({
			act: 'act',
			totalXp: 'total_xp',
			days: 'total_days',
		}),
		...mapGetters({
			myXp: 'myXp',
		}),
		halfCount() { return this.days.length /2 },
		start() { return this.half ? this.halfCount : 0 },
		all_days() { return this.days.slice(this.start, this.half ? this.days.length : this.halfCount) },
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
.week {text-align: center;width: 15%;}
.date {text-align: center;width: 25%;}
.your-xp {text-align: center;width: 30%;}
.opti-xp {text-align: center;width: 30%;}
</style>
