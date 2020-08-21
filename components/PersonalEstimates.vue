<template>
	<div class="card">
		<header>Estimations</header>
		<div class="content">
			<div class="indicator">
				<span class="title">Estimated End Date</span>
				<span class="value">{{ myEnd |date }}</span>
			</div>
			<div class="indicator">
				<span class="title">{{ act.title }} End Date</span>
				<span class="value">{{ act.end |date }}</span>
			</div>
			<div class="indicator">
				<span class="title">{{ myFinish > 0 ? 'Late by' : 'Ahead by' }}</span>
				<span class="value">{{ Math.abs(myFinish) }} days</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
	name: 'PersonalStats',
	computed: {
		...mapState({
			act: 'act',
		}),
		...mapGetters({
			myEnd: 'myEnd',
			myFinish: 'myFinish',
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
