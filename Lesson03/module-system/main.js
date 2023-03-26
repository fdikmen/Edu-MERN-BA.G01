console.log("Hello from main.js");

/*
import carpTEST,{sumNum as toplaNum,divNum} from "./mathModule.js";
console.log("SUM: ", toplaNum(2, 3));
console.log("DIV: ", divNum(2, 3));
console.log("CARP: ", carpTEST(2, 3));
*/

import * as mathLib from "./mathModule.js";
console.log("SUM: ", mathLib.sumNum(2, 3));
console.log("DIV: ", mathLib.divNum(2, 3));
console.log("CARP: ",mathLib.default(2, 3));


