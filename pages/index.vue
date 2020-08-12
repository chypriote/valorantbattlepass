<template>
  <div class="container">
    <div class="row">
			<div class="col"><Logo /><h1 class="title">battlepass</h1></div>
    </div>
		<div class="row">
			<div class="col col-8">
				<chapter-table :act="act" />
			</div>
			<div class="col col-4">
				<calendar-table :act="act" />
			</div>
		</div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import ChapterTable from '@/components/ChapterTable'
import CalendarTable from '@/components/CalendarTable'

export default {
	components: { CalendarTable, ChapterTable, Logo },
	async asyncData({ $content }) {
		const act = await $content('act2').fetch()

		return { act }
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
</style>
