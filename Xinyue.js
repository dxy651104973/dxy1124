var dxy = JSON.parse($response.body);

if (dxy.hasOwnProperty('gfen')) {
    // 修改 gfen 的值为 "9999999"
    dxy.gfen = "9999999";
}
$done({ body: JSON.stringify(dxy) });
