<template>
	<main class="login-page">
		<section class="login-intro">
			<img class="login-intro__image" src="../../assets/book-logo.png" alt="book logo" />
			<h1 class="login-intro__title">COMPUTER STUDENTS</h1>
			<h1 class="login-intro__subtitle">ONLINE LEARNING MATERIAL</h1>
		</section>
		<section class="login-form">
			<h1 class="login-form__text">Sign in to get started</h1>
			<div class="login-form__field">
				<v-icon class="person" />
				<v-text-field
					outlined
					dense
					hide-details
					label="Username"
				></v-text-field>
			</div>
			<div class="login-form__field">
				<v-icon class="person" />
				<v-text-field
					type="password"
					outlined
					dense
					hide-details
					label="Password"
				></v-text-field>
			</div>
			<div class="login-form__field">
				<v-btn 
					dark
					class="login-form__btn"
					@click="goToContent">
					LOG IN
				</v-btn>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	name: 'Login',
	mounted () {
		console.log('LOGIN ', this.$store.state.chapters)
	},
	methods: {
		goToContent() {
			this.$router.push('content')
		}
	}
}
</script>

<style scoped>
.login-page {
	display: flex;
	flex-direction: row;
	height: 100%;
}
.login-page > .login-intro {
	flex: 1;
	color: white;
	background-image: url('~@/assets/login-bg.jpg');
	background-size: cover;
	background-repeat: no-repeat;
}
.login-page > .login-form {
	flex: 0.7;
}
.login-page > .login-intro,
.login-page > .login-form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.login-intro__title {
	font-size: 2.3em;
}
.login-intro__subtitle {
	font-weight: lighter;
}
.login-form__field {
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-bottom: 20px;
	padding: 0 6vw;
}
.login-form__text {
	margin: 1em;
	font-weight: normal;
}
.login-form__field i {
	background-color: blue;
	color: white;
	width: 50px;
	font-size: 2em;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}
.login-form__field .v-input {
	margin-left: -5px;
	outline: 0;
}
.login-form__btn {
	width: 100%;
	color: white;
	background: linear-gradient(to right, #1d82e1 0%, #0d2a98 100%);
}

@media screen and (max-width: 768px) {
	.login-page {
		flex-direction: column;
	}	
	.login-intro__image {
		max-width: 200px;
	}
	.login-form__field {
		max-width: 600px;
	}
}

@media screen and (max-width: 425px) {
	.login-intro__image {
		width: 50%;
	}
	.login-intro__title {
		font-size: 8vw;
	}
	.login-intro__subtitle {
		font-size: 5vw;
	}
	.login-page > .login-form {
		flex: 1;
	}
	.login-form__text {
		margin-top: 0;
	}
}
</style>	

<style>
.login-form__field .v-text-field--outlined fieldset {
	border-left: 0!important;
}
</style>