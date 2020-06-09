    (function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);
    var url = "https://api.covid19india.org/data.json";

    $.getJSON(url,function(data){
        console.log(data);

        var total_confirmed,total_active, total_recovered, total_deaths;

        var statename = []
        var statecode = []
        var confirmed = []
        var recovered = []
        var active = []
        var deaths = []
        var statenames_sorted = []
        var ss = []

        ss.push(data.statewise)

        $.each(data.statewise, function(id,obj){

                statecode.push(obj.statecode)
                active.push(obj.active)
                statename.push(obj.state)
                confirmed.push(obj.confirmed)
                recovered.push(obj.recovered)
                deaths.push(obj.deaths)     
        })

        statename.shift()
        statecode.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        
       console.log(data.statewise)

        total_confirmed = data.statewise[0].confirmed
        total_active = data.statewise[0].active
        total_recovered = data.statewise[0].recovered
        total_deaths = data.statewise[0].deaths

        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)

        var select = document.getElementById("select")
        statenames_sorted = statename.sort()
        
        for( var i=0;i<statename.length;i++){

            var option = document.createElement("option"), 
                txt = document.createTextNode(statenames_sorted[i]);
            option.appendChild(txt);
            option.setAttribute("value", statenames_sorted[i])
            select.insertBefore(option, select.lastChild);

        }
        
        var myChart = document.getElementById("myChart").getContext("2d")

        /* var chart = new Chart(myChart, {
            type:"bar",
            data: {
                labels: statecode,
                datasets: [
                    {
                        label: "Confirmed Cases",
                        data: confirmed,
                        backgroundColor: "#f1cf04",
                        minBarLength: 100
                    },
                    {
                        label: "Recovered Cases",
                        data: recovered,
                        backgroundColor: "#2ecc71",
                        minBarLength: 100
                    },
                    {
                        label: "Deceased Cases",
                        data: deaths,
                        backgroundColor: "#e74c3c",
                        minBarLength: 100
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }]
                }
            }
        })

        
        */
        
    })

function fn()
        {
            var select = document.getElementById('select').value;
            localStorage.setItem("sname", select);
            if(select!="default")
            {
                window.open('statestats.html', '_blank'); 
            } 
            else
            {
                window.alert("Please select a state!");
            }
        }

buildTable() 

        function buildTable(){

            var url = "https://api.covid19india.org/data.json";

            $.get(url,function(data){
            
            var table = document.getElementById("covidTable");
 
            for(var i = 1; i <= 38; i ++)
            {
                var row = ` <tr>
                 <td>${data.statewise[i].state}</td> 
                 <td>${data.statewise[i].confirmed}</td>
                 <td> ${data.statewise[i].active}</td> 
                 <td>${data.statewise[i].recovered}</td> 
                 <td>${data.statewise[i].deaths}</td> 
                 </tr> `
                table.innerHTML += row             
            }
        })
     }   

function starttest(){
    window.open('selfassq1.html','_self');
}

 function qt1yes(){
     window.open('fresults.html',"_self");
 } 

 function qt1no(){ 
         window.open('selfassq2.html',"_self"); 
     }

function qt2yes(){
window.open('selfassq4.html',"_self");
    } 

function qt2no(){ 
    window.open('selfassq3.html',"_self"); 
    }

function qt3yes(){
    window.open('selfassq4.html',"_self");
    } 

function qt3no(){ 
        window.open('sresults.html',"_self"); 
    }        

function qt4yes(){
window.open('fresults.html',"_self");
    } 

function qt4no(){ 
window.open('selfassq5.html',"_self"); 
    }

function qt5yes(){
window.open('fresults.html',"_self");
    } 

function qt5no(){ 
    window.open('selfassq6.html',"_self"); 
    }

function qt6yes(){
    window.open('fresults.html',"_self");
    } 

function qt6no(){ 
        window.open('mresults.html',"_self"); 
    }            
        


