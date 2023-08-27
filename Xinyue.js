var dxy = JSON.parse($response.body);

if (dxy.hasOwnProperty('gfen')) {
  //修改gfen的值为999999 
dxy.gfen = “999999";
}
$done({ body: JSON.stringify(dxy) });
