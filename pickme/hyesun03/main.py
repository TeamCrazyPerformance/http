from typing import List
import json
import random


def read_json() -> List[list]:
    with open("study_member.json") as file:
        data = json.load(file)
        study_member = data["members"]

        name, speak, wiki, absent = [], [], [], []
        for member in study_member:
            name.append(member["name"])
            speak.append(len(member["speak"]))
            wiki.append(len(member["wiki"]))
            absent.append(len(member["absent"]))

        return [name, speak, wiki, absent]


def pickme() -> List[str]:
    name, speak, wiki, absent = read_json()

    # 현재까지 진행한 스터디 횟수 == 발표 횟수
    total = len(speak)

    # 1 - ((내가 걸린 횟수 - 내가 결석한 횟수) / 여태 진행했던 횟수) 로 가중치 적용
    speak = [1 - (speak[i] - absent[i]) / total for i in range(len(name))]
    wiki = [1 - (wiki[i] - absent[i]) / total for i in range(len(name))]

    # 오늘 결석한 사람
    today_absent = ["윤지수"]

    # 1회차 뽑기
    today_speaker = random.choices(name, speak, k=1)[0]
    today_wikier = random.choices(name, wiki, k=1)[0]

    # 오늘 결석자면 제외, 발표자와 서기가 겹치는것도 제외
    # choices는 리스트를 반환하며 k=1은 한명만 뽑겠다는 뜻
    while today_speaker in today_absent:
        today_speaker = random.choices(name, wiki, k=1)[0]

    while today_wikier in today_absent or today_wikier == today_speaker:
        today_wikier = random.choices(name, wiki, k=1)[0]

    return [today_speaker, today_wikier]


if __name__ == '__main__':
    today_speaker, today_wikier = pickme()

    print("<< 축 하 합 니 다 >>")
    print("발표자:\t", today_speaker)
    print("서기:\t", today_wikier)
    print("<< 축 하 합 니 다 >>")
