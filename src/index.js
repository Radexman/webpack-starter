import message from './message';
import './css/style.css';

console.log(message.text);

const fruits = ['mango', 'strawberry', 'apple'];

const addFruit = (fruit) => fruits.push(fruit);

addFruit('banana');

console.log(fruits);
