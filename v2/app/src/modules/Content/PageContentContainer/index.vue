<template>
	<div flat id="content-page-container">
	  	<perfect-scrollbar>

	  		<v-card
	  			v-if='contentBody.description'
	  			flat
	  			v-html="contentBody.description"

	  		/>

	  		<span v-if="contentBody.objectives && contentBody.objectives.length>0">
	  			<b>OBJECTIVES</b>
	  		</span>
	  		<li
	  			v-for="objective in contentBody.objectives"
					:key="objective"
	  			flat
	  			v-html="objective"
	  		/>
			<v-card flat v-html="contentBody.content"/>

	  	</perfect-scrollbar>

		<!-- <navigation-toolbar class="mt-3 mb-0"
			:status="status"
			:next_content_body="nextContentBody"
		/> -->
	</div>		
</template>

<script>
import NavigationToolbar from '@/components/NavigationToolbar'
import { CHAPTERS } from '@/constants/chapters/'
import { bus } from '@/main.js'

export default {
	name: 'PageContentContainer',
	components: {
		NavigationToolbar
	},
	props: [
		'status'
	],
	data: () => {
		return {
			contentBody: CHAPTERS[0],
			minReadTime: 2000,
			contentBody: CHAPTERS[0],
			nextContentBody: null
		}
	},
	created() {
		if (!this.nextContentBody) {
			if (CHAPTERS[0] && CHAPTERS[0].sub.length > 0 && CHAPTERS[0].sub[0]) {
				this.nextContentBody = CHAPTERS[0].sub[0]
			}
		}
	},
	mounted () {
		bus.$on('changeContentView', ({ content, next }) => {
			this.contentBody = content;

			if (next) {
				this.nextContentBody = next;
			}

			this.changeStatus()
		})

		this.changeStatus()
	},
	beforeDestroy () {
		bus.$off('changeContentView');	
	},
	methods: {
		scrollToTop() {
			window.scrollTo(0,0);
		},
		changeStatus() {
			if (this.contentBody.read_status && this.contentBody.read_status === this.status.disabled) {
				this.contentBody.read_status = this.status.in_progress

				if (this.$store.getters.API && this.$store.getters.user) {
					this.$store.dispatch('createReadStatus', {
						chapterId: this.contentBody.id,
						userId: this.$store.getters.user.id,
						status: this.status.in_progress
					})
				}
			}

			let timeout = setTimeout(() => {
				if (this.contentBody.read_status) {
					this.contentBody.read_status = this.status.done

					if (this.$store.getters.API && this.$store.getters.user) {
						this.$store.dispatch('updateReadStatus', {
							chapterId: this.contentBody.id,
							userId: this.$store.getters.user.id,
							status: this.status.done
						})
					}
				}
				if (this.nextContentBody && this.nextContentBody.read_status && this.nextContentBody.read_status === this.status.disabled) {
					this.nextContentBody.read_status = this.status.in_progress
				}
				clearTimeout(timeout)
			}, this.minReadTime);
		}
	}
}
</script>
<style>
#content-page-container .ps {
  height: 72vh;
  /* height: 63.7vh; */ /* with prev & next buttons*/
}
#content-page-container {
	position: relative;
	padding: 30px 40px;
	font-size: 1.25rem;
}

</style>
