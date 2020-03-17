<template>
	<div>
		<v-card
			class="main-header-container"
			height="60px"
		>
			<b>Logo</b>
		</v-card>
		<v-card
			class="subheader-container"
			height="40px"
		>
			<b>COE123 - ASSEMBLY</b>
		</v-card>
	</div>	
</template>	

<script>
export default {
	name: 'PageHeader'
}
</script>

<style>
.v-card.main-header-container {
	font-size:2rem;
}
.v-card.subheader-container {
	background-color: orange!important;
}
</style>