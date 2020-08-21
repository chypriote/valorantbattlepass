<template>
	<div class="card">
		<header>Progress</header>
		<div class="content">
			<div class="indicator">
				<span class="title">Your total Xp</span>
				<span class="value">{{ myXp |formatNumber }}</span>
			</div>
			<div class="indicator">
				<span class="title">Percent done</span>
				<span class="value">{{ myPercent |formatNumber(3) }}%</span>
			</div>
			<div class="indicator">
				<span class="title">Daily average</span>
				<span class="value">{{ myAverage |formatNumber }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'PersonalStats',
	computed: {
		...mapGetters({
			myXp: 'myXp',
			myAverage: 'myAverage',
			myPercent: 'myPercent',
		}),
	},
}
</script>

<style scoped>
header {
	background-color: #ff4655;
	color: #fff;
	font-weight: bold;
	text-align: center;
	padding: .25rem 1rem;
}
.card {
	border: 1px solid #ff4655;
	.content {
		padding: .5rem;
	}
}
.indicator {
	display: flex;
	justify-content: space-between;
	.title {font-weight: bold;}
}
</style>
