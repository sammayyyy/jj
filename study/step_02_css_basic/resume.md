-#web
# web

### atom설치
### brackets설치

> file> setting> install에서 검색 및 install(설치)
> brackets.io

1. emmet
2. open in browsers
3. autocomplet path
4. markdown preview plus
2. custom tabs
3. w3c validation
4. color maker
5. indent guide
6. beautify
7. markdown preview
___

## html

> h, p, span, a, img, div, br, table, ul, ol, li, dl, dt, dd, td, th, tr, input, form, select, button, fieldset, legend, 

> target, submit, reset, src, href, class, id, .........

___
1. h1 ~ h6 (제목:h1제일중요 , 1번사용 가능)
1. p (문단)
1. br (줄바꿈)
1. hr (라인:영역나누기/ 화제의 전환)
1. span (의미없는 영역/ 인라인태그)
1. a (앵커태그/ 링크 ) : href="링크" target="_blank | _self"
1. img (이미지) : src="이미지" alt="이미지 설명"
1. div (그룹)
1. list(ul, ol, dl)
	- ul (순서 x)
		- li
	- ol (순서 o)
		- li
	- dl (데이터  제목/내용)
		- dt
		- dd
1. table (표) :summary="상세 설명"
	- caption(표제목)
	- tr(행)
	- th(셀제목) colspan | rowspan
	- td(셀내용) colspan | rowspan
	- thead
	- tbody
	- tfoot
	- 속성: scope, row, col
1. form(입출력가능한 기능): action="" method="get | post"
	-	legend
		- fieldset
	- input : type(형태) , name(서버와 연동 이름) , id(+label for연동), value(값)
		- text: maxlength="10" 
		- password: maxlength="10" 
		- radio: checkd="checked"
		- checkbox: checkd="checked"
		- submit
		- reset
		- button
		- file
		- image: src alt
	- textarea: name id cols rows readonly="readonly"
	- select: name id 
		- optgroup: label
		- option: value
	- button: type="submit | reset | button"
	- label: for
	___


  
 -### list
 -> ul, ol, dl
 -> ul> li
 -> ol>li
 -> dl> dt, dd
 
-<!--  -->
 line-height: 행간(줄간격)을 박스의 높이값 만큼 똑같이작성하면, 
해당하는 텍스의 위치는 수직정력의 가운데 배치가 된다.
(단, 한줄만 해당!!!)- 엄밀히 말하면 편법
- display: 각자 존재하는 element들의 고유 형태(inline, block)에 따라서, 디자인되는 모양이나, 위치가 변동될 수 있다.
하지만 inline형식이 block형식으로 변환되거나 그 반대상황으로 되어야할 경우가 있을때에는 강제 변환시키는 기능이 필요하다. 이 기능이 display속성이다.
	* inline; 크기값이 존재하지 않고, 줄바꿈이 일어나는 현상으로 치환
	* block; 크기가 존재하고, 줄바꿈이 일어나지 않는 현삭으로 치환
	* none; 존재자체가 사라지게 만드는(공간조차 없어지는) 속성값
- visibility: display 속성과 유사하지만 조금 다른성격이 있다.(block, none)
	* visible; display:block;or display:inline; 처럼 보이는 속성값
	* hidden; display:none;처럼 존재자체를 없애버리는 효과
	(단, 위치하던 자리는 흔적이 남는다.)
___
## RESET.CSS
 브라우저 마다 각기 다른 여백, 라인두께 등의 기능들이 내제되어있다.
> 브라우저 마다 각기 다른 여백, 라인두께 등의 기능들이 내제되어있다.
 이에 모든 브라우저를 똑같은 환경으로 설정하는것! Reset.css
 (하지만, ie8이하와 같은 구형브라우저에서는 reset.css의 단일기능만으로는 같은형태를 잡기가 쉽지 않다. 
 이에 hack이라고하는 별도의 기능을 사용하게 되어있다.!)

```
#box{width:300px;  _width:300px; *width:300px; } /* hack */
 ```
