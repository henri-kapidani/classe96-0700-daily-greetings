<script>
export default {
	props: {
		date: {
			type: String,
			required: true,
		},
		dailyGreet: {
			type: String,
			default: 'hello',
			required: false,
		},
	},
};
</script>

<template>
	<div class="greet">
		<span class="red">Saluto</span> del giorno {{ date }}: {{ dailyGreet }}
	</div>
</template>

<style scoped>
.greet {
	padding: 1rem;
}
</style>
