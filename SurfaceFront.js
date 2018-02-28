


function ChunkFront(pos)
{
    this.pos = pos;
    this.posX = pos[0];
    this.posY = pos[1];
    //this.seed = seed;
    this.value = 0;


    this.div = null;

}


function SurfaceFront(initData)
{
    //alert(JSON.stringify(initData));
    this.posLow = initData.posLow;
    this.posHi = initData.posHi;

    this.chunks = [];


    this.Init  = function (divName)
    {
        var div = document.getElementById(divName);
        //alert(typeof(divo) + JSON.stringify(divo));
        if(div == null) alert("Surface Crash");



        // init Chunks

        for (var i = this.posLow[0]; i < this.posHi[0]; i++)
        {
            this.chunks[i] = [];
            for (var j = this.posLow[1]; j < this.posHi[1]; j++)
            {
                this.chunks[i][j] = new ChunkFront([i,j]);
            }
        }

        // init HTML

        var text = "";

        for (var i = this.posLow[0]; i < this.posHi[0]; i++)
        {
            text += "<div class='BlockLine'>\n ";
            for (var j = this.posLow[1]; j < this.posHi[1]; j++)
            {
                text += "<div class='block1' id='block_" + i + "_" + j + "'> \n  ";

                text += "</div>\n ";
            }
            text += "</div>\n ";
        }
        //text += '<>';

        div.innerHTML += text;


        // setting div to chunk

        this.Bypass(function(chunk)
            {
                var divName = "block_" + chunk.posX + "_" + chunk.posY + "'>";
                var div = document.getElementById(divName);
                if(div == null) alert("Bypass getElementById Crash  "  + divName );
                chunk.div = div;
            }
            , 'setting div to chunk');
        /*
        for (var i = this.posLow[0]; i < this.posHi[0]; i++)
            for (var j = this.posLow[1]; j < this.posHi[1]; j++)
            {
                text += "<div class='block1' id='block_" + i + "_" + j + "'>";

                text += "</div>";
            }
            text += "</div>";
        }
        */


    }


    this.Bypass = function(F, alertText)
    {
        for (var i = this.posLow[0]; i < this.posHi[0]; i++) for (var j = this.posLow[1]; j < this.posHi[1]; j++)
        {
            F(this.chunks[i][j]);
        }
        if( typeof (alertText) == 'string') if(alertText.length>0) alert(alertText);
    }



}



