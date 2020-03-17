<template>
	<v-container>
		<v-row
			align="center"
      		justify="center"
      	>
      		<v-col>
      			<v-text-field
					label="Username"
					width="200px"
				/>
				<v-text-field
					label="Password"
					type="password"
					width="200px"
				/>
				<router-link
					to='books-list'
				>
				  	<v-btn
				  		dark
				  		id="logInBtn"
				  	>
						LOG IN
					</v-btn>
				</router-link>
			</v-col>
  		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'Login',
	mounted () {
		console.log('LOGIN ', this.$store.state.chapters)
	}
}
</script>

<style>

</style>	