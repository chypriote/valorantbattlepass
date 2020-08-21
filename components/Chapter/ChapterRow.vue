<template>
	<tr :class="{'top': top, 'bottom': bottom}">
		<td v-if="top" rowspan="5" class="chapter">Chapter {{ level.chapter }}</td>
		<td class="level">{{ index + 1 }}</td>
		<td>
			<!-- eslint-disable-next-line vue/require-v-for-key -->
			<p v-for="unlock in level.unlocks">{{ unlock }}</p>
			<!-- eslint-disable-next-line vue/require-v-for-key -->
			<p v-for="unlock in level.free" class="free">{{ unlock }}</p>
		</td>
		<td class="needed">{{ level.needed }}</td>
		<td class="totalxp">{{ rowXp }}</td>
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
		rowXp: {
			type: Number,
			required: true,
		},
		percentage: {
			type: Number,
			required: true,
		},
		top: {
			type: Boolean,
			default: false,
		},
		bottom: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style scoped>
tr.top > td {border-top: 1px solid var(--state-primary);}
tr.bottom > td {border-bottom: 1px solid var(--state-primary);}
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
