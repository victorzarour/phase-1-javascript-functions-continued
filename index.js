// code your solution here
function saturdayFun(activity) {
    if (typeof activity === "undefined") {
      return 'This Saturday, I want to roller-skate!';
    }
    else {
      return `This Saturday, I want to ${activity}!`
    }
  }

  function mondayWork(activity) {
    if (typeof activity === "undefined") {
      return 'This Monday, I will go to the office.';
    }
    else {
      return `This Monday, I will ${activity}.`
    }
  }

  function wrapAdjective(visual = "*") {
    return function inner(adjective = "special"){
        return `You are ${visual}${adjective}${visual}!`
    }
  }

