/*

易截图2：https://apps.apple.com/app/id1633186528

[rewrite_local]
^https?:\/\/(jietu6|1jietu)\.com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/dxy651104973/dxy1123/yijietu2.js

[MITM]
hostname = jietu6.com, 1jietu.com

*/
var guding = JSON.parse($response.body);
info.group_id = "3";
info.vip = "1";
info.group = "呆萌可爱小奶0";
$done({ body: JSON.stringify(guding) });
