// 等待所有加载
$(window).load(function () {
    $('body').addClass('loaded');
    $('#loader-wrapper .load_title').remove();
});


// Nav组件
window.onscroll = function () {

	// 获取class
	var t = document.documentElement.scrollTop || document.body.scrollTop,
		headerTop = document.querySelector('.nav-box'),
		// logo = document.querySelector('.logo'),
		list = document.querySelectorAll('.nav ul li');

	// 循环数组
	for (var i = 0; i < list.length; i++) {
		if (t >= 700) {
			// list[i].style.cssText = "color: #4d4d4d";
			// logo.style.color = "";
			headerTop.style.cssText = "background-color: #fff; transition: .3s ease-in-out; height: 60px";
		} else {
			// logo.style.color = "";
			headerTop.style.cssText = "";
			list[i].style.cssText = "";
		}
	}

}

// 手机导航栏
var nav = document.querySelector('.iphone-nav')
navBg = document.querySelector('.nav-bg'),
off = document.querySelector('.off');
nav.onclick = function() {
    navBg.style.cssText = "width: 100%";
}
off.onclick = function() {
    navBg.style.cssText = "";
}


function changeLanguage(num) {
    sessionStorage.setItem('lan', num)
    // if (language === 0) {
    //     language = 1;
    // } else {
    //     language = 0;
    // }
    // console.log(language);

}
// 生态图

var daTa = document.querySelector('.left-datd-icon'),
	logoBg = document.querySelector('.contert-follologo-icon'),
	kaPian = document.querySelector('.right-ka-icon'),
	jiLi = document.querySelector('#right-excitation-icon'),
	yongJing = document.querySelector('#righe-jili-icon'),
	zhiFu = document.querySelector('.left-follo-icon'),
	fenCheng = document.querySelector('#contert-follo-icon'),
	follo = document.querySelector('.right-follo-icon'),
	jili2 = document.querySelector('.center-jili-icon'),
	usEr = document.querySelector('.left-use-icon'),
	fuWu = document.querySelector('.contert-fuwu-icon'),
	pingTai = document.querySelector('.right-pingtai-icon'),

	dabiaoTi = document.querySelector('.dabiaoti'),
	neiRong = document.querySelector('.neirong');

// 经过数据库

daTa.onmouseover = function() {
    if (sessionStorage.getItem('lan') === "0") {
        dabiaoTi.innerHTML = "数据需求方";
        neiRong.innerHTML = "数据需求方在Follo平台使用FOL购买用户数据。";
    } else {
        dabiaoTi.innerHTML = "Data Demanders";
        neiRong.innerHTML = "Data demanders use FOL to purchase user’s private data.";
    }
    daTa.style.cssText = "cursor: pointer;";
    //fenCheng.style.cssText = "opacity: .1;";
    logoBg.style.cssText = "opacity: .1;";
   // zhiFu.style.cssText = "opacity: .1;";
    jili2.style.cssText = "opacity: .1;";
    pingTai.style.cssText = "opacity: .1;";
    fuWu.style.cssText = "opacity: .1;";
   // usEr.style.cssText = "opacity: .1;";
    kaPian.style.cssText = "opacity:.1";
    jiLi.style.cssText = "opacity: .1;";
    yongJing.style.cssText = "opacity: .1;";
}

daTa.onmouseout = function() {
	jili2.style.cssText = "";
	pingTai.style.cssText = "";
	kaPian.style.cssText = "";
	jiLi.style.cssText = "";
	yongJing.style.cssText = "";
	fuWu.style.cssText = "";
	logoBg.style.cssText = "";
    usEr.style.cssText = "";
    fenCheng.style.cssText = "";
    zhiFu.style.cssText = "";
    jiLi.style.cssText = "";
    yongJing.style.cssText = "";
}

