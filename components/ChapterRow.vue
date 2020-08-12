<template>
	<tr>
		<td v-if="index % 5 === 0" :rowspan="5" class="chapter">Chapter {{ level.chapter }}</td>
		<td class="level">{{ index + 1 }}</td>
		<td>
			<!-- eslint-disable-next-line vue/require-v-for-key -->
			<p v-for="unlock in level.unlocks">{{ unlock }}</p>
			<!-- eslint-disable-next-line vue/require-v-for-key -->
			<p v-for="unlock in level.free" class="free">{{ unlock }}</p>
		</td>
		<td class="needed">{{ level.needed }}</td>
		<td class="totalxp">{{ totalXp }}</td>
		<td class="percentage">{{ percentage }} %</td>
	</tr>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
			required: true,
		},
		level: {
			type: Object,
			required: true,
		},
		totalXp: {
			type: Number,
			required: true,
		},
		percentage: {
			type: Number,
			required: true,
		},
	},
}
</script>

<style scoped>
.chapter {
	vertical-align: middle;
	transform: rotate(-60deg);
}
.level {
	vertical-align: middle;
	text-align: center;
}
.free {font-style: italic;}
.needed {text-align: right;}
.totalxp {text-align: right;}
.percentage {text-align: right;}
</style>
