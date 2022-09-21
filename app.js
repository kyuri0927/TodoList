var express = require('express'); 
var bodyParser = require('body-parser'); // body(본체) 분석하여 원하는대로 가공, post방식에 따라 콜백함수 호출
var fs = require('fs'); // 파일처리와 관련한 일을 하는 전반적인 모듈
var app = express();
app.use(bodyParser.urlencoded({extended: false}));  // bodyParser 사용-> app.use를 통해 bodyParser 모듈을 호출(공식)
app.use(bodyParser.json());
app.locals.pretty = true; // 코드를 예쁘게 해주는 코드

var TodoList = ['밥 먹기'] // TodoList들이 담길 공간 배열

app.set('views', './views'); //views 폴더에 views
app.set('view engine', 'pug'); //pug 템플릿 엔진 사용

app.get('/',(req,res) => { // 라우트 설정, '/'를 통하여 들어온 사람에게 렌더링
    res.render('view', {TodoListtitle: '오늘의 할 일: ' +TodoList.length, TodoList:TodoList}) // res.render: 웹페이지에 표시, 데이터이름표:전송할데이터
})

app.post('/add',(req,res) => { // add 서버만들기 bodyParser 사용
    var newcontent = req.body.content;
    console.log(newcontent + '추가');
    TodoList.push(newcontent);
    res.redirect('/'); // 메인페이지로 되돌아가기
})

app.listen(3000, function(){ // 3000번 포트에서 실행
        console.log('Connected, 3000 port!');  
})