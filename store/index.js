import { add, differenceInDays, eachDayOfInterval } from 'date-fns'

export const state = () => ({
	current_level: 1,
	current_missing: 0,
	act: [],
	total_xp: 0,
	total_days: 0,
})

export const getters = {
	myXp: state => {
		const level = state.current_level
		const done = state.act.levels[level - 1].needed - parseInt(state.current_missing)

		return state.act.levels.slice(0, level - 1).reduce((sum, level) => sum + level.needed, 0) + done
	},
	myPercent: (state, getters) => getters.myXp / state.total_xp * 100,
	myAverage: (state, getters) => getters.myXp / differenceInDays(new Date(), new Date(state.act.start)),
	myEnd: (state, getters) => add(new Date(), { days: Math.ceil((state.total_xp - getters.myXp) / getters.myAverage) }),
	myFinish: (state, getters) => differenceInDays(getters.myEnd, new Date(state.act.end)),
}

export const mutations = {
	SET_ACT(state, act) {
		state.act = act
		state.total_xp = act.levels.reduce((sum, level) => sum + level.needed, 0)
		state.total_days = eachDayOfInterval({ start: new Date(act.start), end: new Date(act.end) }, { weekStartsOn: 1 })
		state.current_missing = parseInt(act.levels[0].needed)
	},
	SET_CURRENT_LEVEL(state, level) {
		state.current_level = parseInt(level)
	},
	SET_CURRENT_MISSING(state, missing) {
		state.current_missing = parseInt(missing)
	},
}
