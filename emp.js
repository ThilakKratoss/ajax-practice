var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
if(xhr.readyState === 4){
var employee = JSON.parse(xhr.responseText);
var statusHTML = '<ul class = "bulleted">';
for(i=0;i<employee.length;i++){
   if(employee[i].inoffice === true){
       statusHTML += '<li class ="in">';
   }else{
       statusHTML += '<li class = "out">';
   }
   statusHTML += employee[i].name;
   statusHTML += '</li>';
}
statusHTML += '</ul>';
document.getElementById('employeelist').innerHTML = statusHTML;
}
};
xhr.open('GET','project.json');
xhr.send();
var rooms = new XMLHttpRequest();
rooms.onreadystatechange = function(){
if(rooms.readyState === 4){
var employees = JSON.parse(rooms.responseText);
var statusHTML = '<ul class = "bulleted">';
for(i=0;i<employees.length;i++){
   if(employees[i].inoffice === true){
       statusHTML += '<li class ="empty">';
   }else{
       statusHTML += '<li class = "full">';
   }
   statusHTML += employees[i].room;
   statusHTML += '</li>';
}
statusHTML += '</ul>';
document.getElementById('roomlist').innerHTML = statusHTML;
}
};
rooms.open('GET','room.json');
rooms.send();
