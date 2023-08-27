var dxy = JSON.parse($response.body);

dxy.data.gfen = "377182";

$done({body: JSON.stringify(dxy)});

