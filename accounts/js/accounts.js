const use_check = document.getElementsByClassName("use_check"),
    form_id = document.getElementsByClassName("form_id"),
    form_pw = document.getElementsByClassName("form_pw"),
    form_pw2 = document.getElementsByClassName("form_pw2"),
    form_email = document.getElementsByClassName("form_email");

let case1 = document.getElementsByClassName("case1");
let case2 = document.getElementsByClassName("case2");






function requirement(_index){   //유효성 목록 생성 
    use_check[_index].classList.add("show");
}




function id_check(_index){  //아이디 유효성 검사

    let id_length = form_id[0].value.length;
    if (id_length < 6){
        case1[_index].style.color="#b3130b";  //빨간색
        case1[_index].classList.add("bad");
        case1[_index].classList.remove("good");
    }
    else{
        case1[_index].style.color="#0f851a";  //초록색
        case1[_index].classList.add("good");
        case1[_index].classList.remove("bad");
    }
}




function pw_check(_index){  //비밀번호 유효성 검사
    let pw_length = form_pw[0].value.length;
    let pw_value = form_pw[0].value;

    let num = /[0-9]/;
    let eng = /[a-zA-Z]/;
    let spe = /[~!@#$%^&*()_+|<>?:{}]/;


    if (pw_length < 8){
        case1[_index].style.color="#b3130b";  //빨간색
        case1[_index].classList.add("bad");
        case1[_index].classList.remove("good");
    }
    if(pw_length >= 8){
        case1[_index].style.color="#0f851a";  //초록색
        case1[_index].classList.add("good");
        case1[_index].classList.remove("bad");
    }


    if(num.test(pw_value) == 0 || eng.test(pw_value) == 0 || spe.test(pw_value) == 0){    // pw의 숫자가 없거나 , 영어가 없거나, 특수문자가 없을경우 실패
        case2[_index].style.color="#b3130b";  //빨간색
        case2[_index].classList.add("bad");
        case2[_index].classList.remove("good");
    }
    

    if(num.test(pw_value) == 1 && eng.test(pw_value) == 1 && spe.test(pw_value) == 1){ // pw의 숫자,영어,특수문자가 1개이상씩 있을경우 성공
        case2[_index].style.color="#0f851a";  //초록색
        case2[_index].classList.add("good");
        case2[_index].classList.remove("bad");
    }
    

}




function pw2_check(_index){  //비밀번호 확인 유효성 검사
    let pw_value = form_pw[0].value;
    let pw2_value = form_pw2[0].value;

    if (pw_value === pw2_value){
        case1[_index].style.color="#0f851a";  //초록색
        case1[_index].classList.add("good");
        case1[_index].classList.remove("bad");
    }
    else{
        case1[_index].style.color="#b3130b";  //빨간색
        case1[_index].classList.add("bad");
        case1[_index].classList.remove("good");
    }
}




function email_check(_index){  //이메일 유효성 검사

}