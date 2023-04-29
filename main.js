var inputName=document.getElementById("siteName")
var inputUrl=document.getElementById("siteUrl")
let index;
var bookmarks=[];


if (localStorage.getItem("bookmarks")!=null){
bookmarks=JSON.parse(localStorage.getItem("bookmarks"))
display();
}


function getData(){
  if(isNameValid()==true && isUrlValid()==true){
    var bookdata={
    name : inputName.value ,
    url : inputUrl.value 
  }

  bookmarks.push(bookdata)
  localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
  display();
  }
  else{
    window.alert('invalid name or url')
  }
  
}



function display(){
  var cartona=``;

  for (var i= 0; i<bookmarks.length; i++){
    cartona+=`
    <tr>
    <td>${bookmarks[i].name} </td>
    <td>
    <a href="${bookmarks[i].url}"><button class="btn btn-primary">visit</button></a> 
    </td>
    <td>
   <button onclick="deleteItem(${i})" class="btn btn-danger">delete</button>
    </td>
    <td>
   <button onclick="updateItem(${i})" class="btn btn-warning">update</button>
    </td>
 </tr>`
    
  }
document.getElementById("tableBody").innerHTML=cartona;
}




function deleteItem(item){
  bookmarks.splice(item,1)
  localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
  
  display(bookmarks)
  
}

function updateItem(i){
  inputName.value=bookmarks[i].name
  inputUrl.value=bookmarks[i].url
  document.getElementById("add").style.display="none";
  document.getElementById("Update").style.display="inline";
  index=i;
}

function addUpdate(){
  if(isNameValid()==true && isUrlValid()==true){
    var bookdata={
    name : inputName.value ,
    url : inputUrl.value 
  }

  bookmarks[index]=bookdata;
  localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
  display();
  }
  else{
    window.alert('invalid name or url')
  }
  


}




function searchItems(term){  
   var cartona=``;
  for (let i = 0; i < bookmarks.length; i++) {
    if(bookmarks[i].name.toLowerCase().includes(term.toLowerCase())){
   
    cartona+=`
    <tr>
    <td>${bookmarks[i].name} </td>
    <td>
    <a href="${bookmarks[i].url}"><button class="btn btn-primary">visit</button></a> 
    </td>
    <td>
   <button onclick="deleteItem(${i})" class="btn btn-danger">delete</button>
    </td>
    <td>
   <button onclick=updateItem(${i})" class="btn btn-warning">update</button>
    </td>
 </tr>`
    
  }

    }
    document.getElementById("tableBody").innerHTML=cartona;

  }






  
  function isNameValid(){

      var nameRegx =/^[A-Z][a-z_]{1,}$/

    if(nameRegx.test(inputName.value)==true){

    return true;
  }
  else{
  return false;
  }
  }
  
  
  function isUrlValid(){
    var urlRegx =/^(https:\/\/)?(www\.)[A-Za-z0-9_]{1,}\.[a-z]{3}$/
    if(urlRegx.test(inputUrl.value)==true){
    return true;
  }
  else{
  return false;
  }
  }
  
  