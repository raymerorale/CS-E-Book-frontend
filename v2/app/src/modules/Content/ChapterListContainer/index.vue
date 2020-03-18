<template>
	<v-navigation-drawer
		id="chapter-list-container"
	  	dark
      width="340"
      height="100vh"
      absolute
      v-model="drawer"
  	>
    <br><br><br>
    <div class="menu-btn d-block d-md-none">
      <v-btn icon @click="willClose">
          <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
    <v-progress-linear
      :value="progress"
      height="25"
    >
      <strong>{{ progress }}%</strong>
    </v-progress-linear>
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
        drawer: true
      }
    },
    mounted () {

    },
    beforeDestroy () {

    },
    methods: {
      willClose(){
        this.drawer = false
      }
    },
    computed: {
    	chaptersList: () => {
    		return CHAPTERS.map((v, i) => {
          v.active = i === 0 ? true : false;
          return v
    		})
    	}
    },
    props:{
      toggle: Boolean
    },
    watch:{
      toggle: function(newVal, oldVal){
          this.drawer = newVal
      },
      drawer: function(newVal, oldVal){
        if(!this.drawer){
          this.$emit('closed')
        }
      },
      progress() {
        const TOTAL_READ = this.getTotalRead(this.chaptersList)
        const TOTAL_PAGES = this.getTotalPages(this.chaptersList)

        return Math.ceil((TOTAL_READ / TOTAL_PAGES) * 100)
      }
    },
    methods: {
      getTotalPages(chaptersList) {
        let total = chaptersList.length
        chaptersList.map(chapter => {
          if (chapter.sub && chapter.sub.length > 0) {
            total += this.getTotalPages(chapter.sub)
          }
        })
        return total
      },
      getTotalRead(chaptersList) {
        return chaptersList.reduce((total, chapter) => {
          if (chapter.read_status && chapter.read_status === 'Done') {
            total++ 
          }
          if (chapter.sub && chapter.sub.length > 0) {
            total += this.getTotalRead(chapter.sub)
          }
          return total
        }, 0);
      }
    }
  }
</script>	

<style>
#chapter-list-container .ps {
  height: 80vh;
}
.menu-btn{
  text-align: right;
  margin-right: 1em;
}
</style>