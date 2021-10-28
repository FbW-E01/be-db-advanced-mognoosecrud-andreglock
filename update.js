import { Connect, Disconnect } from "./connection.js";
import { User } from "./user.js";

await Connect("exampledb");

const userToUpdate = await User.findOne({ email: "linda@example.com" });

console.log(userToUpdate);

if (userToUpdate) {
    userToUpdate.email = "linda@updated.com";
    await userToUpdate.save();
}

Disconnect();


