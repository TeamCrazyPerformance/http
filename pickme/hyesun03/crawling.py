from typing import Dict
import requests
import json

from bs4 import BeautifulSoup as bs


def crawl_roll_book() -> Dict:
    r = requests.get("https://github.com/TeamCrazyPerformance/http/wiki/%5BGoF-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4%5D-%EC%B6%9C%EC%84%9D%EB%B6%80")

    content = bs(r.text, 'html.parser')

    table = content.find('table')
    thead = table.select('thead > tr > th')
    names = [item.text for item in thead][1:]

    data = {"members": []}
    members = data["members"]
    for i in range(len(names)):
        members.append({"name": names[i], "speak": [], "wiki": [], "absent": []})

    tbody = table.select('tbody > tr')

    for row in tbody:
        row = row.select('tr > td')
        date = row[0].text.replace('.', '-')
        row = row[1:]

        for i in range(len(names)):
            if row[i].text == 'X':
                members[i]["absent"].append(date)

    return data


def to_json(data: Dict) -> None:
    with open('crawling_test.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent='\t')


if __name__ == '__main__':
    data = crawl_roll_book()
    to_json(data)

    with open("crawling_test.json") as file:
        data = json.load(file)
        study_member = data["members"]

        # study_member.json과 똑같은 포맷으로 만들어진 것을 볼 수 있음
        print(study_member)
