{ // digital Clock code
    time = () => {
        var curtime = new Date();
        let x = curtime.getHours() + ' : ' + curtime.getMinutes() + ' : ' + curtime.getSeconds()
        document.getElementById("time").innerText = x;

    }
    stop = () => {
        clearInterval(idx);
    }
    var idx = setInterval(time, 1000);
    //  Clock
    function playclock() {
        var curtime = new Date();

        let sec = curtime.getSeconds() * 6;
        let min = curtime.getMinutes() * 6;
        let hr = curtime.getHours() * 30 + ((curtime.getMinutes()) / 2)

        document.getElementById("hour").style.transform = "rotateZ(" + hr + "deg)"
        document.getElementById("minute").style.transform = "rotateZ(" + min + "deg)"
        document.getElementById("second").style.transform = "rotateZ(" + sec + "deg)"
        // let x = new Audio('Tick.mp3');
        x.play();
    }
    // setInterval(playclock(), 1000);
}



// this was code for analog clock . Not used right now. IGNORE IT


var x = 0;  // number of times help menu shows up
$(".drag").draggable();
$(".drag").click(() => { document.getElementById("Bar").classList.remove("tooltip"); document.getElementsByClassName("tooltiptext")[0].innerText = ""; })

$("#Bar").dblclick(() => {
    $(".slidingitem").slideToggle();

});

// this was nav bar code. commented out right now for simplicity

// checking if the data already e

    var data = 
    {
        "Z":{"z":"DAYS/TIME","a":"mon","b":"tue","c":"wed","d":"thu","e":"fri","f":"sat","g":"sun"},
    
        "A":{"z":"08:00-09:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "B":{"z":"09:00-10:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "C":{"z":"10:00-11:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "D":{"z":"11:00-12:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "E":{"z":"12:00-13:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "F":{"z":"13:00-14:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "G":{"z":"14:00-15:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "H":{"z":"15:00-16:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "I":{"z":"15:00-16:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "J":{"z":"16:00-17:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "K":{"z":"17:00-18:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
        "L":{"z":"18:00-19:00" ,"a":"",      "b":"",      "c":"" ,"d":"","e":"","f":"","g":""    },
    
    }




for (x in data) {
    for(y in data[x]){       
        $(`div.${x}`).children(`div.${y}`).text(data[x][y])
        $(`div.${x}`).children(`div.${y}`).addClass("cell")

        $(`div.${x}`).children(`div.${y}`).append(`<div class='${x} ${y} moreinfo '>helllpw </div>`)
        

    }
}


var flag = 0
function hide(e){
    if(flag){
    e.currentTarget.childNodes[0].style.visibility = 'hidden';
    console.log(e.currentTarget);
    }
    else{
        $(".moreinfo").css("visibility","hidden")
        e.currentTarget.childNodes[0].style.visibility = 'visible';
        console.log(e.currentTarget);
        
    }
    flag = !flag
    // When this function is used as an event handler: this === e.currentTarget
  }

  var ps = document.getElementsByClassName("cell")
  
  for(var i = 0; i < ps.length; i++){
    // Console: print the clicked <p> element
    ps[i].addEventListener('click', hide, false);
  }

$(".moreinfo").click(()=>{
    flag = !flag
})

var d = '<div> Title : <input type="text" name="title" id="tit"><br>  date: <input type="date" name="date" id="date"><br> Meelting link: <input type="url" name="meetlink" id="meetlink"><br>short Description : <br> <textarea name="description" id="des" cols="30" rows="10"></textarea><br> <input type="submit" value="sumit" id="submit"> </div>'

$(".moreinfo").append("<button >add(+)</button> <br>");
$(".moreinfo").append(d) ;


let db = new Localbase('db')

db.collection('tabledata').get().then(x => {
    console.log(x.length + "this is len")
    if(x.length =="0"){
        db.collection('tabledata').add(data,'tabledb')
    }
  })

  //for the navigation material added by aman tarar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


