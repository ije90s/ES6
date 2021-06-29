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