
# What To Do
Learning Javascript Cloning and Customizing Chrome Extension; Momentum
## Javascript 
### 1. Usage

#### 0) 파일 실행 특징
js 파일은 body 태그 가장 아래에 업로드. script 태그로 감싼다.
파일을 위에서 아래로 읽는다. n번째 줄에서 오류가 발생하면 n-1까지 실행하고 그 뒤로는 오류 코드만 띄운 뒤 실행하지 않는다. 

#### 1) Data type
- int
- float
- str
- boolean
- null
    - 아무것도 없다는 뜻이다. false가 아니다. **의도적으로** 변수 안에 아무것도 없다는 것을 정하기 위해서 사용한다. 
- undefined(다른 언어에는 없는 듯 하다)
    - 변수에 값을 지정하지 않은 상태이다. 컴퓨터 메모리(공간)에는 존재하지만, 값이 없는 것.

#### 2) Console.log
console.log(data | operation)

#### 3) Variable
효율성을 위해서 변수를 사용 
const를 기본, 바꿀 변수는 let(원래는 var을 사용했었음)

const (상수_바뀌지 않는 값) 변수 이름 = 변수 값;
- 절대 바뀌지 말아야 하는 변수의 값을 설정할 때 사용한다. 
- 코드의 의도를 담고 있는 상태
만약 const로 설정된 변수의 값을 바꾸려고 하면? 
<span style="background-color:#FFE6E6">TypeError: Assignment to constant variable.</span> 라는 에러가 발생한다

let 변수 이름 = 변수 값;
- const는 값이 변하지 않는 상수로 설정된다. let은 변할 수 있는 변수로 설정된다. 
var 변수 이름 = 변수 값;

변수 이름을 정하는 규칙
- 단어 사이에 띄어쓰기가 필요하다면 대문자를 사용한다. like this veryLongVariableName(camelCase)
#### 4) Array
const 변수 이름 = [데이터 | 변수]
배열에 데이터 추가
- 변수 이름.push(추가할 데이터) 함수 사용

#### 5) Object
특성이 있는 값을 넣고 싶을 때. 
const 변수 이름 = {property : value, property2 : value......}
property 자체의 값을 수정은 가능
const는 object 자체의 변경은 불가능하지만, 그 안에 있는 property 값은 수정이 가능하다
수정
변수이름.property = 새로운 값 형태로
새로운 property를 만들기
변수이름.새로운property이름 = 새로운 값 

#### 6) Fucntion
func은 계속 사용할 수 있는 코드 조각
function functionName(parameter, parameter2, parameter3) {
    console.log.................; <!-- 세미콜론 잊지 말고 넣어줘야 한다 -->
}

#### 7) Function in object

```javascript
const player = {
    name: "jason",
    sayHello: function(otherPersonName) {
        console.log("say hello to " + otherPersonName)
    }
}
```
#### 8) Function and return
function을 통해 작업 실행 이후 특정 값을 받아 다른 작업을 하고 싶을 때 return으로 결과를 반환하면 된다. 
return 이후는 function이 종료된다.
반환된 값은 변수로 넣어줘도 된다. 
변수를 브라우저에서 작동시키면? 결과값이 나오게 된다. 

#### 9) conditionals

```javascript
console.log(typeof age) //특정 변수의 타입을 확인하는 방법1
console.log(typeof(age)) //특정 변수의 타입을 확인하는 방법2
prompt() // 창을 띄워서 무엇인가를 입력하도록 한다. very old old old way to ask something from user.
isNaN() // 숫자가 아닌지를 bool 값 반환으로 알려준다
parseInt() //str을 숫자로 바꿔준다
```

```javascript
const age = parseInt(prompt("how old are you?")); 

if (isNaN(age) === true){
    alert("put a number, not a string");
}else if (age <= 19) {
    console.log("get away");
}else {
    console.log("you can stay")
}
/* 궁금증. 여기서 else는 else if의 else일까? 아니면 if의 else일까? 
답변. else 문은 else if가 false일때 실행된다. 그러므로 else if의 else이다. */
```
&& 는 and와 같은 의미
|| 는 or과 같은 의미
= 는 할당
=== 같은지 여부
!== 다른지 여부

## Momentum(chrome extension) cloning and customizing

### Log in - remember the user
### Build Clock
### Geolocation-Weather, Location
### Change the background
### Random Quote
### To-do list