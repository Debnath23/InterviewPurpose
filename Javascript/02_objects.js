/* Singleton(Constructor) => Object.creat();*/ 

/* Object Literals*/

const mySymbol = Symbol("Key1");

const JsUser = {
    name: "Debnath",
    "Full name": "Debnath Mahapatra",
    age: 22,
    [mySymbol]: "myKey1",
    location: "Kolkata",
    email: "debnath@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]);
console.log(JsUser[mySymbol]);

JsUser.email = "debnath@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "debnath@microsoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser);

/* +++++++++++++++++++++++++++++++++++++++++++++++ */

/* const user = new Object(); */

const user = {};
user.name = "Debnath";
user.id = "123abc";
user.isLoggedIn = false;

console.log(user);

const regularUser = {
    email: "debnath@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Debnath",
            lastName: "Mahapatra"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);
console.log(regularUser.fullname?.userFullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

/* const obj3 = Object.assign({}, obj1, obj2, obj4); */

const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "denmath1@gmail.com"
    },
    {
        id: 2,
        email: "denmath2@gmail.com"
    },
    {
        id: 3,
        email: "denmath3@gmail.com"
    }
]

console.log(users[0].email);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));

console.log(user.hasOwnProperty('isLoggedIn'));
console.log(user.hasOwnProperty('isLogged'));

/* Object Destructure */

const course = {
    name: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course;

console.log(course.courseInstructor);
// console.log(courseInstructor);

console.log(instructor);

/* Object Destructure In React */

const navbar = ({company}) => {

}
navbar({company: "GOOGLE"});

/* API Call from JSON 

{
    "name": "Debnath",
    "courseName": "JavaScript",
    "price": "free"
}

[
    {},
    {},
    {}
] */