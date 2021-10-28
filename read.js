import { Connect, Disconnect } from "./connection.js";
import { User } from "./user.js"


await Connect("exampledb");
const Users = await User.find();
Users.forEach(user => console.log(user));

Disconnect();