/*************************************

项目名称：iCost记账
下载地址：https://t.cn/A6CrFq1p
电报频道：https://t.me/Ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/iCost.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1484262528,
    "receipt_creation_date" : "2023-06-08 12:30:47 Etc/GMT",
    "bundle_id" : "com.gostraight.smallAccountBook",
    "original_purchase_date" : "2023-04-15 13:19:10 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1681564904000",
        "transaction_id" : "300001420308830",
        "is_trial_period" : "false",
        "original_transaction_id" : "300001420308830",
        "purchase_date" : "2023-04-15 13:21:44 Etc/GMT",
        "product_id" : "ForeverVIPPayment",
        "original_purchase_date_pst" : "2023-04-15 06:21:44 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1681564904000",
        "purchase_date_pst" : "2023-04-15 06:21:44 America/Los_Angeles",
        "original_purchase_date" : "2023-04-15 13:21:44 Etc/GMT"
      }
    ],
    "adam_id" : 1484262528,
    "receipt_creation_date_pst" : "2023-06-08 05:30:47 America/Los_Angeles",
    "request_date" : "2023-06-08 12:30:51 Etc/GMT",
    "request_date_pst" : "2023-06-08 05:30:51 America/Los_Angeles",
    "version_external_identifier" : 857533558,
    "request_date_ms" : "1686227451451",
    "original_purchase_date_pst" : "2023-04-15 06:19:10 America/Los_Angeles",
    "application_version" : "20230605085408",
    "original_purchase_date_ms" : "1681564750000",
    "receipt_creation_date_ms" : "1686227447000",
    "original_application_version" : "20230414020816",
    "download_id" : 502350838930233453
  },
  "environment" : "Production",
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1681564904000",
      "transaction_id" : "300001420308830",
      "is_trial_period" : "false",
      "original_transaction_id" : "300001420308830",
      "purchase_date" : "2023-04-15 13:21:44 Etc/GMT",
      "product_id" : "ForeverVIPPayment",
      "original_purchase_date_pst" : "2023-04-15 06:21:44 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1681564904000",
      "purchase_date_pst" : "2023-04-15 06:21:44 America/Los_Angeles",
      "original_purchase_date" : "2023-04-15 13:21:44 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
};

$done({body : JSON.stringify(chxm1023)});
