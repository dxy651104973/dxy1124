var objc = JSON.parse($response.body);

if (objc.hasOwnProperty('gfen')) {
    // 修改 data_gfen 的值为 "9999999"
    objc.gfen = "9999999";
}

$done({body: JSON.stringify(objc)});

