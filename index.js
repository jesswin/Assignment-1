var rls=require("readline-sync");
const chalk = require("chalk");
const right=chalk.green;
const wrong=chalk.redBright;
var userName=rls.question("Please Enter Your UserName to Continue: ");
var score=0;
console.log("\nHello "+chalk.bold.magenta(userName)+", Welcome to the Quiz about World's Top Billionaires!");
console.log(chalk.yellowBright("\nInstructions:"));
console.log(chalk.yellowBright("-> There are Total 10 Questions for this Quiz each for 1 point."));
console.log(chalk.yellowBright("-> There will be +1 point for all the correct answers and -1 point for the wrong answers."));
console.log(chalk.yellowBright("-> The "+chalk.green("Green ")+"Color indicates the increment(+1) in points and "+chalk.redBright("Red ")+"Color \nindicates Decrement -1 in points."));
console.log(chalk.cyanBright("\nPlay Carefully,All the Best!"));


first={name:"Jesswin",
      score:9
  },
second={name:"Jack",
      score:8
  }
var highScore=[first,second];
q1={
  question:"Who is the World's Richest Person?",
  answer:"a",
  options:["a)Jeff Bezos","b)Bill Gates","c)Elon Musk"]
};
q2={
  question:"Who is the India's Richest Person?",
  answer:"c",
  options:["a)Gautam Adani","b)Muskesh Ambani","c)Mota Bhai"]
};
q3={
  question:"From the following which Company is Owned by Bill Gates?",
  answer:"a",
  options:["a)Microsoft Co.","b)Amazon","c)Walmart"]
};
q4={
  question:"How much a Richest Person earns per Second?",
  answer:"a",
  options:["a)$2,489","b)$2,356","c)$2,697"]
};
q5={
  question:"From the following which Company is Owned by Jeff Bezos?",
  answer:"b",
  options:["a)Microsoft","b)Amazon","c)SpaceX"]
};
q6={
  question:"In total how many BILLIONAIRES are there in World?",
  answer:"b",
  options:["a)1998","b)2150","c)2355"]
};
q7={
  question:"Tesla and SpaceX are Owned by which one of these?",
  answer:"a",
  options:["a)Elon Musk","b)Warren Buffet","c)Mark Zuckerberg"]
};
q8={
  question:"What is the Approximate Net Worth of Jeff Besoz?",
  answer:"a",
  options:["a)$ 190Billion","b)$ 120Billion","c)$ 99Billion"]
};
q9={
  question:"Around how much is the combined wealth of all BILLIONAIRES of World?",
  answer:"c",
  options:["a)$ 12Trillion","b)$ 15Trillion","c)$ 10Trillion"]
};
q10={
  question:"Who is the World's Second Richest Person?",
  answer:"b",
  options:["a)Jeff Bezos","b)Bill Gates","c)Elon Musk"]
};


var questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer,questions[i].options);
}


function play(q,a,opts){
  console.log(chalk.bold.bgWhite.black("\n"+q));
  for(var i=0;i<opts.length;i++){
  console.log(chalk.bold.bgBlue.white(opts[i]));
 }
  var userAns=rls.question("Please Type the Option(a,b,c) ");
  
  if(userAns==a){
    score++;
    if(score<=0 && score>=-5){
      console.log(right("Try Harder!"));
      console.log("Score: "+right(score));
      console.log("-------------------------"); 
    }
    else if(score<=-6 && score>=-9){
      console.log(right("You are Going Good,Keep Trying!"));
      console.log("Score: "+right(score));
      console.log("-------------------------");
    }
    else if(score>=1 && score<=3){
      console.log(right("Woah!You got it Right!"));
      console.log("Score: "+right(score));
      console.log("-------------------------");
    }
    else if(score>=4 && score<=7){
      console.log(right("You are going really Good!"));
      console.log("Score: "+right(score));
      console.log("-------------------------");
    }
    else if(score>7){
      console.log(right(userName+",You are Awesome!"));
      console.log("Score: "+right(score));
      // pointing HS
      if(highScore[0].score == score){
        console.log(chalk.yellow("Come'On,You are just one point away from breaking High Score"));
      }
      console.log("-------------------------");
    }
  }


  else{
    console.log(wrong("Uh Oh!The Correct Answer is Option "+a.toUpperCase()+" Try Next One"));
    score--;
    console.log("Score: "+wrong(score));
    console.log("-------------------------");
  }
}
for(var i=0;i<highScore.length;i++){
  if(highScore[i].score<score){
    console.log("Hurrah!You have beaten "+chalk.magenta(highScore[i].name +"'s") +" High Score");
    break;
  }
}
console.log(chalk.magentaBright("\n\nYour Final Score is "+score));

console.log(chalk.cyanBright("\nThank You For Playing! Do Come again to Play."));


