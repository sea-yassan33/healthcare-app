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

## json生成スクリプト
```python
## healthinfo_tableデータカラム
healthinfo_columns = ["id","category","url","title","description","tags","date","delet_flag","created_at","updated_at"]
session = databases.create_new_session()
list = session.query(models.Healthinfo_table).all()
## df作成
df = pd.DataFrame([vars(d) for d in list])
## モデルに定義したカラムだけ表示
df = df[healthinfo_columns]
## 日付を文字列に変換
datastr = datetime.now().strftime('%Y%m%d')
file_name ='../../public/data/'
## nullは""に置換
df = df.fillna("")
## json用のリストを作成
json_list=[]
for index, row in df.iterrows():
  tag_list = row["tags"].split(",")
  ## tagsをリストの中の値の空白を削除
  tag_list = [tag.strip() for tag in tag_list if tag.strip()]
  json_list.append({
    "id": row["id"],
    "category": row["category"],
    "url": row["url"],
    "title": row["title"],
    "description": row["description"],
    "tags": tag_list,
    "date": row["date"].strftime('%Y-%m-%d %H:%M:%S'),
    "delet_flag": row["delet_flag"],
    "created_at": row["created_at"].strftime('%Y-%m-%d %H:%M:%S'),
    "updated_at": row["updated_at"].strftime('%Y-%m-%d %H:%M:%S')
  })
## jsonファイルに書き換える
## ディレクトリが存在しない場合は作成
if not os.path.exists(f'{file_name}'):
  os.makedirs(f'{file_name}')
## jsonファイルに書き出し
with open(f'{file_name}/healthinfo.json', 'w',encoding='utf-8') as f:
    json.dump(json_list, f,ensure_ascii=False, indent=4)
```

# 【筋トレ一覧】
- 筋トレ一覧を取得

## URL
```
GET
/public/data/muscle_list.json
```

## レスポンス例
```json
[
    {
        "id": 1,
        "name": "フロントレイズ",
        "muscleKey": "shoulder",
        "muscleLabel": "肩",
        "mainMuscle": "三角筋前部",
        "videoUrl": "https://www.youtube.com/embed/55HUwh5Oy8A",
        "delet_flag": 0,
        "created_at": "2025-09-21 22:35:01",
        "updated_at": "2025-09-21 22:35:01"
    },
    ・・・
]
```

## 定義

|No|論理名|データ型|必須項目|値|備考|
|----:|:---|:---|:---|:---|:---|
|1|id|int|●|||
|2|name|string|●|||
|3|muscleKey|string|●|||
|4|muscleLabel|string|●|||
|5|mainMuscle|string||||
|6|videoUrl|string||||
|7|delet_flag|int|●||1:非表示データ|
|8|created_at|string|●|YYYY-MM-DD hh:mm:ss||
|9|updated_at|string|●|YYYY-MM-DD hh:mm:ss||
|||||||

## json生成スクリプト
```python
## muscle_tableデータカラム
muscle_columns = ["id","name","muscleKey","muscleLabel","mainMuscle","youtubeID","delet_flag","created_at","updated_at"]
session = databases.create_new_session()
list = session.query(models.Muscle_table).all()
## df作成
df = pd.DataFrame([vars(d) for d in list])
## モデルに定義したカラムだけ表示
df = df[muscle_columns]
## 日付を文字列に変換
datastr = datetime.now().strftime('%Y%m%d')
file_name ='../../public/data/'
## nullは""に置換
df = df.fillna("")
## json用のリストを作成
json_list=[]
for index, row in df.iterrows():
  youtube_url = 'https://www.youtube.com/embed/'+row["youtubeID"]
  json_list.append({
    "id": row["id"],
    "name": row["name"],
    "muscleKey": row["muscleKey"],
    "muscleLabel": row["muscleLabel"],
    "mainMuscle": row["mainMuscle"],
    "videoUrl": youtube_url,
    "delet_flag": row["delet_flag"],
    "created_at": row["created_at"].strftime('%Y-%m-%d %H:%M:%S'),
    "updated_at": row["updated_at"].strftime('%Y-%m-%d %H:%M:%S')
  })
## jsonファイルに書き換える
## ディレクトリが存在しない場合は作成
if not os.path.exists(f'{file_name}'):
  os.makedirs(f'{file_name}')
## jsonファイルに書き出し
with open(f'{file_name}/muscle_list.json', 'w',encoding='utf-8') as f:
    json.dump(json_list, f,ensure_ascii=False, indent=4)
```