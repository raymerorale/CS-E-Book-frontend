<template>
	<div class="text-center">
		<v-btn fab small dark color="primary">
			<v-icon>mdi-menu-left</v-icon>
		</v-btn>
		<v-btn 
			:dark="!$store.getters.BACKEND || !isDisabled"
			:disabled="$store.getters.BACKEND && isDisabled"
			fab small color="primary" class="ml-4">
			<v-icon>mdi-menu-right</v-icon>
		</v-btn>
	</div>		
</template>	

<script>
export default {
	name: 'NavigationToolbar',
	props: [
		'status',
		'next_content_body'
	],
	computed: {
		isDisabled() {
			return this.$store.getters.BACKEND && this.next_content_body.read_status && this.next_content_body.read_status === this.status.disabled
		}
	}
}
</script>