var dxy = JSON.parse($response.body);

dxy.buy_quantity = "1";

$done({body: JSON.stringify(dxy)});
