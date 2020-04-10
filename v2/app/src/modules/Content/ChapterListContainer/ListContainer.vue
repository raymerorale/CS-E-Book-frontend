<template>
    <v-list>
      <template v-for='(node, index) in nodes'>
          <v-list-group
            :disabled="$store.getters.PROGRESS && node.read_status === status.disabled"
            :inactive="$store.getters.PROGRESS && node.read_status === status.disabled"
            class="pl-5"
            :key="node.title"
            v-if='node.sub && node.sub.length'
            v-model='node.active'
          >
            <v-list-item 
              :disabled="$store.getters.PROGRESS && node.read_status === status.disabled"
              :inactive="$store.getters.PROGRESS && node.read_status === status.disabled"
              :class="[ (node.title.includes('Chapter') ? 'chapter-title' : node.sub && node.sub.length ? 'has-children' : '') ]" 
              @click='changeContentView(node, index)' slot='activator'>
                <v-list-item :disabled="$store.getters.PROGRESS && node.read_status === status.disabled">
                  <v-list-item-title> {{ node.chapterId }} {{ node.title }} </v-list-item-title>
                  <!-- <v-list-item-title> {{ node.title }} </v-list-item-title> -->
                </v-list-item>  
            </v-list-item>
            <list-container 
              class='py-0 pl-3' 
              :status="status"
              :nodes='node.sub'
              :parent_nodes="nodes"
              :parent_index="index"
              />
          </v-list-group>
          <v-list-item 
            :disabled="$store.getters.PROGRESS && node.read_status === status.disabled"
            :inactive="$store.getters.PROGRESS && node.read_status === status.disabled"
            :key="node.title"
            @click='changeContentView(node, index)' v-else>
              <v-list-item :disabled="$store.getters.PROGRESS && node.read_status === status.disabled">
                <v-list-item-title> {{ node.chapterId }} {{ node.title }} </v-list-item-title>
                <!-- <v-list-item-title> {{ node.title }} </v-list-item-title> -->
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
    'status',
    'nodes',
    'parent_nodes',
    'parent_index'
  ],
  methods: {
  	changeContentView (content, index) {
      let next = this.nodes[index + 1]
      if (content && content.sub && content.sub.length > 0) {
        next = content.sub[0]
      }
      if (!next) {
        next = this.parent_nodes[this.parent_index + 1]
      }
  		bus.$emit('changeContentView', { content, next })
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