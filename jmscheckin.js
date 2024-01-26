const url = `https://bot.impian.eu/checkin?code=618745&id=1448862328&first_name=cherish&username=cherishyue&photo_url=https%3A%2F%2Ft.me%2Fi%2Fuserpic%2F320%2FaGhc7vsa8a7jZ7n3pXL9Wig04-AICTvpSTF6mj1kcFw.jpg&auth_date=1706261267&hash=0dd934f53c0e34c499655148d1dd9e1176e41c8b5876b7f8df72d3faf9ca69a7`;
const method = `GET`;
const headers = {
'Cookie' : `cf_clearance=pH7yXKC8dZlR8W7U2twk66h5b97lrG4cAX0wDvuJTlU-1706023461-1-ARb+QjTcRYsxhlkTr+VGr/VoA+hCA4eLqulv7pYaZnqJfKKnZUlxP4x4a6PNsyaIMcWhPfuODn8emPexPeWlB6I=`,
'Sec-Fetch-Mode' : `navigate`,
'Connection' : `keep-alive`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `bot.impian.eu`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1.1 Mobile/15E148 Safari/604.1`,
'Sec-Fetch-Site' : `none`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Sec-Fetch-Dest' : `document`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
