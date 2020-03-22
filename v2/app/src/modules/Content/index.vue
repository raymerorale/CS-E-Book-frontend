<template>
	<div>
		<page-header/>
		<div
			width="100%"
			class="overflow-hidden"
		>
			<v-row>
				<v-col class="col-3 pa-0 ma-0">
					<chapter-list-container/>	
				</v-col>	
				<v-col class="col-9 pa-0 ma-0">
					<v-app-bar height="55"
					dark
					></v-app-bar>
					<page-content-container/>
				</v-col>
			</v-row>	
		</div>	
	</div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import ChapterListContainer from './ChapterListContainer/'
import PageContentContainer from './PageContentContainer/'
import { CHAPTERS } from '@/constants/chapters/'

export default {
	name: 'Content',
	components: {
		PageHeader,
		ChapterListContainer,
		PageContentContainer
	},
	data: () => ({
	}),
	mounted () {
	}
}
</script>

<style>

</style>	