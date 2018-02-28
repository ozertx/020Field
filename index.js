

// ver 0.0.0.1

console.log('hello');

let UNIVERSE = Array(100)


console.log(UNIVERSE)




var app = new Vue({
    el: '#app',
    data: {
        cols:
            [
                { rows: [{text:"r11"},{text:"r12"}] },
                { rows: [{text:"r21"},{text:"r22"}] }
            ]
    },
    methods: {
        Method1: function()
        {
            //alert('method1 alert');
            this.cols.push({ rows: [{text:"r31"},{text:"r32"}] });
        },
        Method2: function()
        {
            //alert('method1 alert');
            this.cols.pop();
        },
        Method3: function()
        {
            //alert('method1 alert');
            this.cols = [
                { rows: [{text:"r11"},{text:"r12"}] },
                { rows: [{text:"r21"},{text:"r22"}] }
            ];
        }
    }
})



// fruits.forEach(function(item, index, array) {
//   console.log(item, index);
// });
