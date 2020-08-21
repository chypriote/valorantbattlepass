<template>
  <div class="container-fluid">
    <div class="row">
			<div class="col"><h1 class="title">battlepass</h1></div>
    </div>
		<div class="row">
			<div class="col">
				<input type="text" v-model="level" aria-label="Your level" />
				<input type="text" v-model="missing" aria-label="Remaining XP" />
			</div>
			<div class="col" v-if="level && missing">
				<personal-stats />
			</div>
			<div class="col" v-if="level && missing">
				<personal-estimates />
			</div>
		</div>
		<div class="row">
			<div class="col col-8">
				<chapter-table />
			</div>
			<div class="col col-4">
				<calendar-table />
			</div>
		</div>
  </div>
</template>

<script>
import ChapterTable from '~/components/Chapter/ChapterTable'
import CalendarTable from '~/components/Calendar/CalendarTable'
import PersonalStats from '~/components/PersonalStats'
import PersonalEstimates from '~/components/PersonalEstimates'
import { mapState } from 'vuex'

export default {
	components: { PersonalStats, PersonalEstimates, CalendarTable, ChapterTable },
	async asyncData({ $content, store }) {
		const act = await $content('act2').fetch()

		store.commit('SET_ACT', act)
		return { act }
	},
	computed: {
		...mapState({
			totalXp: 'total_xp',
		}),
		level: {
			get() { return this.$store.state.current_level },
			set(value) { this.$store.commit('SET_CURRENT_LEVEL', value) },
		},
		missing: {
			get() { return this.$store.state.current_missing },
			set(value) { this.$store.commit('SET_CURRENT_MISSING', value) },
		},
	},
}
</script>

<style scoped>
.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}
</style>
