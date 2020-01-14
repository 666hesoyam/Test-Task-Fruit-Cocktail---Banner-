
var oneHeight=255,  numImage=3;
function LetsGo(){
    var x=[];
    for(var i in{line_1:1,line_2:1,line_3:1,line_4:1,line_5:1}){
        x.push({
            a:document.getElementById(i),
            speed:30+Math.floor(Math.random()*20),
            scr:Math.floor(Math.random()*oneHeight*numImage)
        });
    }
    var interval=setInterval(
        function (){
            var i = x.length,complete=true;
            while(i--){ var a=x[i];
                a.scr+=a.speed;
                if(a.speed>0){ a.speed-=0.2;complete=false;}
                if(a.scr>(oneHeight*numImage))a.scr-=oneHeight*numImage;
                a.a.scrollTop=Math.floor(a.scr);
            }
            if(complete) clearInterval(interval)
        },20)
}
