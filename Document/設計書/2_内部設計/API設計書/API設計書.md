# API設計書

# 【健康情報一覧】
- 健康情報一覧を取得

## URL
```
GET
/public/data/healthinfo.json
```

## レスポンス例
```json
[
    {
        "id": 1,
        "category": "トピック",
        "url": "https://tokuteikenshin-hokensidou.jp/news/2025/014059.php",
        "description": "「隠れた脂肪の蓄積が心臓の老化を加速させる」という記事では、英国の研究で腸の周りや肝臓・筋肉に蓄積した異所性脂肪（隠れ脂肪）が心臓年齢を実年齢よりも高めることが判明。BMIでは判断できない脂肪の部位や性差が影響を与えるとのこと。",
        "tags": [
            "HealthDay News",
            " 予防",
            " 健診・検診"
        ],
        "date": "2025-09-08 00:00:00",
        "delet_flag": 0,
        "created_at": "2025-09-11 08:53:03"
    },
```

## 定義

|No|論理名|データ型|必須項目|値|備考|
|----:|:---|:---|:---|:---|:---|
|1|id|int|●|||
|2|category|string|●|||
|3|url|string|●|||
|4|title|string|●|||
|5|description|string|||MCPより生成|
|6|tag|list[string]||||
|7|date|string||YYYY-MM-DD hh:mm:ss|記事作成日|
|8|delet_flag|int|●||1:非表示データ|
|9|created_at|string|●|YYYY-MM-DD hh:mm:ss||
|10|updated_at|string|●|YYYY-MM-DD hh:mm:ss||
|||||||

## SQL
[healthcare_data_list.py](../../../../python/healthcare_data_list.py)

- Select
```md
id
category
url
title
description
tags
date
delet_flag
created_at
updated_at
```

- From
```md
healthinfo_table
```