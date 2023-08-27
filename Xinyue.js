var objc = JSON.parse($response.body);

if (objc.hasOwnProperty('nickname')) {
    // 修改 data_gfen 的值为 "9999999"
    objc.nickname = "9999999";
}

$done({body: JSON.stringify(objc)});

