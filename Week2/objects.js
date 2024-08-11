let user = {
    name: "Bhabesh",
    age: 21,
    gender: "Male",
    hobbies: ["Coding", "Reading", "Watching Movies"],
    address: {
        city: "Delhi",
        state: "Delhi",
        pincode: 110075
    }
}
console.log(user.name);
console.log(user.address.state);
user.hobbies.push("Travelling");
user.hobbies.push("Cooking");
console.log(user.hobbies);