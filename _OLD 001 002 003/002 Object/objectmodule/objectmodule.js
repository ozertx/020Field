


//  console.log(typeof (this.chunks[i][j]));

function Surface(seed)
{
    this.sizeX = 100;
    this.sizeY = 100;
    this.seed = seed;

    this.chunks = [];
    this.connectionList = [];


   // var n = 4, m = 4;

    var t1 = Date.now();

    var k = this.sizeX;
    var n = this.sizeY;


    // - init array
    for (var i = 0; i < k; i++)
    {
        this.chunks[i] = [];
        for (var j = 0; j < n; j++)
        {
            this.chunks[i][j] = new Chunk([i,j]);

        }
    }

    var t2 = Date.now();
    console.log( "Скрипт выполнялся <"+ (t2-t1) +"> ms." );




    console.log('Surface seed:' + this.seed);


        this.f1 = function(){

        //console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }



    this.ConnectionUpdate = function()
    {
        for (var Ai=0; Ai<this.connectionList.length; Ai++) if(typeof(this.connectionList[Ai]) == 'object')
        {
            //console.log(this.connectionList[Ai]);

            var CON =  this.connectionList[Ai][0];

            var i = this.connectionList[Ai][1];
            var j = this.connectionList[Ai][2];
            var k = this.connectionList[Ai][3];
            var n = this.connectionList[Ai][4];

            var retArray =[];


            for (; i <= k; i++)
            {
                for (j = this.connectionList[Ai][2]; j <= n; j++)
                {
                    retArray.push(this.chunks[i][j]);
                }
            }

            CON.write(JSON.stringify(retArray));


        }
    }


    this.ConnectionOn = function(CON, areaLX, areaLY, areaHX, areaHY)
    {
        this.connectionList.push([CON, areaLX, areaLY, areaHX, areaHY]);
    }


    this.ConnectionDelete = function(CON)
    {
        for (var i=0; i<this.connectionList.length; i++) if(typeof(this.connectionList[i]) == 'object')
        {
            if(CON == this.connectionList[i][0] ) delete this.connectionList[i];
        }
    }

    //////////////   for (var i=0; i<arr.length; i++)





    this.Update = function()
    {


        this.Bypass(function (Chunk) {

            Chunk.value += 1;
            //Chunk.Alert();
            //this.Alert();
            //console.log("Chunk ");

        }, "Update");

    }






    this.Bypass = function(F, alertText)
    {
        var t1 = Date.now();

        var k = this.sizeX;
        var n = this.sizeY;



        for (var i = 0; i < k; i++) for (var j = 0; j < n; j++)
        {
            F(this.chunks[i][j]);
        }

        if( typeof (alertText) == 'string')
        {
            var t2 = Date.now();
            console.log( alertText + " time <"+ (t2-t1) +"> ms." );
        }

    }


    this.Init = function()
        {

            this.Bypass(function (Chunk)
            {
                Chunk.value = Math.random();
                //Chunk.Alert();
                //this.Alert();
                //console.log("Chunk ");

            },"Init");


    }


    this.Init();



}


function Chunk(pos)
{

    this.pos = pos;
    this.posX = pos[0];
    this.posY = pos[1];
    //this.seed = seed;
    this.value = 0;


   //console.log("Chunk " + seed);

    this.Alert = function(F) {
        console.log(`Chunk ${this.seed} value is ${this.value} `);
    }


}






/*
Surface.prototype.f1 = function(){
    console.log('f1');
};

*/

//module.exports.Surface = Surface;
module.exports = Surface;

