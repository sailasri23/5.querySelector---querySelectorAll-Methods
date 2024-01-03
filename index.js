/*Deliverable:
1. Implement the code as shown in the video.
2. Use id as query to select the basket heading and set its color to brown.
3. Change the background color of even fruit items to red and change their text color to white.
*/
//queryselector is used to grab only single element
const mainHeading = document.querySelector("#main-heading")
mainHeading.style.textAlign="right"
//queryselectorall is used to grab all the elements with same class/tag
const basket= document.querySelector("#basket-heading") //# is used to indicate id
basket.style.color="brown"
//const fruits=document.querySelector(".fruits")
//fruits.style.color="red"
//fruits.style.padding="30px"
//fruits.style.margin="30px"
//fruits.style.width="50%"
//fruits.style.borderRadius="5px"
/*const fruititems = document.querySelector(".fruit") //only style is applied for first one
fruititems.style.backgroundColor="red"*/
/*const fruititems = document.querySelector(".fruit:last-child") //applied for last one
fruititems.style.backgroundColor="red"*/
const fruititems=document.querySelectorAll(".fruit")
for(let i=0;i<fruititems.length;i++){
    if(i%2==0){
     fruititems[i].style.backgroundColor="lightgray"
    }

    }
const odd = document.querySelectorAll(".fruit:nth-child(even)")
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "brown"
    odd[i].style.color="white"

}
const fruititem= document.querySelectorAll(".fruit");
for (let i = 0; i < fruititem.length; i++) {
    fruititem[i].style.border = "2px solid black"; // Example border: 2px solid black
}

   
    


