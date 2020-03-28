<template>
	<div class="text-center">
		<v-btn fab small dark color="primary">
			<v-icon>mdi-menu-left</v-icon>
		</v-btn>
		<v-btn 
			:dark="!$store.getters.PROGRESS || !isDisabled"
			:disabled="$store.getters.PROGRESS && isDisabled"
			fab small color="primary" class="ml-4">
			<v-icon>mdi-menu-right</v-icon>
		</v-btn>
	</div>		
</template>	

<script>
export default {
	name: 'NavigationToolbar',
	props: [
		'next_content_body'
	],
	computed: {
		isDisabled() {
			return this.$store.getters.PROGRESS && this.next_content_body.read_status && this.next_content_body.read_status === 'Disabled'
		}
	}
}
</script>