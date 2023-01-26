window.onload = function(){
    HandleRefresh();
}

function HandleRefresh(){
    var url = "https://proxyhan123.herokuapp.com/"+
              "http://openAPI.seoul.go.kr:8088/506b417748646e723934486d716a47/json/SJWArtgroups/1/100";
    $.getJSON(url,updateData);
}



function updateData(str){
    var dataDiv = document.getElementById("dataDiv");
    var data = str.SJWArtgroups.row;
    var watchButton = document.getElementById("what");

    watchButton.onclick = function(){
        $("div").children().remove()
        var list = document.getElementById("list");
        gus = list.options[list.selectedIndex].value;
        for (var i=0;i < data.length;i++){
            if(gus==data[i].ART_GROUP_NAME){
                var div = document.createElement("div");
                div.setAttribute('class', "dataItem");

                div.innerHTML = "<br>*공연명 : " + data[i].TITLE+
                
                                "<br>*공연 장소 : " + data[i].PLACE_NAME+
                                "<br>*시간 : " + data[i].PLAY_TIME+
                                "<br>*티켓 정보 : " + data[i].TICKET_INFO+
                                "<br>*======================================================================================================================================"+
                                "<br>*프로그램 정보 " + data[i].DETAIL+
                                "<br>*======================================================================================================================================"+
                                "<br>*출연진 소개 " + data[i].CAST_INFO+
                                "<br>*======================================================================================================================================"
                
                dataDiv.appendChild(div);
                if(dataDiv.childElementCount==0){
                    dataDiv.appendChild(div);
                }
                else{
                    dataDiv.insertBefore(div,dataDiv.firstChild);
                }
            
            }
        }
    }
}