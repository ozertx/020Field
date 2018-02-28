

var context;
var TickCounter = 0;

function Phys2D(InstanceName)
{

    this.instance = document.getElementById(InstanceName);
    if( this.instance == undefined ) alert("Не могу достать инстанс");

    context = this.instance.getContext('2d');
    this.TickCounter = 0; 


    context.strokeRect(15, 15, 100, 100);

    this.TickFunction = function() 
    { 
        TickCounter++; 
        context.strokeRect(15 + TickCounter, 15, 100, 100);

    }
    var timerId = setInterval(this.TickFunction, 200);


}


/*

function GlobalTimer()
{

    var timerId = setInterval(function() { alert("тик");}, 2000);

}



 


function CreateCanvas()
{
    var example = document.getElementById("example"),
    ctx     = example.getContext('2d');
    example.width  = 640;
    example.height = 480;
    ctx.strokeRect(15, 15, 266, 266);
    ctx.strokeRect(18, 18, 260, 260);
    ctx.fillRect(20, 20, 256, 256);
    for (i = 0; i < 8; i += 2) for (j = 0; j < 8; j += 2) 
    {
        ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
    }    
}

*/