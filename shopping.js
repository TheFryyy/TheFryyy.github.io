function init()
{

}

function addItem()
{
    var important = document.getElementById("important");
    var groceries = document.getElementById("groceries");
   let li = document.createElement("li");
   let text = document.createTextNode("text");
   li.appendChild(text);
   li.textContent = document.getElementById("input").value;

   if(important.checked)
   {
       li.style.color= "red";
   }

   if(groceries.checked)
   {
       li.style["text-decoration"] = "underline";
   }
   

   document.getElementById("my_list").appendChild(li);

}

function rmItem()
{

   var list =document.getElementById("my_list");
   list.removeChild(list.childNodes[document.getElementById("rm").value]);
}
