from typing import List
import json
import random
import click


def read_json() -> List[list]:
    """스터디 참석자에 대한 정보가 담긴 json 파일을 읽어옵니다."""

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


@click.command()
@click.option('--today_absent', prompt="오늘 결석한 사람들", help="발표자와 서기를 뽑습니다.")
def pickme(today_absent: str) -> None:
    """오늘 결석자에 대한 정보를 인자로 받고, 발표자와 서기를 뽑습니다."""

    name, speak, wiki, absent = read_json()
    today_absent = today_absent.strip().split()

    if len(today_absent) > len(name) - 2:
        print("<< 축 하 합 니 다 >>")
        print("오늘은 스터디 쉬는날!")
        print("<< 축 하 합 니 다 >>")
        return

    # 현재까지 진행한 스터디 횟수 == 발표 횟수
    total = len(speak)

    # 1 - ((내가 걸린 횟수 - 내가 결석한 횟수) / 여태 진행했던 횟수) 로 가중치 적용
    speak = [1 - (speak[i] - absent[i]) / total for i in range(len(name))]
    wiki = [1 - (wiki[i] - absent[i]) / total for i in range(len(name))]

    # 1회차 뽑기
    today_speaker = random.choices(name, speak, k=1)[0]
    today_wikier = random.choices(name, wiki, k=1)[0]

    # 오늘 결석자면 제외, 발표자와 서기가 겹치는것도 제외
    # choices는 리스트를 반환하며 k=1은 한명만 뽑겠다는 뜻
    while today_speaker in today_absent:
        today_speaker = random.choices(name, wiki, k=1)[0]

    while today_wikier in today_absent or today_wikier == today_speaker:
        today_wikier = random.choices(name, wiki, k=1)[0]

    print("<< 축 하 합 니 다 >>")
    print("발표자:\t", today_speaker)
    print("서기:\t", today_wikier)
    print("<< 축 하 합 니 다 >>")


if __name__ == '__main__':
    pickme()
