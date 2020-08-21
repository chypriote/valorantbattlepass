<template>
	<div class="wrapper">
		<header>

		</header>
		<form class="card" @submit.prevent="submit">
			<div class="content">
				<input type="text" v-model="level" aria-label="Current Level" />
				<input type="text" v-model="missing" aria-label="Missing XP" />
			</div>
			<footer class="actions">
				<nuxt-link to="/">I don't care, take me to the tracker</nuxt-link>
				<button type="submit" :disabled="!level || !missing">Let's go</button>
			</footer>
		</form>
	</div>
</template>

<script>
export default {
	name: 'Start',
	data: () => ({ level: null, missing: null }),
	methods: {
		submit() {
			this.$store.commit('SET_CURRENT_MISSING', this.missing)
			this.$store.commit('SET_CURRENT_LEVEL', this.level)
		},
	},
}
</script>

<style scoped>
.wrapper {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--state-primary);
	background-image: url("~assets/valorant-logo.jpg");
	background-position: center;
}
.card {
	background-color: #fff;
	padding: 2rem;
	width: 50%;
	height: 50%;
	display: flex;
	flex-direction: column;
	opacity: .9;
	.content {
		flex-grow: 1;
	}
	.actions {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
}
</style>