// 经过用户
usEr.onmouseover = function() {
    if (sessionStorage.getItem('lan') === "0") {
        dabiaoTi.innerHTML = "用户";
        neiRong.innerHTML =
            "数据生成方。Follo平台向用户发放FOL，激励用户上传自身生成的数据，并对用户数据加密、确权，确保用户拥有所有权和唯一访问权，让用户不仅可以从其自身数据获利，还可以选择数据的购买方和使用用途，让用户享有更高的知情权和选择权。";

    } else {
        dabiaoTi.innerHTML = "Users";
        neiRong.innerHTML ="Users are data producers. Follo ecosystem would distribute FOL to users to motivate them to upload their private data. Follo help users benefit from their private data.";
    }
    fenCheng.style.cssText = "opacity: .1;";
    logoBg.style.cssText = "opacity: .1;";
    // zhiFu.style.cssText = "opacity: .1;";
    //jili2.style.cssText = "opacity: .1;";
   // pingTai.style.cssText = "opacity: .1;";
    //fuWu.style.cssText = "opacity: .1;";
    // usEr.style.cssText = "opacity: .1;";
    kaPian.style.cssText = "opacity:.1";
    jiLi.style.cssText = "opacity: .1;";
    yongJing.style.cssText = "opacity: .1;";
    usEr.style.cssText = "cursor: pointer;";
}

usEr.onmouseout = function() {
	kaPian.style.cssText = "";
	jiLi.style.cssText = "";
    logoBg.style.cssText = "";
	jili2.style.cssText = "";
	yongJing.style.cssText = "";
	fenCheng.style.cssText = "";
	logoBg.style.cssText = "";
    zhiFu.style.cssText = "";
    daTa.style.cssText = "";
    pingTai.style.cssText = "";
    fuWu.style.cssText = "";
}

// 兴趣
kaPian.onmouseover = function() {
    if (sessionStorage.getItem('lan') === "0") {
        dabiaoTi.innerHTML = "兴趣点通证持有人";
        neiRong.innerHTML = "兴趣点通证是基于ERC721协议的非同质通证。用户从 Follo 平台购买兴趣点通证后，当有人经过或在该兴趣点停留产生数据时，Follo平台会向该兴趣点通证持有人发放FOL作为激励。";
    } else {
        dabiaoTi.innerHTML = "POI Token Holders";
        neiRong.innerHTML = "POI Token is a non-fungible token based on ERC721 protocol. POI token holders will received FOL as incentives when someone passes or stays at their POIs.";
    }
	yongJing.style.cssText = "opacity: .1;";
	fenCheng.style.cssText = "opacity: .1;";
	logoBg.style.cssText = "opacity: .1;";
	daTa.style.cssText = "opacity: .1;";
	zhiFu.style.cssText = "opacity: .1;";
	jili2.style.cssText = "opacity: .1;";
	//jiLi.style.cssText = "opacity: .1;";
	pingTai.style.cssText = "opacity: .1;";
	fuWu.style.cssText = "opacity: .1;";
	usEr.style.cssText = "opacity: .1;";
	kaPian.style.cssText = "cursor: pointer;";
}

kaPian.onmouseout = function() {
	kaPian.style.cssText = "";
	yongJing.style.cssText = "";
	logoBg.style.cssText = "";
	daTa.style.cssText = "";
	zhiFu.style.cssText = "";
	jili2.style.cssText = "";
    jiLi.style.cssText = "";
	pingTai.style.cssText = "";
	fuWu.style.cssText = "";
	usEr.style.cssText = "";
    fenCheng.style.cssText = "";
}

// 平台
pingTai.onmouseover = function () {
    if (sessionStorage.getItem('lan') === "0") {
        dabiaoTi.innerHTML = "第三方服务提供商";
        neiRong.innerHTML = "医疗、保险等第三方服务机构通过Follo 平台向用户提供服务，Follo生态用户通过向第三方服务机构开放个人数据，可以获得更为低廉的价格、更加个性化的服务。";
    } else {
        dabiaoTi.innerHTML = "The Third-party Service Providers";
        neiRong.innerHTML = "The third-party service providers such as healthcare institutions, insurance companies can provide their services to users on Follo, and users can get lower-price and more personalized services by opening their private data to the third-party service providers.";
    }
    logoBg.style.cssText = "opacity: .1;";
    daTa.style.cssText = "opacity: .1;";
    fenCheng.style.cssText = "opacity: .1;";
    jili2.style.cssText = "opacity: .1;";
    fenCheng.style.cssText = "opacity: .1;";
    zhiFu.style.cssText = "opacity: .1;";
    kaPian.style.cssText = "opacity: .1;";
    jiLi.style.cssText = "opacity: .1;";
    //fuWu.style.cssText = "opacity: .1;";
    //usEr.style.cssText = "opacity: .1;";
   // yongJing.style.cssText = "opacity: .1;";
	pingTai.style.cssText = "cursor: pointer;";
}

