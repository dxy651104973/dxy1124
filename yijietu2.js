
/*

易截图2：https://apps.apple.com/app/id1633186528

[rewrite_local]
^https?:\/\/(jietu6|1jietu)\.com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/dxy651104973/dxy1124/main/yijietu2.js

[MITM]
hostname = jietu6.com, 1jietu.com

*/
var dxy = JSON.parse($response.body);
dxy.info.group_id = "3";
dxy.info.vip = "1";
dxy.info.group = "2099-9-9";
dxy.info.nickname = "呆萌可爱小奶0";
$done({ body: JSON.stringify(dxy) });
