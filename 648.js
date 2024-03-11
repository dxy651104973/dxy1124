var dxy = JSON.parse($response.body);

dxy.openid = "77333657DE3ECDA58F81C5112E2C4498";
dxy.token = "E8151D208ED0510AEBCEB3D6C32D069F";
dxy.access_token = "E8151D208ED0510AEBCEB3D6C32D069F";


$done({body: JSON.stringify(dxy)});
