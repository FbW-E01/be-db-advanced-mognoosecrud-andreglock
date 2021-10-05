import { Connect, Disconnect } from "./connection.js";
import { User } from "./user.js"

const userOne = {
    email: "joel@example.com",
    password: "p0potato",
    role: "User"
}

const userTwo = {
    email: "linda@example.com",
    password: "cucumber",
    role: "Admin"
}

const userThree = {
    email: "mongo@example.com",
    password: "password",
    role: "Editor"
}

await Connect("exampledb");
await User.create(userOne);
await User.create(userTwo);
await User.create(userThree);

Disconnect();
