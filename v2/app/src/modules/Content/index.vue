<template>
	<div v-touch:swipe.right="toggleNav">
		<page-header/>
		<div
			width="100%"
			class="overflow-hidden"
		>
		<v-app-bar height="55" class="sub-header"
					dark
					>
		</v-app-bar>
	
			<v-row>
				<v-col class="col-3 pa-0 ma-0">
					<chapter-list-container :toggle="toggle" @closed="close"/>	
				</v-col>	
				<v-col class="col-12 col-md-9 pa-0 ma-0">
					
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
		toggle: false
	}),
	mounted () {
	},
	methods:{
		toggleNav(){
			this.toggle = true
		},
		close(){
			this.toggle = false
		}
	}
}
</script>

<style>
.sub-header{
	margin-top: 60px !important;
}
</style>	