pingTai.onmouseout = function() {
	logoBg.style.cssText = "";
	daTa.style.cssText = "";
	jili2.style.cssText = "";
	fenCheng.style.cssText = "";
	zhiFu.style.cssText = "";
	jiLi.style.cssText = "";
	kaPian.style.cssText = "";
	jiLi.style.cssText = "";
    usEr.style.cssText = "";
    fuWu.style.cssText = "";
    yongJing.style.cssText = "";
}

//按钮效果
// 	var butTon = document.querySelector('.button');
// 	butTon.onmousemove = (e) => {
// 			console.log(t)
// 获取按钮xy轴
// 		const x = e.pageX - e.target.offsetLeft;
// 		const y = e.pageY - e.target.offsetTop;
//
// 		e.target.style.setProperty('--x', '${ x }px')
// 		e.target.style.setProperty('--y', '${ y }px')
// 	}
//

// 滑动锚点
//500 控制点击滚动条向下滑动的速度

function click_scroll() {
    navBg.style.cssText = "";
    var scroll_offset = $("#hd1").offset().top;
    $("body,html").animate({
        scrollTop: scroll_offset
    }, 800);
}


function click_scroll1() {
    navBg.style.cssText = "";
    var scroll_offset = $("#hd2").offset().top;
    $("body,html").animate({
        scrollTop: scroll_offset
    }, 800);
}

function click_scroll2() {
    navBg.style.cssText = "";
    var scroll_offset = $("#hd3").offset().top;
    $("body,html").animate({
        scrollTop: scroll_offset
    }, 800);
}


function click_scroll3() {
    navBg.style.cssText = "";
    var scroll_offset = $("#hd4").offset().top;
    $("body,html").animate({
        scrollTop: scroll_offset
    }, 800);
}
function click_scroll4() {
    navBg.style.cssText = "";
    var scroll_offset = $("#hd5").offset().top;
    $("body,html").animate({
        scrollTop: scroll_offset
    }, 800);
}

function click_scroll5() {
    navBg.style.cssText = "";
    var scroll_offset = $("#hd6").offset().top;
    $("body,html").animate({
        scrollTop: scroll_offset
    }, 800);
}

function click_scroll6() {
    navBg.style.cssText = "";
    var scroll_offset = $("#hd7").offset().top;
    $("body,html").animate({
        scrollTop: scroll_offset
    }, 800);
}
// 顾问跳转
function click_scroll7(){
    navBg.style.cssText = "";
    var scroll_offset = $("#hd8").offset().top;
    $("body,html").animate({
        scrollTop: scroll_offset
    }, 800);
}
//展示二维码
function showCode() {
	var bodyDom = document.querySelector(".main-div");
    bodyDom.style.display= 'opacity: .1;'
    // bodyDom.style.backgroundColor = 'rgba(0,0,0,1)'
	// document.getElementById('#erweima')
	var erweima = document.getElementsByClassName('erweimaDiv')[0];
    erweima.style.cssText = "display: block; ";
}
//隐藏二维码
function hideCode() {
    var erweima = document.getElementsByClassName('erweimaDiv')[0];
    erweima.style.cssText = "display: none; ";
    var bodyDom = document.querySelector(".main-div");
    bodyDom.style.display= "opacity: '';"
}
//关闭二维码
    var closecode = document.getElementsByClassName('close')[0];
    closecode.onmouseover = function (){
    	closecode.setAttribute ('src', './icon/closehover.png') ;
	}
	closecode.onmouseout = function (){
		closecode.setAttribute ('src', './icon/close.png') ;
	}

