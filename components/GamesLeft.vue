<template>
	<div class="card">
		<header>Games Left</header>
		<div class="content">
			<div class="indicator">
				<span class="title">Spike Rush</span>
				<span class="value">{{ `${spike.total} (${spike.per_day}/day)` }}</span>
			</div>
			<div class="indicator">
				<span class="title">Standard</span>
				<span class="value">{{ `${normal.total} (${normal.per_day}/day)` }}</span>
			</div>
			<div class="indicator">
				<span class="title">DeathMatch</span>
				<span class="value">{{ `${deathmatch.total} (${deathmatch.per_day}/day)` }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'GamesLeft',
	computed: {
		...mapGetters({
			missingXp: 'missingXp',
			daysLeft: 'daysLeft',
		}),
		spike() {
			const total = this.missingXp / 1000
			return {
				total: Math.ceil(total),
				per_day: Math.ceil((total) / this.daysLeft),
			}
		},
		normal() {
			const total = this.missingXp / 4200
			return {
				total: Math.ceil(total),
				per_day: Math.ceil((total) / this.daysLeft),
			}
		},
		deathmatch() {
			const total = this.missingXp / 500
			return {
				total: Math.ceil(total),
				per_day: Math.ceil((total) / this.daysLeft),
			}
		},
	},
}
</script>
