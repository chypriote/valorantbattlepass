<template>
	<tr
		:class="{'today': today, 'me': me, 'top': top, 'bottom': bottom, 'hint--top': me || today }"
		:aria-label="me ? 'Your current Xp' : today ? 'Optimal Xp' : ''"
	>
		<td v-if="top" :rowspan="index !== 0 ? 7 : 9 - getDay(day)" class="week">Week {{ Math.round(index / 7) + 1 }}</td>
		<td>{{ day| date }}</td>
		<td>{{ }}</td>
		<td>{{ neededXp |formatNumber }}</td>
	</tr>
</template>

<script>
import { getDay, isTuesday, isToday } from 'date-fns'
import { mapGetters, mapState } from 'vuex'

export default {
	props: {
		index: {
			type: Number,
			required: true,
		},
		day: {
			type: Date,
			required: true,
		},
		neededXp: {
			type: Number,
			required: true,
		},
		me: {
			type: Boolean,
			default: false,
		},
		top: {
			type: Boolean,
			default: false,
		},
		bottom: {
			type: Boolean,
			default: false,
		},
	},
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
		today() { return isToday(this.day) },
	},
}
</script>

<style scoped>
tr.top > td {border-top: 1px solid #ff4655;}
tr.bottom > td {border-bottom: 1px solid #ff4655;}
.week {
	vertical-align: middle;
	transform: rotate(-60deg);
}
.today {
	background-color: lightpink;
}
.me {
	background-color: lavender;
}
</style>
