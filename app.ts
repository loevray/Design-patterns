import singletonWithModule from "./singleton/singletonWithModule.js";
import counter1 from "./module/counter.js";
import counter2 from "./module/counter.js";
import { deliver } from "./factoryMethod/factoryMethod.js";

/* singleton */

console.log(singletonWithModule.getInstance()); //Singleton{}

/* module */

counter1.inc();
console.log(counter1.value); //1

counter2.inc();
console.log(counter2.value); //2

console.log(counter1.value, counter2.value); //2 2

console.log(Object.is(counter1, counter2)); //true

/* factory method */

deliver('Truck'); // Delivering a Truck...
deliver('Airplane'); // Delivering a Airplane...
