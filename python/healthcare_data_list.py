import sys
from datetime import datetime
import pandas as pd
import json
import os
## DB接続関連の情報をインポート
# import models 
# import databases
sys.dont_write_bytecode = True
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