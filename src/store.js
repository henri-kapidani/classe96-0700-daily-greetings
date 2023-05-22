import { reactive } from 'vue';

// restituisce
// {
// 	store: '{reactive object}'
// }
export const store = reactive({
	greetings: [
		{
			date: '20/05/2023',
			greet: 'ciao a tutti',
		},
		{
			date: '21/05/2023',
			greet: 'ci si vede',
		},
		{
			date: '22/05/2023',
			greet: 'Hello World!',
		},
	],
});



// questa versione restituisce direttamente l'oggetto reactive
// export default reactive({
// 	greetings: [
// 		{
// 			date: '20/05/2023',
// 			greet: 'ciao a tutti',
// 		},
// 		{
// 			date: '21/05/2023',
// 			greet: 'ci si vede',
// 		},
// 		{
// 			date: '22/05/2023',
// 			greet: 'Hello World!',
// 		},
// 	],
// });
