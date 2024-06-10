 /*function scrooll(to,time){
   let where=querySelector(to);
    let whereposition=where.getBoundingClientRect().top
    let startposition =window.pageYOffset;
    let distance =whereposition-startposition;
    let startTime=null;

    function animation(currentTime){
        if(startTime===null ) startTime=currentTime;
        let timeElapsed = currntTime-startTime;
        let run= ease(timeElapsed,whereposition,distance,time);
        window.scrollTo(0,run);
        if(timeElapsed < time) requestAnimationFrame(animation);

    } 
    function ease (t,b,c,d){
        t /= d / 2;
        if (t < 1) return c /2 *t * t +b;
        t--;
        return -c / 2 * (t * (t-2) - 1) + b;
    }

    requestAnimationFrame(animation);

}

let setion1 = document.querySelector('.');
let setion2 = document.querySelector('.');

setion1.addEventListener('click',function(){
scrooll('.',2500);
});

etion1.addEventListener('click',function(){
    scrooll('.',2500);
    });
    */