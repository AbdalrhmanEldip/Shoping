let cont = document.querySelectorAll('.content'),
    btn1 = document.querySelector('.btn1'),
    btn2 = document.querySelector('.btn2'),
    colors = document.querySelectorAll('.colors span'),
    cor1 = document.querySelectorAll('.cor-1 span'),
    cor2 = document.querySelectorAll('.cor-2 span'),
    imgs = document.querySelectorAll('.cr-1-imgs img'),
    cr   = document.querySelectorAll('.cr-1-imgs'),
    plus = document.querySelectorAll('.plus'),
    change = document.querySelector('nav'),
    pluss  = document.querySelectorAll('.pluss'),
    adds   = document.querySelectorAll('.adds button'),
    minse  = document.querySelectorAll('.minse'),
    more   = document.querySelector('.more span'),
    puma   = document.querySelector('.puma'),
    nike   = document.querySelector('.nike'),
    capo   = document.querySelector('.capo'),
    cap    = document.querySelector('.cap'),
    haco   = document.querySelector('.haco'),
    tiger   = document.querySelector('.tiger'),
    pom   = document.querySelector('.pom'),
    pam    = document.querySelector('.pam'),
    x      = 0,
    y      = 0,
    s      = 0,
    up     = document.querySelector('.up'),
    spans = document.querySelectorAll('.sizes span'),
    kok  =0,
    impo = document.querySelectorAll('.img-lab img'),
    index2 =0,
    index = 0;
    
function add(){
    if(index == cont.length){
        index = 0;
    }
    for(let i = 0; i < cont.length;i++){
        cont[i].classList.remove('cop');
    }
    cont[index].classList.add('cop');
    index++;
    setTimeout(add,6000);
}

btn1.addEventListener('click',function(){
    slid('btn1')
}); 

btn2.addEventListener('click',function(){
    slid('btn2')
}); 

function slid(direct){
    if (direct == "btn1"){
        if(index == cont.length-1){
            index = 0;
        }else{
            index++;
        }
    }
    
    if (direct == "btn2"){
        if(index == 0){
            index = cont.length-1;
        }else{
            index--;
        }
    }
    for(let s = 0; s < cont.length;s++){
        cont[s].classList.remove('cop');
    }
    cont[index].classList.add('cop');
    setTimeout(slid,3000)
}

function move(){
    colors.forEach(s => s.classList.remove('active-colors'));
    this.classList.add('active-colors');
}

function add3(){
    spans.forEach(s => s.classList.remove('spanactive'));
    this.classList.add('spanactive');
}
    
    colors[0].onclick = function(){
        imgs[0].classList.add('show');
        imgs[1].classList.remove('show');
        imgs[2].classList.remove('show');
        cr[0].classList.add('line1');
        cr[1].classList.remove('line2');
        cr[2].classList.remove('line3');
        
    }
    colors[1].onclick = function(){
        imgs[0].classList.remove('show');
        imgs[1].classList.add('show');
        imgs[2].classList.remove('show');
        cr[3].classList.add('line2');
        cr[4].classList.remove('line3');
        cr[5].classList.remove('line1');
    }
    colors[2].onclick = function(){
        imgs[0].classList.remove('show');
        imgs[1].classList.remove('show');
        imgs[2].classList.add('show');
    }
     colors[3].onclick = function(){
        imgs[3].classList.add('show');
        imgs[4].classList.remove('show');
        imgs[5].classList.remove('show');
    }
    colors[4].onclick = function(){
        imgs[3].classList.remove('show');
        imgs[4].classList.add('show');
        imgs[5].classList.remove('show');
    }
    colors[5].onclick = function(){
        imgs[3].classList.remove('show');
        imgs[4].classList.remove('show');
        imgs[5].classList.add('show');
    }
     colors[6].onclick = function(){
        imgs[6].classList.add('show');
        imgs[7].classList.remove('show');
        imgs[8].classList.remove('show');
    }
    colors[7].onclick = function(){
        imgs[6].classList.remove('show');
        imgs[7].classList.add('show');
        imgs[8].classList.remove('show');
    }
    colors[8].onclick = function(){
        imgs[6].classList.remove('show');
        imgs[7].classList.remove('show');
        imgs[8].classList.add('show');
    }
    
window.addEventListener('load',add);

colors.forEach(s => s.addEventListener('click',move));

window.addEventListener('scroll',function(){
    change.classList.toggle('change',window.scrollY > 0);
});

spans.forEach(s => s.addEventListener('click',add3));

function koks(){
    plus[0].innerText = x;
    x++;
    return x;
}
function koks2(){
    plus[1].innerText = y;
    y++;
     return y;
}
function koks3(){
    plus[2].innerText = s;
    s++;
    return s;
}
function koks4(){
    plus[0].innerText = x;
    x--;
    if(x == -1){
        x = 1;
    }
}
function koks5(){
    plus[1].innerText = y;
    y--;
    if(y == -1){
        y = 1;
    }
}
function koks6(){
    plus[2].innerText = s;
    s--;
    if(s == -1){
        s = 1;
    }
}
pluss[0].onclick = koks;
pluss[1].onclick = koks2;
pluss[2].onclick = koks3;


minse[0].onclick = koks4;
minse[1].onclick = koks5;
minse[2].onclick = koks6;


adds[0].onclick = function(){
    more.innerText =  parseInt(x)-1;
    if(more.innerText == -1){
        more.innerText = 0;
    }
}

adds[1].onclick = function(){
    more.innerText =  parseInt(y)-1;
    if(more.innerText == -1){
        more.innerText = 0;
    }
}

adds[2].onclick = function(){
    more.innerText = parseInt(s)-1;
    if(more.innerText == -1){
        more.innerText = 0;
    }
}
puma.addEventListener('click',function(){
    capo.classList.add('hide');
    cap.classList.remove('hide');
})
nike.addEventListener('click',function(){
    cap.classList.add('hide');
    capo.classList.remove('hide');
})
tiger.addEventListener('click',function(){
    pam.classList.add('hide');
    pom.classList.remove('hide');
})
haco.addEventListener('click',function(){
    pom.classList.add('hide');
    pam.classList.remove('hide');
})

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 4,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
  
  function pop(){
      if (index2 == impo.length){
          index2 = 0;
      }
      for(let q = 0; q < impo.length;q++){
          impo[q].classList.remove('oppo');
      }
      impo[index2].classList.add('oppo');
      index2++;
      console.log(index2)
      setTimeout(pop,2000)
  }
  window.addEventListener('load',pop);
window.addEventListener('scroll',function(){
    up.classList.toggle('give',window.scrollY > 200);
});

