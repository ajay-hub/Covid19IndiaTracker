    var ss = localStorage.getItem("sname");
    
    var url = "https://api.covid19india.org/data.json";

    $.getJSON(url,function(data){
        console.log(data);

        var total_confirmed,total_active, total_recovered, total_deaths;

        var statename = []
        var statecode = []
        var confirmed = []
        var recovered = []
        var deaths = []
        var active = []
        var statenames_sorted = []

        $.each(data.statewise, function(id,obj){
            if(obj.state == ss)
            {
                statecode.push(obj.statecode)
                statename.push(obj.state)
                active.push(obj.active)
                confirmed.push(obj.confirmed)
                recovered.push(obj.recovered)
                deaths.push(obj.deaths)
            }
        })

        total_confirmed = confirmed[0]
        total_active = active[0]
        total_recovered = recovered[0]
        total_deaths = deaths[0]

        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)
        $("#statename").append(ss,' Covid-19 Status')

       

        //Mortality Rates, Recovery Rate, Active Cases Rate 
        
        var mort_rate, rec_rate, active_rate;

        mort_rate = ((total_deaths/total_confirmed)*100).toFixed(2);
        rec_rate = ((total_recovered/total_confirmed)*100).toFixed(2);
        active_rate = ((total_active/total_confirmed)*100).toFixed(2);

        $('#activerate').append(active_rate,'%')
        $('#recoveryrate').append(rec_rate,'%')
        $('#mortalityrate').append(mort_rate,'%')


        var select = document.getElementById("select")
        statenames_sorted = statename.sort()
        
        for( var i=0;i<statenames_sorted.length;i++){

            var option = document.createElement("option"), 
                txt = document.createTextNode(statenames_sorted[i]);
            option.appendChild(txt);
            option.setAttribute("value", statenames_sorted[i])
            select.insertBefore(option, select.lastChild);
        }
        
        var myChart = document.getElementById("myChart").getContext("2d")

        var chart = new Chart(myChart, {
            type:"bar",
            data: {
                labels: statename,
                datasets: [
                    {
                        label: "Confirmed Cases",
                        data: confirmed,
                        backgroundColor: "#f1cf04",
                    },
                    {
                        label: "Recovered Cases",
                        data: recovered,
                        backgroundColor: "#2ecc71",
                        
                    },
                    {
                        label: "Deceased Cases",
                        data: deaths,
                        backgroundColor: "#e74c3c",
                        
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

    })

districtsbuildTable() 

        function districtsbuildTable(){

            var url = "https://api.covid19india.org/v2/state_district_wise.json";    
            var table = document.getElementById("districtscovidTable");        

            $.getJSON(url,function(data){
                console.log(data)

            for(var i = 1; i <= 38; i ++)
            {   
                if(data[i].state == ss)
                { 
                    /* console.log(data[i].districtData.length) */
                    for(var j=0; j <= data[i].districtData.length; j++ )
                    {
                        var row = ` <tr>
                        <td>${data[i].districtData[j].district}</td> 
                        <td>${data[i].districtData[j].confirmed}</td>
                        <td> ${data[i].districtData[j].active}</td> 
                        <td>${data[i].districtData[j].recovered}</td> 
                        <td>${data[i].districtData[j].deceased}</td> 
                        </tr> `
                        table.innerHTML += row 
                    } 
                }           
            }
                
        })
     }   