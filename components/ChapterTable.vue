<template>
	<table>
		<thead>
		<tr>
			<th class="chapter">Chapter</th>
			<th class="level">Level</th>
			<th>Unlocks</th>
			<th class="needed">XP Needed</th>
			<th class="totalxp">Total XP</th>
			<th class="percentage">% Progress</th>
		</tr>
		</thead>
		<tbody>
			<chapter-row v-for="(level, index) in act.levels" :key="level.id" :level="level" :index="index" :total-xp="totalXp(index)" :percentage="percentage(index)" />
		</tbody>
	</table>
</template>

<script>
import ChapterRow from '@/components/ChapterRow'

export default {
	components: { ChapterRow },
	props: {
		act: {
			type: Object,
			required: true,
		},
	},
	methods: {
		totalXp(index) { return this.act.levels.slice(0, index + 1).reduce((sum, level) => sum + level.needed, 0) },
		percentage(index) {
			const total = this.act.levels.reduce((sum, level) => sum + level.needed, 0)

			return Math.round(this.totalXp(index) / total * 100)
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
