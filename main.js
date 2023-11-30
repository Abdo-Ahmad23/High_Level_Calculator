let resault=document.getElementById("resault");
let inputBtn=document.querySelectorAll("button");
let arrayOfHistory=[];
let cnt=0;
// check if this is operator
let operators='-+/*';
let isOperator=(ch)=>{
    for(let i=0;i<operators.length;i++)
    if(ch==operators[i])return 1;
    return 0;
}
let validEqual=(s)=>{
    let ok1=0,ok2=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=='+' || s[i]=='-' || s[i]=='/' || s[i]=='*')ok1+=1;
        else ok2+=1;
    }
    return (ok2>ok1);

}
let isNumber=(d)=>{
    return(d>='0'&&d<='9');
}
let btnDanger=document.getElementById("btnDanger");
// toggle the accordian 
let myAcordion=document.getElementById("myAcordion");
btnDanger.addEventListener("click",function(event){
    myAcordion.classList.toggle("d-none");
    btnDanger.classList.toggle("rotated");
});
for(let i=0;i<inputBtn.length;i++)
{
    
    inputBtn[i].addEventListener("click",function(event){
        if(isNumber(inputBtn[i].value))
        {
            resault.value+=inputBtn[i].value;
        }
        else if(isOperator(inputBtn[i].value))
        {
            if(isOperator(resault.value[resault.value.length-1]))
            {
                // let prev=resault.value;
                // resault.value=prev.substr(0,prev.length-1);
            }
            else
            {
                resault.value+=inputBtn[i].value;

            }
        }
        else if(inputBtn[i].value=='sqrt')
        {
            // if(resault.value='')resault.value=0;
            let resNum=Math.sqrt(+resault.value);
            // console.log(resNum);
            resault.value=resNum.toString();
        }
        else if(inputBtn[i].value=='cbrt')
        {
            let num=+resault.value;
            // console.log(num);
            let resNum=Math.cbrt(+resault.value);
            // console.log(resNum);
            resault.value=resNum;
        }
        else if(inputBtn[i].value=='log10')
        {
            let num=+resault.value;
            // console.log(num);
            let resNum=Math.log10(+resault.value);
            // console.log(resNum);
            resault.value=resNum;
        }
        else if(inputBtn[i].value=='log2')
        {
           let num=+resault.value;
            // console.log(num);
            let resNum=Math.log2(+resault.value);
            // console.log(resNum);
            resault.value=resNum;
        }
        else if(inputBtn[i].value=='sin')
        {
            let degrees=+resault.value;
            let radians = degrees * Math.PI/180.0;
            let resNum=(Math.sin(radians));
            // Math.log2(+resault.value);
            // console.log(resNum);
            resault.value=resNum;
        }
        else if(inputBtn[i].value=='cos')
        {
            let degrees=+resault.value;
            let radians = degrees * Math.PI/180.0;
            let resNum=(Math.cos(radians));
            // Math.log2(+resault.value);
            // console.log(resNum);
            resault.value=resNum;
        }
        else if(inputBtn[i].value=='tan')
        {
            let degrees=+resault.value;
            let radians = degrees * Math.PI/180.0;
            let resNum=(Math.tan(radians));
            // Math.log2(+resault.value);
            // console.log(resNum);
            resault.value=resNum;
        }
        else if(inputBtn[i].value=='pow')
        {
            let num1='',num2='';
            let ok=1;
            for(let j=0;j<resault.value.length;j++)
            {
                if(ok)num1+=resault.value[j];
                else num2+=resault.value[j];
                if(resault.value[j]==' ')ok=0;
            }
            // num1=+parseFloat(num1);
            // num2=parseFloat(num2);
            let x=10;
            let y=10;
            x=+parseInt(num1);
            x=+parseInt(num2);
            console.log(num2);
            resault.value=Math.pow(num1,num2);

        }
        else if(inputBtn[i].value=='space')resault.value+=' ';
       else if(inputBtn[i].value=='='){
            if(validEqual(resault.value) && isNumber(resault.value[resault.value.length-1]))
            {
                let past=resault.value;
                resault.value=eval(resault.value);
                arrayOfHistory.push(`${past} = ${resault.value}`);
                localStorage.setItem(cnt,`${past} = ${resault.value}`);

                cnt++;

            }
            else 
            {
                // let prev=resault.value;
                // resault.value=prev.substr(0,prev.length-1);
            }
        }
        else if(inputBtn[i].value=='back')
        {
            if(resault.value=='')
            {
                // alert(`You don't have a previous number to back to !!`);
            }
            else
            {
                resault.value=resault.value.substr(0,resault.value.length-1);
                
            }
        }
        else if(inputBtn[i].value=='clear')
        {
            resault.value=null;
        }
        
    });
}
let validEquationPow2=(a,b,c)=>{
    let arrayOfSolve=[];
    if(b*b-4*a*c<0)
    {
    // let part1Res1=(-1*b+Math.sqrt(-1*b*b+4*a*c))/(2*a);
    let part1Res1=(-1*b)/(2*a);
    let part2Res1=(Math.sqrt(-1*b*b+4*a*c))/(2*a);
    arrayOfSolve.push(`${part1Res1.toFixed(2)} + ${part2Res1.toFixed(2)} i`);
    arrayOfSolve.push(`${part1Res1.toFixed(2)} - ${part2Res1.toFixed(2)} i`);

    if(arrayOfSolve.length>1 && arrayOfSolve[0]==arrayOfSolve[1])arrayOfSolve=arrayOfSolve.pop();
    // console.log(arrayOfSolve);
    return arrayOfSolve;
    }
    else {
    let res1=(-1*b+Math.sqrt(b*b-4*a*c))/(2*a);
    arrayOfSolve.push(res1.toFixed(2));
    let res2=(-1*b-Math.sqrt(b*b-4*a*c))/(2*a);
    arrayOfSolve.push(res2.toFixed(2));
    if(arrayOfSolve.length>1 && arrayOfSolve[0]==arrayOfSolve[1])arrayOfSolve=arrayOfSolve.pop();
    // console.log(arrayOfSolve);
    return arrayOfSolve;

    }

    
}
// console.log(validEquationPow2(1,3,2));

