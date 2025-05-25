import {Male} from "./male.js";

class BoyStudent extends Male {}
// Gọi ra đối tượng Person
const result = new BoyStudent("Viet", 22, 'quynh');

result.setName("Viet");
result.setGirlFriend('duc')
console.log(result.getGirlFriend('duc'))