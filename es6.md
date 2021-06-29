1. Arrow Functions 
- 기존 function 개선 
- "=>"를 이용해서 코드를 용이성↑
예) const hearts2 = names.map(item => {
    return item+"♡";
});
- implicit return : 같은 줄에 뭘 적던지 간에 return 
예) const hearts = names.map(item => item+"♡"); 
- this 키워드 이벤트할 수 없음(window 가르킴) > 밖에서도 window 참조

2. Arrow Function 활용(Arrays) 
- find : 제공되는 테스트 조건을 만족하는 첫번째 엘리먼트 값을 리턴하는 함수
예) const foundMail = email.find(item => true);
const foundMail = email.find(item => item.includes("@gmail.com")); 
- filter : 제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 array를 만듬
예) const noGmail = email.filter(potoato => !potoato.includes("@gmail"));
- map : forEach지만 반환된 element들도 새로운 array를 만듬 
예) const cleaned = email.map(a => a.split("@")[0]);
- implicit return은 {}을 쓰면 사용하지 못하고 ()을 같이 쓰면 Object도 리턴 가능
예) const cleaned = email.map((a,index) => *({
    username : a.split("@")[0], 
    index // == index : index
})); 

3. Default Value
- string, number, array 등의 모든 데이터 타입 지정 가능 
예) const sayHi = (aName = "anyone") => "hello "+ aName;  

4. template literal 
- string을 연결 시 [+,"]로 쓰기 때문에 문장이 길어지고 지저분해짐 >> 이걸 개선하기 위해 나옴 
- 연결하려고 하는 string들의 시작과 끝에 `를 명시, 받은 데이터는 ${}안에 넣어서 데이터 출력 
예) const sayHi = (aName = "anyone") => `hello ${aName}`
- ${} : 표현식도 가능 예) 60*1000

5. html fragments 
- html을 추가할 때도 간편하게 `를 이용해서 html 추가 가능 
예) const addWelcome = () =>{
    const div = `
    <div class="hello">
        <h1 class="title">Hello</h1>
    </div>
    `;
    wrapper.innerHTML = div;
}
- ``사이에 줄바꿈도 인식 

6. styled components 
- 리액트를 위한 라이브러리 
- literal template를 이용하여 해당되는 태그에 css를 한꺼번에 적용 가능 
- ()를 입력하지 않고도 ``만으로도 함수 실행 가능하며, function안에 function을 적용해서 css 적용 
예) const styled = (aElement) => {
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

7. String Improvements 
- include : 찾고 싶은 문자가 있는지 확인 
- repeat : 원하는 글자 반복 
- startWidth : 시작 단어 확인용. 
- endsWidth : 끝 단어 확인용. 주로 이메일에서 .com있는지 유효성 검사 

8. Array Improvements 
- Array.of : 값만으로 배열을 만듬. 값이 많을 때 유용 
예) const friends2 = Array.of("nico", "lynn", "dal", "mark"); 
- Array.form : array-like object를 array로 반환 
예) const buttons = document.querySelectorAll("button"); //array가 아님. array-like object 예) HTML COLLECTION  
Array.from(buttons).forEach(button =>{ //forEach 함수가 되지 않음
    button.addEventListener("click", () => console.log("I ve been clicked"));
});
- Array.find : 조건에 맞으면, 첫번째 값을 리턴 
- Array.findIndex : 인덱스 반환 
- Array.fill : start와 end까지 원하는 string으로 채움 

