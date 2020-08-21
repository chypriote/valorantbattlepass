<template>
	<table>
		<thead>
		<tr>
			<th class="chapter">Chapter</th>
			<th class="level">Level</th>
			<th class="unlocks">Unlocks</th>
			<th class="needed">XP Needed</th>
			<th class="totalxp">Total XP</th>
			<th class="percentage">% Progress</th>
		</tr>
		</thead>
		<tbody>
			<chapter-row
				v-for="(level, index) in act.levels" :key="level.id"
				:level="level"
				:index="index"
				:row-xp="rowXp(index)"
				:percentage="percentage(index)"
				:top="index % 5 === 0"
				:bottom="index % 5 === 4"
			/>
		</tbody>
	</table>
</template>

<script>
import ChapterRow from '~/components/Chapter/ChapterRow'
import { mapState } from 'vuex'

export default {
	components: { ChapterRow },
	computed: {
		...mapState({
			act: 'act',
		}),
	},
	methods: {
		rowXp(index) { return this.act.levels.slice(0, index + 1).reduce((sum, level) => sum + level.needed, 0) },
		percentage(index) {
			const total = this.act.levels.reduce((sum, level) => sum + level.needed, 0)

			return Math.round(this.rowXp(index) / total * 100)
		},
	},
}
</script>

<style scoped>
.chapter {
	text-align: center;
	width: 15%;
}
.level {
	text-align: center;
	width: 10%;
}
.needed {
	text-align: center;
	width: 15%;
}
.totalxp {
	text-align: center;
	width: 15%;
}
.percentage {
	text-align: center;
	width: 15%;
}
</style>
