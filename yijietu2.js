
/*

易截图2：https://apps.apple.com/app/id1633186528

[rewrite_local]
^https?:\/\/(jietu6|1jietu)\.com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/dxy651104973/dxy1124/main/yijietu2.js

[MITM]
hostname = jietu6.com, 1jietu.com

*/
var guding = JSON.parse($response.body);
guding.info.group_id = "3";
guding.info.vip = "1";
guding.info.group = "2099-9-9";
guding.info.nickname = "呆萌可爱小奶0";
$done({ body: JSON.stringify(guding) });