#box{width:300px;  _width:300px; *width:300px; }

> 모든 브라우에서 저마다 생기는 여백, 기타다향한 형태를 최초 설정시에는 *기호를 붙여 margin:0; padding:0; 이라는 속성을 만든다.
(*의 뜻은 모든 element를 지칭한다.)
 
 ```
*{marign:0; pad
```


>레이아웃디자인작업시 여러개의 반복모양이 나타난다면 list를 사용하는데
list 모양은 앞에 불릿기호들이 항상 존재하고있다.(ul,ol,li)
그래서 불릿기호를 삭제처리하려면 해당하는 스타일의 속성을 none시킨다.

```
ul,ol,li{list-style:none;}/* list-style*/

``
 css 이해
## css란? 
html 마크업되어져있는 내용(구조)을 꾸며주는 기능
id => #
class => .
>id => # |
class => .  

```
<style type="text/css">
@ -53,23 +53,23 @@ ___
___
## RESET.CSS
> 브라우저 마다 각기 다른 여백, 라인두께 등의 기능들이 내제되어있다.
이에 모든 브라우저를 똑같은 환경으로 설정하는것! Reset.css
이에 모든 브라우저를 똑같은 환경으로 설정하는것! __Reset.css__
(하지만, ie8이하와 같은 구형브라우저에서는 reset.css의 단일기능만으로는 같은형태를 잡기가 쉽지 않다. 
이에 hack이라고하는 별도의 기능을 사용하게 되어있다.!)

```
#box{width:300px;  _width:300px; *width:300px; } /* hack */
#box{width:300px;  _width:300px; *width:300px; } // hack 
```

> 모든 브라우에서 저마다 생기는 여백, 기타다향한 형태를 최초 설정시에는 *기호를 붙여 margin:0; padding:0; 이라는 속성을 만든다.
(*의 뜻은 모든 element를 지칭한다.)

```
*{marign:0; pad
*{marign:0; padding:0;}
```


>레이아웃디자인작업시 여러개의 반복모양이 나타난다면 list를 사용하는데
> 레이아웃디자인작업시 여러개의 반복모양이 나타난다면 list를 사용하는데
list 모양은 앞에 불릿기호들이 항상 존재하고있다.(ul,ol,li)
그래서 불릿기호를 삭제처리하려면 해당하는 스타일의 속성을 none시킨다.

@ -80,7 +80,23 @@ ul,ol,li{list-style:none;}/* list-style*/

___

## margin, padding, border, outline
![mpbo](./img/readme/mpbo.jpg)

### margin
> 여백(공간이 생겨서 배경 보인다!)

### padding
> 뼈는 그대로있고 살이 붙는다 배경이 안보인다 

### border
> 외곽선이다 

### outline
>크기는있다 부피는 없다(접근성때 사용)
___
## background

___
## font
> font-weight : 굵기 nomal, right, thi, bold, bolder 서체자체에서 굵기가없으면 안먹을수도 있다.
> font-style : 기울기 italic
> font-size : 16px=12pt=100%=1em=1rem(기준)
> line-height : 줄간격 한글만빼고 모든 120%
> font-family : 서체설정 영어("myriad pro","gill san",arial) > 한글("나눔고딕",dotum,sans-serif,setif)
 ---
> font : {굵기 기울기 크기 / 행간 서체명(font-family를 한칸으로 쭐이기)}
> text-decoration : underline overline none
> letter-spacing : 자간(글자와 글자사이간격) 0:기본-값 줄어듬
> word-spacing : 어간(단어와 단어사이간격)
> font-stretch:장평,

##position
> static : 기본
> fixed : 고정 예:장바구니,스티커 > (absolute줄수있다) 
    화면상 가운데주기 #box{position:fixed; z-index:1000; top:50%; left:50%; margin-left:-250px; margin-top:-100px;}
> absolute(아들): 제한공간을 갖고 위치이동
> relative(엄마): absolute를 만들어 주는것

##z-index : 100;(단위값을 못갖는다. 100단위로줘라)
> tom, left, right, bottom
