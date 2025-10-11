
const tags = [
  {"id": 1,"Tag": "健康管理"},
  { "id": 2, "Tag": "健康政策" }, 
  { "id": 3, "Tag": "予防" },
  { "id": 4, "Tag": "運動" },
  { "id": 5, "Tag": "栄養" },
  { "id": 6, "Tag": "睡眠" },
  { "id": 7, "Tag": "統計" },
]

export interface HealthInfoTagProps {
  Tag: string;
}

export const healtTags: HealthInfoTagProps[] = tags;