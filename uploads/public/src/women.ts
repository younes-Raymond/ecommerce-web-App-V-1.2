// let root:string = '
// :root 
// {
//   --main-orange: hsl(26, 100%, 55%);
//   --pale-orange:hsl(25, 100%, 94%);
//   --Very-dark-blue: hsl(220, 13%, 13%);
// --Dark-grayish-blue: hsl(219, 9%, 45%);
// --Grayish-blue: hsl(220, 14%, 75%);
// --Light-grayish-blue: hsl(223, 64%, 98%);
// --White: hsl(0, 0%, 100%);
// }
// '
let mainorange:string = 'hsl(26, 100%, 55%)'; 
let paleorange:string = 'hsl(25, 100%, 94%)';
let Verydarkblue:string = 'hsl(220, 13%, 13%)';
let Darkgrayishblue:string = 'hsl(220, 14%, 75%)'; 
let Grayishblue:string = 'hsl(26, 100%, 55%)'; 
let Lightgrayishblue:string = 'hsl(223, 64%, 98%)'; 

let White:string = 'hsl(0, 0%, 100%)';

var bigimage = document.getElementById('big-img-id') as HTMLImageElement;
var smallimag =document.getElementById('small-1') as HTMLImageElement;

const changeToStyleWomen = (prevpicture:any) => {
    
    bigImg.setAttribute("src", "images/image-product-1.jpg");

    // console.log(prevpicture)
    // prevpicture.setAttribute('src','images/user.png');
}
changeToStyleWomen(mainorange);
