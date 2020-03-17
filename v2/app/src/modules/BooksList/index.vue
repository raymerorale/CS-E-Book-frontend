<template>
	<v-container>

		<h1>BooksList</h1>
		<v-spacer/>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card flat height="60px">
					<router-link to='content'>
					  1. <v-btn dark id="discreteBookBtn">Discrete</v-btn>
					</router-link>
				</v-card>
			</v-flex>
			<v-flex xs12>
				<v-card flat height="60px">
					<router-link to='content'>
					  2. <v-btn dark id="assemblyBookBtn">Assembly</v-btn>
					</router-link>
				</v-card>
			</v-flex>
			<v-flex xs12>
				<v-card flat height="60px">
					<router-link to='content'>
					  3. <v-btn dark id="cplusBookBtn">C++</v-btn>
					</router-link>
				</v-card>
			</v-flex>
		</v-layout>	
	</v-container>
</template>

<script>

</script>

<style>

</style>	