import { Connect, Disconnect } from "./connection.js";
import { User } from "./user.js";

await Connect("exampledb");

const userToDelete = await User.findOne({ email: "mongo@example.com" });

await User.deleteOne(userToDelete);

Disconnect();

