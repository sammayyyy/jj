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
 
 ```
 