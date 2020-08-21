<template>
	<tr
		:class="{'today': today, 'me': me, 'top': top, 'bottom': bottom, 'hint--top': me || today }"
		:aria-label="me ? 'Your current Xp' : today ? 'Optimal Xp' : ''"
	>
		<td v-if="top || isTuesday(day)" :rowspan="index !== 0 ? 7 : 9 - getDay(day)" class="week">Week {{ Math.round(index / 7) + 1 }}</td>
		<td class="date">{{ day| date }}</td>
		<td class="my-xp">{{ myAverage * (index + 1) |formatNumber }}</td>
		<td class="required-xp">{{ neededXp |formatNumber }}</td>
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
			myAverage: 'myAverage',
		}),
		today() { return isToday(this.day) },
	},
}
</script>

<style scoped>
tr.top > td {border-top: 1px solid var(--state-primary);}
tr.bottom > td {border-bottom: 1px solid var(--state-primary);}
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
.date {text-align: center;}
.my-xp {text-align: right;}
.required-xp {text-align: right;}
</style>
