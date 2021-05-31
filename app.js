'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className=="light-theme"){
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }
    console.log('current class name:' + className);
});


const switcher2 = document.querySelector('.btn2');
switcher2.addEventListener('click',function() {
    if(this.textContent == 100){
        this.textContent = Sum(1,2,3,4);
    }
    else{
        this.textContent = Sum(10,20,30,40);
    }
    console.log('current text content:' + this.textContent);
});

for (var i=0; i<document.getElementById("MyForm").length; i++){
    var formvalue = document.getElementById("MyForm").elements[i].value;
    if (i=0){var a=formvalue};
    if (i=1){var b=formvalue};
    if (i=2){var c=formvalue};
    if (i=3){var d=formvalue};    
}

var sum=Sum(a,b,c,d);

function Sum(a,b,c,d){
    return a + b + c + d;
}
