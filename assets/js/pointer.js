// 大地图
mapboxgl.accessToken = 'pk.eyJ1Ijoic3V5bTc5NiIsImEiOiJjang1bzR0NGgwM3o1NDhubXV3YmFtM3U2In0.NwJyB0Jjq_uU16GD_it48A';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
center: [121.47098682762123, 31.228703194581044], // starting position [lng, lat]
zoom: 15 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');
map.on('load', function () {

    map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [[
                        [121.46943848914856, 31.22618793165566],
                        [121.47251032231657, 31.227235298779377],
                        [121.47163055776542, 31.228849982905714],
                        [121.46881960272162, 31.227730716158348],
                        [121.46943848914856, 31.22618793165566]]]
                }
            }
        },
        'layout': {},
        'paint': {
            'fill-color': '#FFA600',
            'fill-outline-color': '#000000',
            'fill-opacity': 0.5
        }
    });
});
// 详情页地图
var mapDetail = new mapboxgl.Map({
    container: 'map-detail', // container id
    style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    center: [-74.50, 40.0123], // starting position [lng, lat]
    zoom: 10 // starting zoom
    });
    
    mapDetail.addControl(new mapboxgl.NavigationControl(), 'top-left');

//下拉菜单二级联动
//输入城市列表，每行与国家下拉框对应
var citylist = [
    ["柏林", "汉堡", "慕尼黑"],
    ["阿姆斯特丹", "鹿特丹", "乌特勒支"],
    ["拉斯维加斯", "洛杉矶", "纽约"],
    ["东京", "大阪", "广岛"],
    ["安卡拉", "伊斯坦布尔", "伊兹密尔"],
    ["新加坡"],
    ["班加罗尔", "德里", "孟买"],
    ["泗水", "勿加泗", "雅加达"],
    ["伯明翰", "曼彻斯特", "伦敦"],  
    ["北京", "上海", "香港"]
];
//第一个select框改变即执行该函数
function getCity() {
    //通过DOM选择下拉菜单
    var country = document.getElementById("country");
    var city = document.getElementById("city");
    //获取该国家对应的城市列表
    var cityArray = citylist[country.selectedIndex - 1];	//selectedIndex就是第几个option
    city.length = 1;  //默认会有一个option
    for(var i = 0; i < cityArray.length; i++){
        //Option(text, value)
        city[i + 1] = new Option(cityArray[i], i + 1);
    }
}

    