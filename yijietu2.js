var dxy = JSON.parse($response.body);

dxy.info.end_time = "2099-12-27 14:28";
dxy.inf.wallet_sum = "9999.99";
dxy.inf.wallet = "9999.99";
dxy.info.group = "永久会员";
dxy.info.group_id = "3";
dxy.info.vip = "1";
dxy.info.status = "永久会员";

$done({body: JSON.stringify(dxy)});
