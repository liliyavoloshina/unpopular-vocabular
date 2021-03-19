<template>
	<b-navbar centered type="is-dark">
		<template #brand>
			<b-navbar-item tag="router-link" :to="{name: 'Home'}">
				<img
					src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
					alt="Lightweight UI components for Vue.js based on Bulma"
				/>
			</b-navbar-item>
		</template>
		<template #start>
			<b-navbar-item tag="router-link" :to="{name: 'Words'}" href="#" class="is-dark">
				Words
			</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{name: 'NewWord'}" href="#">
				New
			</b-navbar-item>
			<b-navbar-dropdown label="Info">
				<b-navbar-item href="#">
					About
				</b-navbar-item>
				<b-navbar-item href="#">
					Contact
				</b-navbar-item>
			</b-navbar-dropdown>
		</template>
	</b-navbar>
</template>
