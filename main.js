var current_link = "this stream link";
function download(){
alert(" 
Thapyarsone software ထဲမှာ 
 Download ဆွဲရမှာ ဖြစ်ပါတယ် 
     Software မှာ  ပြသနာ 
      အနည်းငယ်ပါသွားတဲ့အတွက် 
   Movie link ကို copy link ခလုပ်နိပ်ပြီးယူသွားပါ 
       ညာဘက် menu  က Download page မှာ 
       Paste ချပြီး Down နိုင်ပါတယ် ");
       
   
   


var appWindow = window.open("th://xdown/?link="+current_link,"blank"); 
 setTimeout( function () {
 if (appWindow) { 
 appWindow.location ="https://play.google.com/store/apps/details?id=com.thite.apyarsone"; } },1000); 
 }





 



function copy(){
	var url = window.location.href
	document.getElementById('copy').innerHTML = "<div class='div col-5 mt-2'>"+ url+"</div>";
}



var d = new URL(location).searchParams.get("vid");
 
var encode_url = encodeURI("http://34.123.162.141/share?url="+d);





var url = "https://api.allorigins.win/get?url="+encode_url;

fetch(url)
.then((res) => {
    return res.json();
  })

  .then((gen1) => {

var data = JSON.parse(gen1.contents);
current_link = data.self_link;

var format = `<link href="https://vjs.zencdn.net/7.15.4/video-js.css" rel="stylesheet" /><link rel="stylesheet" href="style.css">` 
+`<video src="`
+data.hq+`"`
+` id="my-video"`
+` class="video-js box col float-right"`
+` controls`
+` preload="auto"`
+` width="640"`
+` height="264"`
+` poster="MY_VIDEO_POSTER.jpg"`
+` type="mp4"`
+` data-setup="{}" ></video>`
+`


<div class="w-100"></div>
<div class="child-1 col">
<button
class="button btn0" id="button" onclick="download()" role="button">Download</button>
</div>
<div class="child-2 col">
<button class="button btn1 " id='oia' onclick="openLink()" >Open In App</button>
</div><br>
  <script src="https://vjs.zencdn.net/7.15.4/video.min.js"></script>
`;


                                                                                         
  document.getElementById("vdb").innerHTML = format;
    

  });
