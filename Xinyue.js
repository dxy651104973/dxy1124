var dxy = JSON.parse($response.body);

dxy.data.gfen = "377182";
dxy.data.point = "37718291";
dxy.data.type = "7";

$done({body: JSON.stringify(dxy)});

