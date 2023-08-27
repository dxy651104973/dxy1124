var dxy = JSON.parse($response.body);

dxy.$Content$.Balance = "377182.52";
dxy.$Content$.AvlBal = "377182.52";
dxy.$Content$.RmbBalance = "377182.52";
dxy.$Content$.BankDepositSumBalance = "377182.52";
dxy.$Content$.CurrentBalance = "377182.52";

$done({body: JSON.stringify(dxy)});
