var makeCounter = function(){

    var privateCounter={value:0};

    function changeBy(val){
        privateCounter.value+=val;
    }

    return {
        increment:function(){
            changeBy(1);
        },
        decrement:function(){
            changeBy(-1);
        },
        value:function()
        {
            return privateCounter;
        }

    }
};

var counter1= makeCounter();
var counter2 = makeCounter();
var val=counter1.value();

console.log(counter1.value());
counter1.increment();
console.log(counter1.value());
counter1.decrement();
counter1.decrement();
console.log(counter1.value());
val.value++;
val.value++;
val.value++;
val.value++;
console.log(counter1.value());


var val2=counter2.value();

console.log(counter2.value());
counter2.increment();
console.log(counter2.value());
counter2.decrement();
counter2.decrement();
console.log(counter2.value());
val2.value++;
val2.value++;
val2.value++;
console.log(counter2.value());
console.log(counter1.value());
