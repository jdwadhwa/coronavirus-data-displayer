//const fetch = require("node-fetch");

var h=false;

var url = "https://api.rootnet.in/covid19-in/stats/latest";


var y = document.querySelector("#res");
if(h==false)
{
       y.addEventListener("click",ram);
}





function ram(e)
{
       e.preventDefault();
       fetch(url).then(data=>{
              data.json().then(res=>{
                     var x = document.querySelector("#city")
                     var z = x.value
                     x.value="";
                            console.log(x.value);
                    // console.log(res.data.regional)
                     res.data.regional.forEach(ele=>{
                             if(ele.loc.toLowerCase()==z)
                             {
                                   var div=document.querySelector(".info");
                                   var m = document.createElement("H1");
                                   var k = document.createElement("H1"); 
                                   var q = document.createElement("H1"); 
                                   var w = document.createElement("H1"); 
                                   var e = document.createElement("H1"); 
                                   var t = document.createElement("H1");
                                    var img =  document.createElement("img");
                                   img.src = "../img/"+z+".png"
                                   div.appendChild(m);
                                   div.appendChild(k);
                                   div.appendChild(q);
                                   div.appendChild(w);
                                   div.appendChild(e);
                                   div.appendChild(t);
                                   div.appendChild(img);
                                   m.innerText = " TOTAL DEATHS ARE "+ele.deaths;
                                   k.innerText = "TOTAL DISCHARGED PATIENTS ARE "+ele.discharged;
                                   q.innerText = "TOTAL CONFIRMED CASES IN INDIA ARE "+ ele.confirmedCasesIndian;
                                   w.innerText = "TOTAL CONFIRMED CASES FOREIGN ARE "+ele.confirmedCasesForeign;
                                   e.innerText = "TOTAL CONFIRMED CASES ARE "+ele.totalConfirmed;   
                                   t.innerText = "THE MAP OF THE STATE IS AS FOLLOWS"
                                         h= true;  
                                   //confirmedCasesForeign
                                   //confirmedCasesIndian
                                   //discharged
                                   //totalConfirmed
                             }
                            //  else{
                            //        var div=document.querySelector(".info");
                            //        var m = document.createElement("H1");
                            // m.innerHTML ="THE LOCATION DOES NOT EXISTS";
                            // div.appendChild(m);
                            //  }
                            //  else{
                            //         console.log("this place does not exists")
                            //  }
                           // console.log(ele.loc);
                     })
                     if(h==false)
                     {
                            var div=document.querySelector(".info");
                                 var m = document.createElement("H1");
                             m.innerHTML ="THE LOCATION DOES NOT EXISTS";
                            div.appendChild(m);

                            setInterval(()=>{
                                   location.reload(true);
                            },5000);
                            

                     }
                    
              });
              
       }).catch(e=>{
              console.log(e);
         });
}