let firstEquation=document.querySelectorAll("#firstEquation input");
let btnDanger1=document.getElementById("btnDanger1");
let solveGroup1=document.getElementById("solveGroup1");
let inputF1= +firstEquation[0].value;
let inputF2= +firstEquation[1].value;
let inputF3= +firstEquation[2].value;
// console.log(inputF1);
// validEquationPow2(1,2,1);
// console.log(validEquationPow2(+firstEquation[0].value,+firstEquation[1].value,+firstEquation[2].value));
// console.log(validEquationPow2(1,3,2));

btnDanger1.addEventListener("click",function(){
    solveGroup1.classList.toggle("d-none");
    btnDanger1.classList.toggle("rotated");
    
    solveGroup1.innerHTML=`
    <div class="bg-secondary text-white solve-group" style="font-size:20px;">Group of solve : { ${validEquationPow2(+firstEquation[0].value,+firstEquation[1].value,+firstEquation[2].value)} }</div>
`;
});
// second Equation
let validEquationPow3=(a,b,c,d)=>{
    let arrayOfSolve=[];
    let fPart=2*b*b*b-9*a*b*c+27*a*a*d;
    let sPart=b*b-3*a*c;
    ///
    let sq3=Math.sqrt(3)/(6*a)+1/(6*a);
    let fImagineVar=`${sq3}+${sq3.toFixed(2)}*i`;
    let sImagineVar=`${sq3}-${sq3.toFixed(2)}*i`;
    let tPart=Math.cbrt(fPart+Math.sqrt(fPart*fPart-4*sPart*sPart*sPart)/2)-
    (1/(2*a))*Math.cbrt(fPart-Math.sqrt(fPart*fPart-4*sPart*sPart*sPart)/2);
    ///
    let fourPart=Math.cbrt(fPart+Math.sqrt(fPart*fPart-4*sPart*sPart*sPart)/2)-
    (1/(2*a))*Math.cbrt(fPart-Math.sqrt(fPart*fPart-4*sPart*sPart*sPart)/2);
    //
    arrayOfSolve[0]=-1*(b/(3*a))-(1/(3*a))*(tPart+fourPart);
    arrayOfSolve[0]=arrayOfSolve[0].toFixed(2);
    /// second roote

    return arrayOfSolve;
    
}
for(let i=0;i<firstEquation.length;i++)
{
    firstEquation[i].addEventListener("keyup",validEquationPow2);
}
// validEquationPow3(1,2,3,4);
let secondEquation=document.querySelectorAll("#secondEquation input");
let btnDanger2=document.getElementById("btnDanger2");
let solveGroup2=document.getElementById("solveGroup2");
// console.log(inputF1);
// validEquationPow2(1,2,1);
// console.log(validEquationPow2(+firstEquation[0].value,+firstEquation[1].value,+firstEquation[2].value));
// console.log(validEquationPow2(1,3,2));

btnDanger2.addEventListener("click",function(){
    solveGroup2.classList.toggle("d-none");
    btnDanger2.classList.toggle("rotated");
    solveGroup2.innerHTML=`
    <div class="bg-secondary text-white solve-group" style="font-size:20px;">Group of solve : {  ${validEquationPow3(+secondEquation[0].value,+secondEquation[1].value,+secondEquation[2].value,+secondEquation[3].value)}  }</div>
`;
});
let iconShow=document.getElementById("iconShow");
let iconGroup=document.querySelector(".iconGroup");
let allHistory=document.getElementById("allHistory");
for(let i=0;i<secondEquation.length;i++)
{
    secondEquation[i].addEventListener("keyup",validEquationPow3);
}
///
// iconShow.addEventListener("click",function(event){
//     /// show history
//         if(iconShow.classList.contains("fa-eye")){
//             iconShow.classList.replace("fa-eye","fa-eye-slash");
//             if(localStorage.length>0)
//             noHistory.classList.add("d-none");
//             Object.keys(localStorage).forEach(key => {
//                 allHistory.innerHTML+=`
//                 <div class="noHistory bg-danger text-white text-center m-2" id="noHistory">
//                 ${localStorage.getItem(key)}
//                   </div>
//                 `;
//                 // console.log(`${key} - ${localStorage.getItem(key)}`);
//               });
//         }
//         else 
//         {
//             iconShow.classList.replace("fa-eye-slash","fa-eye");

//         }
    
    
// });

// let allHistory=document.getElementById("allHistory");
// console.log(allHistory);
// localStorage.setItem("history",cnt);
// console.log(`ArrayOfSolve = ${arrayOfHistory.length}`);
// localStorage.clear();
// Object.keys(localStorage).forEach(key => {
//     console.log(`${key} - ${localStorage.getItem(key)}`);
//   });
// let accordionButton=document.getElementById("accordionButton");
// let accordionItem=document.getElementById("accordionItem");
// accordionBody.addEventListener("click",function(){
//     if(accordionBody.style.height==0)
//     {
//         accordionBody.style.height=accordionBody.scrollHeight+'px';
//     }
//     else accordionBody.style.height=null;
// });
