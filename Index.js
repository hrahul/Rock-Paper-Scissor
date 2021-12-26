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

function playRound() {
    let p = document.getElementById("t").value;
    console.log(p);
    let c = computerPlay();
    console.log(c);
    c=c.toUpperCase();
    p=p.toUpperCase();

    if(c=="ROCK")
    {
        if(p=="ROCK")
        {
            console.log("TIE");
        }
        else if(p=="PAPER")
        {
            console.log("Player Won");
        }
        else if(p=="SCISSOR")
        {
            console.log("Computer Won");
        }
    }
    else if(c=="PAPER")
    {
        if(p=="PAPER")
        {
            console.log("TIE");
        }
        else if(p=="SCISSOR")
        {
            console.log("Player Won");
        }
        else if(p=="ROCK")
        {
            console.log("Computer Won");
        }
    }
    else if(c=="SCISSOR")
    {
        if(p=="SCISSOR")
        {
            console.log("TIE");
        }
        else if(p=="ROCK")
        {
            console.log("Player Won");
        }
        else if(p=="PAPER")
        {
            console.log("Computer Won");
        }
    }
}