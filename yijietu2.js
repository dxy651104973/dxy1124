var dxy = JSON.parse($response.body);

dxy.info.group = "永久会员";
dxy.info.group_id = "3";
dxy.info.vip = "1";
dxy.info.status = "呆萌可爱小奶0";

$done({body: JSON.stringify(dxy)});
