<template>
	<main class="login-page">
		<section class="login-intro">
			
			<h1 class="login-intro__title">COMPUTER STUDENTS</h1>
			<h1 class="login-intro__subtitle">ONLINE LEARNING MATERIAL</h1>
		</section>
		<section class="login-form">
			<img class="pa-3 pt-5 logo" src="../../assets/book-logo.png" alt="book logo" />
			<h1 class="login-form__text">Sign in to get started</h1>
			<div class="login-form__field">
				
				<v-text-field
					v-model="username"
					outlined
					dense
					hide-details
					label="Username"
				></v-text-field>
			</div>
			<div class="login-form__field">
				
				<v-text-field
					v-model="password"
					type="password"
					outlined
					dense
					hide-details
					label="Password"
					@keyup.enter="login"
				></v-text-field>
			</div>
			<div class="login-form__field">
				<v-btn 
					dark
					large
					class="login-form__btn"
					@click="login">
					LOG IN
				</v-btn>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			username: '',
			password: ''
		}
	},
	mounted () {
		console.log('LOGIN ', this.$store.state.chapters)
	},
	methods: {
		goToContent() {
			this.$router.push('content')
		},
		login() {
			if (this.$store.getters.BACKEND) {
				this.$store.dispatch('login', {
					username: this.username,
					password: this.password
				})
				.then(() => this.goToContent())
				.catch(() => alert('Invalid username or password'))
			} else {
				this.goToContent()
			}
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
	font-size: 2.5em;
	text-shadow: 3px 3px #4d4d4d;
}
.login-intro__subtitle {
	font-size: 1.5em;
	text-shadow: 2px 2px #4d4d4d;
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
}
.login-form__field .v-input {

}
.login-form__btn {
	width: 100%;
	font-weight: bold;
	font-size: 1.1em !important;
	text-shadow: 2px 2px #4d4d4d;
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
	.logo{
		display:none;
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

</style>