-#web
 +# web
  
 -### atom설치
 +### brackets설치
  
 -> file> setting> install에서 검색 및 install(설치)
 +> brackets.io
  
  1. emmet
 -2. open in browsers
 -3. autocomplet path
 -4. markdown preview plus
 +2. custom tabs
 +3. w3c validation
 +4. color maker
 +5. indent guide
 +6. beautify
 +7. markdown preview
 +___
 +
 +## html
 +
 +> h, p, span, a, img, div, br, table, ul, ol, li, dl, dt, dd, td, th, tr, input, form, select, button, fieldset, legend, 
 +
 +> target, submit, reset, src, href, class, id, .........
 +
 +___
 +1. h1 ~ h6 (제목:h1제일중요 , 1번사용 가능)
 +1. p (문단)
 +1. br (줄바꿈)
 +1. hr (라인:영역나누기/ 화제의 전환)
 +1. span (의미없는 영역/ 인라인태그)
 +1. a (앵커태그/ 링크 ) : href="링크" target="_blank | _self"
 +1. img (이미지) : src="이미지" alt="이미지 설명"
 +1. div (그룹)
 +1. list(ul, ol, dl)
 +	- ul (순서 x)
 +		- li
 +	- ol (순서 o)
 +		- li
 +	- dl (데이터  제목/내용)
 +		- dt
 +		- dd
 +1. table (표) :summary="상세 설명"
 +	- caption(표제목)
 +	- tr(행)
 +	- th(셀제목) colspan | rowspan
 +	- td(셀내용) colspan | rowspan
 +	- thead
 +	- tbody
 +	- tfoot
 +	- 속성: scope, row, col
 +1. form(입출력가능한 기능): action="" method="get | post"
 +	-	legend
 +		- fieldset
 +	- input : type(형태) , name(서버와 연동 이름) , id(+label for연동), value(값)
 +		- text: maxlength="10" 
 +		- password: maxlength="10" 
 +		- radio: checkd="checked"
 +		- checkbox: checkd="checked"
 +		- submit
 +		- reset
 +		- button
 +		- file
 +		- image: src alt
 +	- textarea: name id cols rows readonly="readonly"
 +	- select: name id 
 +		- optgroup: label
 +		- option: value
 +	- button: type="submit | reset | button"
 +	- label: for
 +	___
 +
 +
 +
 +
 +
 +
 +
 +
 +
 +
  
 -### list
 -> ul, ol, dl
 -> ul> li
 -> ol>li
 -> dl> dt, dd
  
 -<!--  -->
View 0  ...y/step_01_html_basic/dsay_04_01_form.html → study/step_01_html_basic/day_04_01_form.html
File renamed without changes.
View 94  study/step_01_html_basic/day_05_01_form.html
@@ -0,0 +1,94 @@
 +<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 +<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
 +<head>
 +	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
 +	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
 +	<title>Document</title>
 +	<style type="text/css">
 +		.point::before{content:"!"; color:#fa0;}
 +		.point::after{content:"*"; color:#f00;}
 +		
 +	</style>
 +	<script type="text/javascript"></script>
 +</head>
 +<body>
 +	<div id="wrap">
 +		<h1>form_2</h1>
 +		<form action="#" method="post">
 +			<fieldset id="member">
 +				<legend>폼 영역의 제목</legend>
 +				<label for="user" class="point">아이디 입력</label>
 +				<input type="text" name="user" id="user" value="" /><br />
 +				<label for="pwd">비밀번호 입력</label>
 +				<input type="password" name="pwd" id="pwd" value="" />
 +			</fieldset><!--// #member-->
 +			<fieldset id="selectBox">
 +			<legend>선택</legend>
 +				<input type="radio" name="sel_01" id="ra_01" value="" />
 +				<label for="ra_01">선택1</label>
 +				<input type="radio" name="sel_01" id="ra_02" value="" />
 +				<label for="ra_01">선택2</label>
 +				<input type="radio" name="sel_01" id="ra_03" value="" />
 +				<label for="ra_01">선택3</label>
 +				
 +				<hr />
 +				<label>
 +					<input type="checkbox" name="sel_02" value="" />
 +					암묵적 스타일1
 +				</label>
 +				<label for="ck_02">정식 방법</label>
 +				<input type="checkbox" name="sel_02" id="ck_02" value="" />
 +				
 +				<label for="ck_03">정식 방법</label>
 +				<input type="checkbox" name="sel_02" id="ck_03" value="" />
 +			</fieldset>
 +			<fieldset>
 +			<legend>버튼</legend>
 +				<input type="submit" name="ok" value="ok" id="ok">
 +				<input type="reset" name="calcle" value="calcle" id="calcle">
 +				<input type="button" name="btn" value="btn" id="btn">
 +				<input type="image" src="./img/table/50x50_am_01.png" name="" />
 +				<input type="file" name="fileData" value="" id="fileData" />
 +			</fieldset>
 +			
 +			<fieldset id="etc">
 +				<legend>기타기능</legend>
 +				<textarea name="" id="" cols="30" rows="10" readonly="readonly">
 +입력할수 있는 대화창
 +줄바꿈과,               스페이스
 +탭기능 		모두 적용
 +				</textarea>
 +				<select name="sendSelect" id="sendSelect">
 +					<option>선택하세요</option>
 +					<optgroup label="피복류">
 +						<option value="hat">모자</option>
 +						<option value="glove">장갑</option>
 +						<option value="sax">양말</option>
 +					</optgroup>
 +					<optgroup label="악세서리">
 +						<option value="ring">반지</option>
 +						<option value="earing">귀걸이</option>
 +					</optgroup>
 +					<optgroup label="가전제품">
 +						<option value="라디오">라디오</option>
 +					</optgroup>
 +				</select>
 +				<button type="button">
 +					<img src="./img/table/27x27_am_01.png" alt="이미지 버튼만들기" />
 +				</button>
 +			</fieldset>
 +		</form>
 +		
 +
 +		
 +		
 +		
 +		
 +		
 +		
 +		
 +		
 +		
 +	</div>
 +</body>
 +</html>