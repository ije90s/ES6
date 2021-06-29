/*============================================
arrow function 
============================================*/
const names = ["nico", "lynn", "flynn"] ; 

const hearts = names.map(item => item+"♡"); 

const hearts2 = names.map(item => {
    return item+"♡";
});

//console.log(hearts); 
//console.log(hearts2); 

/*============================================
'this' in Arrow Functions 
============================================*/
const button = document.querySelector("button"); 

button.addEventListener("click", function() {
    console.log(this); //scope
    console.log("i have been clicked");
});

const nico ={
    name: "Nico",
    age : 24, 
    addYear(){
    //addYear : () =>{
        this.age++;
    }
}
//console.log(nico);
//nico.addYear(); 
//nico.addYear(); 
//console.log(nico);

/*============================================
Arrow Functions in Array Function  
============================================*/
const email = ["nico@no.com", "naver@google.com", "lynn@gmail.com", "nico@gmail.com"];

// const foundMail = email.find(item => true);
const foundMail = email.find(item => item.includes("@gmail.com")); 

//console.log(foundMail);

const noGmail = email.filter(potoato => !potoato.includes("@gmail"));

//console.log(noGmail);

email.forEach(a => {
    console.log(a.split("@")[0]); 
})

const cleaned = email.map((a,index) => ({
    username : a.split("@")[0], 
    index // == index : index
})); 

//console.log(cleaned);

/*============================================
Default Values
============================================*/
//function sayHi(aName = "anno"){
//    return "Hello "+ aName; 
//}
const DEFAULT = "DDD"; 
//const sayHi = (aName = DEFAULT) => "hello "+ aName; 
const sayHi = (aName = DEFAULT) => `hello ${aName}`; 
//console.log(sayHi());

/*============================================
html fragments
============================================*/
const wrapper = document.querySelector(".wrapper"); 

const addWelcome = () =>{
    const div = `
    <div class="hello">
        <h1 class="title">Hello</h1>
    </div>
    `;
    wrapper.innerHTML = div;
}

//setTimeout(addWelcome,5000);

const frineds = ["me", "lynn", "dal", "mark"];

const list = `
    <h1>People i love</h1>
    <ul>
        ${frineds.map(friend => `<li>${friend}</li>`).join("")}
    </ul>
    `;
//wrapper.innerHTML=list;

/*============================================
styled compoents
============================================*/
const styled = (aElement) => {
    const el = document.createElement(aElement); 
    return (args) => { //function안에 function 호출
        const styles = args[0];
        el.style=styles; //element style 
        return el;
    }; 
};

const title = styled("h1")`
    background-color: red;
    color:blue;
`; 

const subtitle = styled("span")`
    color: green;
`; 
title.innerText = "We just cloned"; 
subtitle.innerText = "Styled Components"; 

//document.body.append(title, subtitle);

/*============================================
String Improvements
============================================*/
const isEmail = (email) => email.includes("@"); 
//console.log(isEmail("nico@gmail.com"));

const CC_NUMBER = "6060";
const dispalyName = `${"*".repeat(10)}${CC_NUMBER}`;
//console.log(dispalyName);

const fullName = "Mr. Nicolas"; 
//console.log(fullName.endsWith("Mr")); 

/*===========================================
Array.from(), Array.of()
============================================*/
const friends2 = Array.of("nico", "lynn", "dal", "mark"); 
//console.log(friends2);

const buttons = document.querySelectorAll("button"); //array가 아님. array-like object 예) HTML COLLECTION  
Array.from(buttons).forEach(button =>{ //forEach 함수가 되지 않음
    button.addEventListener("click", () => console.log("I ve been clicked"));
});

/*===========================================
Array.find(), Array.findIndex(), Array.fill()
============================================*/

const firends3 = [
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com", 
    "mark@htmail.com", 
    "flynn@korea.com"
];

const target = firends3.findIndex(friend => friend.includes("@korea.com"));


firends3.fill("*".repeat(5), target);

console.log(firends3);


/*==============================
object destructuring
===============================*/
const settings = {
    //notification:{
        //follow: true, 
    //    alerts: true,
    //   unfollow: false  
    //},
    color: {
        theme: "dark"
    }
}

const {notification} = settings;
// const notification = settings.notification 
//console.log(notification);

const {notification: {follow = false} = {}} = settings; // notification 접근해서 follow만 가져오는 것뿐이지 notification을 가져오는 것이 X 
//console.log(follow);


/*==============================
array destructuring
===============================*/
//const days =  ["Mon", "Tue", "Wed", "Thu", "Sat", "Sun"]; 
//const [mon, tue, wed, thu = "Thu"] = days; 아래와 똑같이 값 반환 
//const days = () => ["Mon", "Tue", "Wed", "Thu", "Sat", "Sun"]; 
//const [mon, tue, wed, thu = "Thu"] = days();
//console.log(mon, tue, wed, thu); 

/*==============================
renaming
===============================*/
const settings2 = {
    color:{
        chosen_color : "dark"
    }
};

let chosenColor = "blue";
//console.log(chosenColor);
({color:{chosen_color : chosenColor = "light"}} = settings2); 
//console.log(chosenColor);

/*==============================
function destructuring
===============================*/
//function saveSettings({follow, alert, color="blue"}){
function saveSettings({notification, color:{theme}}){
    //console.log(theme); 
}

saveSettings({
//    color:"green"
    notification: {
        follow:true, 
        alert:true, 
        mkt:true
    }, 
    color :{
        theme: "blue"
    }
})

/*==============================
value shorthands(변수명 단축)
===============================*/
//const follow = checkFollow(); 
//const alert = checkAlert(); 

const settings4 ={
    notifications:{
        follow, // == follow: follow
        alert   // == alert: alert
    }
}

/*==============================
swapping and skipping
===============================*/
//let mon = "Sat"; 
//let sat = "Mon"; 

//[sat, mon] = [mon, sat]; 

//const days2 = ["mon", "tue", "wed", "thu", "fri"];
//const [,,,thu, fri] = days2;
//console.log(thu, fri);

/*==============================
Spread
===============================*/
const numbers = [1,2,3,4]; 
const alpabets = ["a", "b", "c"]; 
//console.log(numbers); 
//console.log([...numbers, ...alpabets]);

const a = {
    name : "nico", 
    age : 24
}; 
const hello ={
    name : "lynn", 
    hello : "hello"
}; 
//console.log({...a, ...hello});

const friends = ["nico", "lynn"]; 
const newFriends = ["dal", ...friends]; 
//console.log(newFriends);


const nico = {
    username : "nico"
}; 
//console.log({...nico, password:123});

const first = ["mon", "tue", "wed"]; 
const weekend = ["sat","sun"]; 
const fullWeek = [...first , "thu", "fri", ...weekend]; 
//console.log(fullWeek);

//const lastName = prompt("Last name"); 
const user = {
    username : "nico", 
    age : 24,
    ...(lastName !== "" && {lastName}) //spread로 전개하려면 데이터가 object여야 하므로 중괄호로 감쌈
    //lastName: lastName !== "" ? lastName : undefined
}; 
//console.log(user);
