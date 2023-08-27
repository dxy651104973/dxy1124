var objc = JSON.parse($response.body);

if (objc.hasOwnProperty('group')) {
    // 修改 data_gfen 的值为 "9999999"
    objc.group = "永久会员";
}

objc.info.group_id = "3";
objc.info.vip = "1";
objc.info.nickname = "呆萌可爱小奶0";

$done({body: JSON.stringify(objc)});
