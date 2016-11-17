/**
 * Created by Administrator on 2016/10/25 0025.
 */

var mySwiper = new Swiper(".swiper-container",{
    direction:"vertical",
    loop : true,//循环模式

    onSlideChangeEnd :function(swiper){
        var slides = swiper.slides;//获得所有的滑块
        var curIndex = swiper.activeIndex;//下一个滑块或者上一个滑块的索引
        var trueSlideNum = slides.length-2; //真实滑块个数
        var lastSlideNum  = trueSlideNum+1;//最后一个滑块的索引
        [].forEach.call(slides,function(item,index){
            item.id = "";/*把所有滑块的id名去掉*/
            if(index == curIndex){
                switch (index){
                    case 0 :/*第一个滑块是真实的最后一个滑块的副本*/
                        item.id = "page"+ trueSlideNum;
                        break;
                    case lastSlideNum :/*最后一个滑块时真实的第一个滑块的副本*/
                        item.id = "page1";
                        break;
                    default  :
                        item.id = "page"+curIndex;
                }
            }
        })

    },
    onInit : function(swiper){
//                //swiper初始化完成后给第一个滑块增加动画效果
//            var slides = swiper.slides;
//            slides[0].id = "page1";
    }
});
var song = document.querySelector("#SONG");
var music = document.querySelector(".music");
window.setTimeout(function(){
    song.play();//音频文件播放 -边缓冲边播放
   song.addEventListener("canplay",function(){
        music.className = "music musicMove";
        music.style.opacity = 1;
    })

},1000);
music.addEventListener("click",function(){
    if(song.paused){//停止
        song.play();
        music.className = "music musicMove";
    }else{//播放
        song.pause();
        music.className = "music";
    }
});

