const btn = document.querySelectorAll('.btn');
btn.forEach(element=>element.addEventListener('click',playerSelection));
let Pcount=0;
let Ccount=0;
let count=0;
function playerSelection(e)
{
    console.log(e.target.innerText);
    let ps = e.target.innerText;
    playRound(ps);
}



function computerPlay(){
   let s = Math.floor(Math.random() * 3);
   if(s==0)
   {
       return ("rock");
   }
   else if(s==1)
   {
       return ("paper");
   }
   else if(s==2)
   {
       return ("scissor");
   }

}

function playRound(p) {
    let c = computerPlay();
    console.log(c);
    c=c.toUpperCase();
    p=p.toUpperCase();

    count++;

    if(c=="ROCK")
    {
       
        if(p=="PAPER")
        {
            Pcount++;
        }
        else if(p=="SCISSOR")
        {
            Ccount++;
        }
    }
    else if(c=="PAPER")
    {
        if(p=="SCISSOR")
        {
            Pcount++;
        }
        else if(p=="ROCK")
        {   
            Ccount++;
        }
    }
    else if(c=="SCISSOR")
    {
        if(p=="ROCK")
        {
            Pcount++;
        }
        else if(p=="PAPER")
        {
            Ccount++;
        }
    }
    display(count,Pcount,Ccount);

}

function display(count,Pcount,Ccount)
{ 
    if(count<=5)
    {
        document.getElementById('count').textContent = "Round Count : " + count;
        document.getElementById('Pcount').textContent = "Player Win Count : " + Pcount;
        document.getElementById('Ccount').textContent = "Computer Win Count : " + Ccount;
    }
    else
    {

    }
    

}