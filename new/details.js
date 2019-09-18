var pagecounter = 1;
var personcontainer = document.getElementById("person");
var butty = document.getElementById("btn");
butty.addEventListener("click",function(){

    var xhr =new XMLHttpRequest();
    xhr.open('GET','app.json');
    xhr.onload = function(){
        var per = JSON.parse ( xhr.responseText);
        console.log(per[0]);
        HTML(per);
    };
    xhr.send();

    if(pagecounter>1)
    {
        btn.classList.add("hide-me")
    }
});
function HTML(data){
    var htmlstring = "";
 for(i=0;i<data.length;i++){
     htmlstring += "<p>"+data[i].name+"is a gender with "+data[i].gender+"</p>"
     }


        personcontainer.insertAdjacentHTML('beforeend',htmlstring);
    
}