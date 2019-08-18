window.onload = function() {

    // 向下滑动按钮
scrollDown = function() {
    let btn = document.getElementById('down-btn'); 
    let x = btn.offsetTop + 100;
    
    let timer = setInterval(() => {
      document.documentElement.scrollTop += 100
      if (document.documentElement.scrollTop >= x) {
        clearInterval(timer)
      }
    }, 20);
    let timer_1 = setInterval(() => {
      window.pageYOffset += 100
      if (window.pageYOffset >= x) {
        clearInterval(timer_1)
      }
    }, 20);
    let timer_2 = setInterval(() => {
      document.body.scrollTop += 100
      if (document.body.scrollTop >= x) {
        clearInterval(timer_2)
      }
    }, 20);
  }

// 滚动变换导航栏
window.onscroll = function () {
    var sl = -Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);
    document.querySelector('.navbar').style.left = sl+'px';

	// 获取class
	var t = document.documentElement.scrollTop || document.body.scrollTop,
    list = document.querySelectorAll('.navbar ul li');
    
    if(t < 100) {
        for(var i = 0; i < list.length; i++){
            list[i].className = "";
        }
        list[0].classList.add('active'); //主页
    }
    else if(t < 1500) {
        for(var i = 0; i < list.length; i++){
            list[i].className = "";
        }
        list[1].classList.add('active'); //pointer
    }
    else if(t < 2055) {
        for(var i = 0; i < list.length; i++){
            list[i].className = "";
        }
        list[2].classList.add('active'); //follo
        list[3].classList.add('active'); //愿景
    }
    else if(t < 2800) {
        for(var i = 0; i < list.length; i++){
            list[i].className = "";
        }
        list[2].classList.add('active'); //follo
        list[4].classList.add('active'); //案例
    }
    else if(t < 4000) {
        for(var i = 0; i < list.length; i++){
            list[i].className = "";
        }
        list[2].classList.add('active'); //follo
        list[5].classList.add('active'); //案例
    }
    else if(t < 5100) {
        for(var i = 0; i < list.length; i++){
            list[i].className = "";
        }
        list[6].classList.add('active'); //路线图
    }
    else if(t < 5800) {
        for(var i = 0; i < list.length; i++){
            list[i].className = "";
        }
        list[10].classList.add('active'); //团队
    }
    else if(t < 6300) {
        for(var i = 0; i < list.length; i++){
            list[i].className = "";
        }
        list[11].classList.add('active'); //资源
        list[12].classList.add('active');//合作伙伴
    }
    else if(t < 6800) {
        for(var i = 0; i < list.length; i++){
            list[i].className = "";
        }
        list[11].classList.add('active'); //资源
        list[13].classList.add('active'); //媒体
    }

}

//Pointer滑动
var sliderList = document.querySelectorAll('.slider');
var pagination = document.querySelectorAll('.slider-pagination li');

var sliderIndex = 1;
rightOne = function() {
    if(sliderIndex == 2){
        sliderIndex = 0;
    }
    else{
        sliderIndex++;
    }
    // console.log(sliderIndex);
    switch(sliderIndex){
        case 0:
                sliderList[0].className = 'slider slide2';
                sliderList[1].className = 'slider slide3';
                sliderList[2].className = 'slider slide1';
                pagination[0].className = 'active';
                pagination[1].className = '';
                pagination[2].className = '';
                break;

        case 1: 
                sliderList[1].className = 'slider slide2';
                sliderList[2].className = 'slider slide3';
                sliderList[0].className = 'slider slide1';
                pagination[1].className = 'active';
                pagination[0].className = '';
                pagination[2].className = '';
                break;
        
        case 2:
                sliderList[2].className = 'slider slide2';
                sliderList[0].className = 'slider slide3';
                sliderList[1].className = 'slider slide1';
                pagination[2].className = 'active';
                pagination[0].className = '';
                pagination[1].className = '';
                break;
    }
};

var timerId = setInterval(() => {
    rightOne();
}, 5000);

var slider = document.querySelector('.slider-container');
slider.onmouseover = function() {
    clearInterval(timerId, 100);
}

slider.onmouseleave = function() {
    timerId = setInterval(() => {
        rightOne();
    }, 5000);
}


//团队左右滑动
var index = 0;

prevOne = function() {
    var teamList = document.querySelectorAll('.team-container');
    // var width = teamList[0].offsetWidth;

    teamList[index].style.left = '-500px';

    for(var i = 0; i < 4; i++) {
        if(i + index + 1 < teamList.length) {
            teamList[i + index + 1].style.left = 60 + i * 260 + 'px';
        }
        else {
            teamList[i + index - teamList.length + 1].style.left = 60 + i * 260 + 'px';
        }
    }

    if(index == teamList.length-1) {
        index = 0;
    }
    else {
        index += 1;
    }
}

}
