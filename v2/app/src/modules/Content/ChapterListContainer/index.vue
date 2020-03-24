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