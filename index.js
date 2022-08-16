function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`;
}

function mondayWork(event = "go to the office"){
    return `This Monday, I will ${event}.`;
}


// function wrapAdjective(special = "*" ){
//     return `You are ${special} a hard worker ${special}!`
//  }

//  const encouragingPromptFunction = wrapAdjective("*")

function wrapAdjective(style= "*"){
    return function(string= "special"){
      return `You are ${style}${string}${style}!`
    }
  }
 