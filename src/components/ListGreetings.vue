<script>
import DailyGreet from './DailyGreet.vue';
import { store } from '../store';
// import store from '../store';

export default {
	data() {
		return {
			store,
		};
	},
	components: {
		DailyGreet,
	},
	// props: {
	// 	greetings: Array,
	// },
};
</script>

<template>
	<ul>
		<li v-for="greeting in store.greetings" :key="greeting.greet">
			<DailyGreet :date="greeting.date" :dailyGreet="greeting.greet" />
		</li>
	</ul>
</template>

<style></style>
