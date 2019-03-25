function init() 
{
    let image = document.createElement("img");
    image.src="horror3.png";
    image.style.height="100px";
    image.style.width="160px";
    document.getElementById("new_element").appendChild(image);

    let spans = [document.getElementById("rainbow").getElementsByTagName("span")[0],document.getElementById("rainbow").getElementsByTagName("span")[1],document.getElementById("rainbow").getElementsByTagName("span")[2],document.getElementById("rainbow").getElementsByTagName("span")[3],document.getElementById("rainbow").getElementsByTagName("span")[4],document.getElementById("rainbow").getElementsByTagName("span")[5],document.getElementById("rainbow").getElementsByTagName("span")[6]];
let colors = ["red", "orange","yellow","green","blue","purpe","pink"];

for (var i = spans.length - 1; i >= 0; i--) 
{
	spans[i].style.color = colors[i];
}

var changeSrc = function(event) 
{
    if (event.target.src) 
    {
        let filename = event.target.src.replace(/^.*[\\\/]/, '');

        if(filename == "ue4.png")
        {
            event.target.src = "unity.png";
        }
        else
        {
            event.target.src = "ue4.png";
        }
    }
};
  
  document.getElementById("event").addEventListener("mouseover", changeSrc);


}
init();