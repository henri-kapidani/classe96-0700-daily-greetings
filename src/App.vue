<script>
// import DailyGreet from './components/DailyGreet.vue';
import ListGreetings from './components/ListGreetings.vue';

export default {
	components: {
		// DailyGreet,
		ListGreetings,
	},
};
</script>

<template>
	<h1 class="red">Saluti dei giorni</h1>

	<ListGreetings />

	<!-- <DailyGreet
		v-for="greeting in greetings"
		:key="greeting.greet"
		:date="greeting.date"
		:dailyGreet="greeting.greet"
		class="card"
	/> -->

	<h2>Perchè questa pagina?</h2>
	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, delectus
		laborum accusamus aut nostrum praesentium neque earum quo ullam amet
		corporis sunt facilis? Aspernatur ut possimus quo voluptate perferendis
		cupiditate. Velit repellat deserunt assumenda mollitia suscipit, vero
		reiciendis illo ad soluta veritatis eos unde optio, alias corrupti vitae
		laudantium vel exercitationem! Esse dolore eveniet expedita, cum quia
		numquam porro eos. Ipsum cupiditate eum quas corporis quae? Officiis
		aspernatur nostrum eum labore. Unde necessitatibus placeat praesentium
		pariatur, qui itaque dolor atque quidem labore repudiandae ipsam,
		cupiditate quod. Amet soluta iusto doloremque. Maiores quo reprehenderit
		velit temporibus reiciendis suscipit similique enim perferendis recusandae
		impedit odio sed nihil, nisi explicabo quas. Cum placeat autem omnis.
		Itaque vitae quis deleniti! Deserunt soluta nam ducimus. Atque explicabo
		minus velit dolorem quis fugiat dolorum maxime beatae sunt quos tenetur,
		obcaecati, fuga ab optio recusandae dicta sint dolores minima reiciendis
		maiores vel placeat. Sunt vero dolorem ut.
	</p>
</template>

<style scoped>
.card {
	margin-bottom: 2rem;
}
</style>
