var dxy = JSON.parse($response.body);

dxy.openid = "CF934B59BC892A373AA8AE4BF66884FA";
dxy.token = "50A636D9415EF7E3D3738AA3FD3F94BA";


$done({body: JSON.stringify(dxy)});
