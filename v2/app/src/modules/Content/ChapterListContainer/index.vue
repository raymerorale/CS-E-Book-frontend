<template>
	<v-navigation-drawer
		id="chapter-list-container"
	  	dark
      permanent
      width="400"
  	>
  	<perfect-scrollbar>
      <list-container :nodes="chaptersList"/>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import ListContainer from './ListContainer'
import { CHAPTERS } from '@/constants/chapters/'
import { bus } from '@/main.js'

export default {
	name: 'ChapterListContainer',
  components: {
    ListContainer
  },
    data () {
      return {
      }
    },
    mounted () {

    },
    beforeDestroy () {

    },
    computed: {
    	chaptersList: () => {
    		return CHAPTERS.map((v, i) => {
          v.active = i === 0 ? true : false;
          return v
    		})
    	}
    }
  }
</script>	

<style>
#chapter-list-container .ps {
  height: 80vh;
}
</style>