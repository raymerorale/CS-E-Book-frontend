<template>
	<v-navigation-drawer
		id="chapter-list-container"
	  	dark
      width="340"
      height="100vh"
      absolute
      v-model="drawer"
  	>
    <br><br>
    <br v-if="!$store.getters.BACKEND">
    <div class="menu-btn d-block d-md-none">
      <v-btn icon @click="willClose">
          <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
    <v-progress-linear
      v-if="$store.getters.BACKEND"
      :value="progress"
      height="30"
    >
      <strong>{{ progress }}%</strong>
    </v-progress-linear>
  	<perfect-scrollbar>
      <list-container 
        :status="status"
        :nodes="chaptersList"
      />
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
  computed: {
    chaptersList() {
      return this.$store.getters.chapters.map((v, i) => {
        v.active = i === 0 ? true : false;
        return v
      })
    },
    progress() {
      const TOTAL_READ = this.getTotalRead(this.chaptersList)
      const TOTAL_PAGES = this.getTotalPages(this.chaptersList)

      return Math.ceil((TOTAL_READ / TOTAL_PAGES) * 100)
    }
  },
  props:{
    toggle: Boolean,
    status: Object
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
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    willClose() {
      this.drawer = false
    },
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
        if (chapter.read_status && chapter.read_status === this.status.done) {
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
#chapter-list-container {
  z-index: 4;
}
#chapter-list-container .ps {
  height: 80vh;
}
.menu-btn{
  text-align: right;
  margin-right: 1em;
}
.v-progress-linear {
  margin-top: 13px;
}
</style>