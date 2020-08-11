<template>
  <div class="container">
    <div class="row">
			<div class="col"><Logo /><h1 class="title">battlepass</h1></div>
    </div>
		<div class="row">
			<div class="col col-8">
				<header>Levels</header>
				<table>
					<thead>
					<tr>
						<th>Chapter</th>
						<th>Level</th>
						<th>Unlocks</th>
						<th>XP Needed</th>
						<th>Total XP</th>
						<th>% Progress</th>
					</tr>
					</thead>
					<tbody>
					<template>
						<tr v-for="(level, index) in act.levels" :key="level.id">
							<td v-if="index % 5 === 0" :rowspan="5">Chapter {{ level.chapter }}</td>
							<td>{{ index }}</td>
							<td>
								<!-- eslint-disable-next-line vue/require-v-for-key -->
								<p v-for="unlock in level.unlocks">{{ unlock }}</p>
								<!-- eslint-disable-next-line vue/require-v-for-key -->
								<p v-for="unlock in level.free">{{ unlock }}</p>
							</td>
							<td>{{ level.needed }}</td>
							<td>{{ totalXp(index) }}</td>
							<td>{{ percentage(index) }} %</td>
						</tr>
					</template></tbody>
				</table>
			</div>
		</div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
	components: { Logo },
	async asyncData({ $content }) {
		const act = await $content('act2').fetch()

		return { act }
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

<style>
.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}
.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}
.links {
	padding-top: 15px;
}
</style>
