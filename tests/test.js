var counter = (function(){

    var privateCounter=0;

    function changeBy(val){
        privateCounter+=val;
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
})();

var val=counter.value();

console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.decrement();
counter.decrement();
console.log(counter.value());
val.value++;
val.value++;
val.value++;
val.value++;
console.log(counter.value());
