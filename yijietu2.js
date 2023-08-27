var dxy = JSON.parse($response.body);
dxy.info.group_id = "3";
dxy.info.vip = "1";
dxy.info.group = "永久会员";
dxy.info.nickname = "呆萌可爱小奶0";
$done({ body: JSON.stringify(dxy) });
