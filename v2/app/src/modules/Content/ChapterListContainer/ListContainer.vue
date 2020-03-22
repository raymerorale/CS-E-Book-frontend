<template>
    <v-list>
      <template v-for='node in nodes'>
          <v-list-group
            class="pl-5"
            v-if='node.sub && node.sub.length'
            v-model='node.active'

          >
            <v-list-item :class="[ (node.title.includes('Chapter') ? 'chapter-title' : node.sub && node.sub.length ? 'has-children' : '') ]" @click='changeContentView(node)' slot='activator'>
                <v-list-item>
                  <v-list-item-title> {{ node.title }} </v-list-item-title>
                </v-list-item>  
            </v-list-item>
            <list-container class='py-0 pl-3' :nodes='node.sub'/>
          </v-list-group>
          <v-list-item @click='changeContentView(node)' v-else>
              <v-list-item>
                <v-list-item-title> {{ node.title }} </v-list-item-title>
              </v-list-item>
          </v-list-item>
      </template>
    </v-list>
</template>
<script>
import ListContainer from './'
import { bus } from '@/main.js'

export default {
	name: 'ListContainer',
  components: {
    ListContainer
  },
  props: [
    'nodes'
  ],
  methods: {
  	changeContentView (content) {
  		bus.$emit('changeContentView', content)
  	},
  }
}
</script>	

<style>
.v-list-item {
  min-height: 36px!important;
}
.chapter-title {
  margin-left: -36px!important;
}
.has-children {
  margin-left: -36px!important;
}
.v-list-item__content > .v-list-item__title {
	cursor: pointer!important;
}
.text-style{
  font-size: 10px !important;
}
</style>