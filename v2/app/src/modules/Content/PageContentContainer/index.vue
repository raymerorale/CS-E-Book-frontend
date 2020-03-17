<template>
	<v-card flat id="content-page-container">
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
	  			flat
	  			v-html="objective"
	  		/>
			<v-card flat v-html="contentBody.content"/>

	  	</perfect-scrollbar>

		<navigation-toolbar class="nav-tbar"/>
	</v-card>		
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
	data: () => {
		return {
			contentBody: CHAPTERS[0]
		}
	},
	mounted () {
		bus.$on('changeContentView', (data) => {
			this.contentBody = data;
		})
	},
	beforeDestory () {
		bus.$off('changeContentView');	
	},
	methods: {
		scrollToTop() {
            window.scrollTo(0,0);
        }
	}
}
</script>
<style>
#content-page-container .ps {
  height: 65vh;
}
#content-page-container {
	position: relative;
	padding: 50px 50px;
	font-size: 1.5rem;
}
.nav-tbar {
	position: absolute;
	bottom: -2%;
}
</style>
