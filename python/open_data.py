import requests
from bs4 import BeautifulSoup
import pandas as pd
# 関数
def get_soup(url):
  ## HRMLの取得
  res = requests.get(url)
  ## エンコーディングを適切に設定
  res.encoding = res.apparent_encoding
  ## BeautifulSoupでHTMLを解析
  soup = BeautifulSoup(res.text, 'html.parser')
  return soup
def get_soup_target(url, classname):
  ## HRMLの取得
  res = requests.get(url)
  ## エンコーディングを適切に設定
  res.encoding = res.apparent_encoding
  ## BeautifulSoupでHTMLを解析
  soup = BeautifulSoup(res.text, 'html.parser')
  target_soup = soup.find_all(class_=classname)
  ## ターゲットのHTMLを取得
  return target_soup[0]
# 取得対象のURL
url = "https://example.jp/open/data/"
className = "getClassName"
# BeautifulSoupでパース
soup = get_soup(url)
# productItemImgのクラス名があるソースをリストに加える
target_soup = get_soup_target(url, className)
links = target_soup.find_all("a")
data = []
for link in links:
  ## imgタグ内のalt属性
  name = link.find("img").get("alt")
  if name is None:
    continue
  ## リンクのURL
  link_url = link.get("href")
  link_url = "Domain" + link_url
  ## pタグのclass="className"の中のテキスト
  price = link.find(class_="className").get_text(strip=True)
  ## priceで数字の部分だけ抜き取るほかの文字列は除外
  price = price.replace("円/月", "")
  ## imgタグのsrc属性
  img_url = link.find("img").get("src")
  img_url = "Domein" + img_url
  ##　dataに追加
  data.append({"name": name,"rentalPrice": price,"URL": link_url,"imgURL": img_url})
# pandasのデータフレームに変換
df = pd.DataFrame(data)
df.to_csv("healthrent.csv",sep='\t', index=False, encoding="utf-8-sig")