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
				<v-col class="pa-0 ma-0"
					style="transition: all 0.2s ease"
					:class="{ 'col-3': toggle }">
					<chapter-list-container 
						ref="chapterListContainer"
						:status="status"
						:toggle="toggle" 
						@closed="close"
					/>	
					<v-btn 
						class="toggle-filter-btn blue--text"
						:class="{ 'toggle-filter-btn--inactive': !toggle }"
						@click.stop="toggleNav">
						<v-icon>
							book
						</v-icon>
					</v-btn>
				</v-col>
				<v-col 
					style="transition: all 0.2s ease"
					:class="{ 'col-md-9': toggle }"
					class="col-12 pa-0 ma-0">
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
		toggle: true
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
		if (this.$store.getters.BACKEND && this.$store.getters.user) {
			// this.$store.dispatch('setReadStatus', this.$store.getters.user && this.$store.getters.user.id)
			this.$store.dispatch('setUserChapterIdsEnabled', this.$store.getters.user && this.$store.getters.user.id)
		}
	},
	methods:{
		toggleNav(){
			this.toggle = !this.toggle
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
	position: absolute!important;
	left: 24%;
	z-index: 3;
}
.toggle-filter-btn--inactive {
	left: 0%;
}
</style>	