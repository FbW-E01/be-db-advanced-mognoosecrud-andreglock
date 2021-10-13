import { Connect, Disconnect } from "./connection.js";
import { User } from "./user.js"

const users = [{
    email: "manuel@example.com",
    password: "p0potato",
    role: "User"
},
{
    email: "jose@example.com",
    password: "cucumber",
    role: "Admin"
},
{
    email: "joaquim@example.com",
    password: "password",
    role: "Editor"
}]

await Connect("exampledb");

console.log('one');

const promises = users.map(user => {
    return User.create(user);
})

// wait for all the promises to be completed
await Promise.all(promises)

/* await User.create(userOne);
await User.create(userTwo);
await User.create(userThree); */

Disconnect();
console.log('three');
