var imgs=["https://gcdn.emol.cl/mitos-y-enigmas/files/2018/11/Tiger-I-1.jpg","https://tse4.mm.bing.net/th?id=OIP.xBjMy2o3GO3AuLFu-C-UMgHaDt&pid=Api&P=0","https://wallpapercave.com/wp/wp7051564.jpg","https://tse2.mm.bing.net/th?id=OIP.UKYff6gitzkDxRnS93cNewHaEK&pid=Api&P=https://tse2.mm.bing.net/th?id=OIP.UKYff6gitzkDxRnS93cNewHaEK&pid=Api&P=https://tse2.mm.bing.net/th?id=OIP.UKYff6gitzkDxRnS93cNewHaEK&pid=Api&P=https://images8.alphacoders.com/112/1124024.jpg"];
var nomes=["panzer-tiger1","stuka","panzer-tiger2","paanzer4h"];
var indice=0;
function atualiza(){
    if(indice>3){indice=0;}
    document.getElementById("img").src=imgs[indice];
    document.getElementById("name").innerHTML=nomes[indice];
    indice++;    
}
