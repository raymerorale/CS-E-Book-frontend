<template>
	<div>
		<v-app-bar height="60" fixed>
			<v-layout>
				<v-flex xs12 sm6 class="pl-4">
					<b> CS E-Book </b>
				</v-flex>
				<v-flex xs12 sm6 class="pr-5 text-right">
					{{ $store.getters.user.firstName }}
					{{ $store.getters.user.lastName }}
					<v-menu offset-y>
						<template v-slot:activator="{ on }">
							<v-icon large class="ml-5" v-on="on">mdi-account-circle</v-icon>
						</template>
						<v-list>
							<v-list-item
								v-for="(item, index) in userMenuItems"
								:key="index"
								@click.prevent="executeAction(item.method)"
							>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-flex>
			</v-layout>	
		</v-app-bar>
	</div>	
</template>	

<script>
export default {
	name: 'PageHeader',
	data: () => ({
		 userMenuItems: [
			{ title: 'Profile', method: '' },
			{ title: 'Logout', method: 'logout' },
		],
	}),
	methods: {
		executeAction (method) {
			this[method]()
		},
		profile () {
			console.log('user profile')
		},
		logout () {
			localStorage.removeItem('user')
			this.$router.replace('/')
		}
	}
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