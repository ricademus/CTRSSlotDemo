function stakeUp() {
      initialStake = initialStake + 1;
      if(initialStake > 9) {initialStake = 9}
    stakeAmount.text =initialStake.toString();
    refresh();
}

function stakeDown() {
    initialStake = initialStake - 1;
    if(initialStake < 1) {initialStake = 1}
    stakeAmount.text =initialStake.toString();
    refresh();
}

function balanceUpdate(won) {
    balance = balance + won;
    balanceAmount.text = balance.toString();
    refresh();
}

function stakeDeduction() {
    balance = balance - initialStake;
    balanceAmount.text = (balance - initialStake).toString();
    refresh();
}

function calculateWinnings() {
    var winningsAmount = 0;
    for(var i=0; i<winlines.length; i++) {
        if(rngCall[winlines[i][0]-1]==rngCall[winlines[i][1]-1] && rngCall[winlines[i][1]-1]==rngCall[winlines[i][2]-1]
            && rngCall[winlines[i][2]-1]==rngCall[winlines[i][3]-1]
            && rngCall[winlines[i][3]-1]==rngCall[winlines[i][4]-1]) {
            console.log("Won on the Line" + i.toString());
            switch (rngCall[winlines[i][0]-1]) {
                case 1:
                        winningsAmount = initialStake * 2;
                        balanceUpdate(winningsAmount);
                    break;
                case 2:
                    winningsAmount = initialStake * 5;
                    balanceUpdate(winningsAmount);
                    break;
                case 3:
                    winningsAmount = initialStake * 10;
                    balanceUpdate(winningsAmount);
                    break;
            }
        }
    }
    refresh();
  //  winner.text = winningsAmount.toString();
}