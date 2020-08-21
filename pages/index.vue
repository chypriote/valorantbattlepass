<template>
  <div>
		<div class="container">
			<div class="row">
				<div class="col"><h1 class="title">battlepass</h1></div>
			</div>
			<div class="row">
				<div class="col col-3">
					<input type="text" v-model="level" aria-label="Your level" />
					<input type="text" v-model="missing" aria-label="Remaining XP" />
				</div>
				<div class="col col-3">
					<personal-stats />
				</div>
				<div class="col col-3">
					<personal-estimates />
				</div>
				<div class="col col-3">
					<games-left />
				</div>
			</div>
		</div>
		<nav class="container-fluid component-select">
			<a class="selector" :class="{'active': selected === 'chapter' }" @click.prevent="selectComponent('chapter')">Chapter</a>
			<a class="selector" :class="{'active': selected === 'calendar' }" @click.prevent="selectComponent('calendar')">Calendar</a>
			<a class="selector" :class="{'active': selected === 'graph' }" @click.prevent="selectComponent('graph')">Progression Graph</a>
		</nav>
		<div class="container">
			<div class="row">
				<div class="col">
					<component :is="selectedComponent" />
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import ChapterTable from '~/components/Chapter/ChapterTable'
import Calendar from '~/components/Calendar/Calendar'
import PersonalStats from '~/components/PersonalStats'
import PersonalEstimates from '~/components/PersonalEstimates'
import GamesLeft from '@/components/GamesLeft'
import { mapState } from 'vuex'

export default {
	components: { GamesLeft, PersonalStats, PersonalEstimates, Calendar, ChapterTable },
	async asyncData({ $content, store }) {
		const act = await $content('act2').fetch()

		store.commit('SET_ACT', act)
		return { act }
	},
	data: () => ({
		components: {
			chapter: ChapterTable,
			calendar: Calendar,
		},
		selectedComponent: Calendar,
		selected: 'calendar',
	}),
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
	methods: {
		selectComponent(component) {
			this.selected = component
			this.selectedComponent = this.components[component]
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
.component-select {
	height: 4rem;
	background-color: var(--state-secondary);
	display: flex;
	align-items: center;
	margin: 1rem 0;
	.selector {
		height: 100%;
		display: flex;
		align-items: center;
		padding: 0 1rem;
		text-transform: uppercase;
		font-size: .8rem;
		letter-spacing: .1em;
		font-weight: 800;
		color: #f9f9f9;
		border-bottom: 4px solid transparent;
		transition: color 1s cubic-bezier(.06, .81, 0, .98), border-color .5s cubic-bezier(.06, .81, 0, .98);
		&.active, &:hover, &:focus, &:active {border-color: var(--state-primary);}
	}
}
</style>
