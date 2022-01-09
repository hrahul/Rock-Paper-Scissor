const btn = document.querySelectorAll('.btn');
btn.forEach(element=>element.addEventListener('click',playerSelection));

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

    if(c=="ROCK")
    {
        if(p=="ROCK")
        {
            display("TIE");
        }
        else if(p=="PAPER")
        {
            display("Player Won");
        }
        else if(p=="SCISSOR")
        {
            display("Computer Won");
        }
    }
    else if(c=="PAPER")
    {
        if(p=="PAPER")
        {
            display("TIE");
        }
        else if(p=="SCISSOR")
        {
            display("Player Won");
        }
        else if(p=="ROCK")
        {
            display("Computer Won");
        }
    }
    else if(c=="SCISSOR")
    {
        if(p=="SCISSOR")
        {
            display("TIE");
        }
        else if(p=="ROCK")
        {
            display("Player Won");
        }
        else if(p=="PAPER")
        {
            display("Computer Won");
        }
    }
}

function display(str)
{
    document.getElementById('Output').textContent = str;
}