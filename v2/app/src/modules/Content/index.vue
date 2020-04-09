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
				<chapter-list-container 
					:status="status"
					:toggle="toggle" 
					@closed="close"
				/>	
				<v-btn 
					class="toggle-filter-btn blue--text"
					@click.stop="toggle = !toggle">
					<v-icon>
						book
					</v-icon>
        </v-btn>
				<v-col class="col-12 col-md-12 pa-0 ma-0">
					
					<page-content-container
						:status="status"
					/>
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
	computed: {
		status() {
			return {
				disabled: 'Disabled',
				in_progress: 'In Progress',
				done: 'Done',
			}
		}
	},
	created () {
		if (this.$store.getters.API && this.$store.getters.user) {
			this.$store.dispatch('setReadStatus', this.$store.getters.user && this.$store.getters.user.id)
		}
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
.toggle-filter-btn {
	position: fixed!important;
	top: 20%!important;
	left: 0!important;
	box-shadow: none!important;
	cursor: pointer!important;
	z-index: 2!important;
}
</style>	