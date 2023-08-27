var dxy = JSON.parse($request.body);

dxy.buy_quantity = "1";

$done({body: JSON.stringify(dxy)});
