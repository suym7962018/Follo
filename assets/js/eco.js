
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

	dabiaoTi = document.querySelector('.eco .title'),
	neiRong = document.querySelector('.eco .text');

// 经过数据库

daTa.onmouseover = function() {
    // if (sessionStorage.getItem('lan') === "0") {
        dabiaoTi.innerHTML = "数据需求方";
        neiRong.innerHTML = "数据需求方在Follo平台使用FOL购买用户数据。";
    // } else {
    //     dabiaoTi.innerHTML = "Data Demanders";
    //     neiRong.innerHTML = "Data demanders use FOL to purchase user’s private data.";
    // }
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
    // if (sessionStorage.getItem('lan') === "0") {
        dabiaoTi.innerHTML = "用户";
        neiRong.innerHTML =
            "数据生成方。Follo平台向用户发放FOL，激励用户上传自身生成的数据，并对用户数据加密、确权，确保用户拥有所有权和唯一访问权，让用户不仅可以从其自身数据获利，还可以选择数据的购买方和使用用途，让用户享有更高的知情权和选择权。";

    // } else {
    //     dabiaoTi.innerHTML = "Users";
    //     neiRong.innerHTML ="Users are data producers. Follo ecosystem would distribute FOL to users to motivate them to upload their private data. Follo help users benefit from their private data.";
    // }
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
    // if (sessionStorage.getItem('lan') === "0") {
        dabiaoTi.innerHTML = "兴趣点通证持有人";
        neiRong.innerHTML = "兴趣点通证是基于ERC721协议的非同质通证。用户从 Follo 平台购买兴趣点通证后，当有人经过或在该兴趣点停留产生数据时，Follo平台会向该兴趣点通证持有人发放FOL作为激励。";
    // } else {
    //     dabiaoTi.innerHTML = "POI Token Holders";
    //     neiRong.innerHTML = "POI Token is a non-fungible token based on ERC721 protocol. POI token holders will received FOL as incentives when someone passes or stays at their POIs.";
    // }
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
    // if (sessionStorage.getItem('lan') === "0") {
        dabiaoTi.innerHTML = "第三方服务提供商";
        neiRong.innerHTML = "医疗、保险等第三方服务机构通过Follo 平台向用户提供服务，Follo生态用户通过向第三方服务机构开放个人数据，可以获得更为低廉的价格、更加个性化的服务。";
    // } else {
    //     dabiaoTi.innerHTML = "The Third-party Service Providers";
    //     neiRong.innerHTML = "The third-party service providers such as healthcare institutions, insurance companies can provide their services to users on Follo, and users can get lower-price and more personalized services by opening their private data to the third-party service providers.";
    // }
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

