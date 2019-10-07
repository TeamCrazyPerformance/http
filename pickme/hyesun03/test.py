import json
import random


with open("study_member.json") as file:
    data = json.load(file)
    study_member = data["members"]

    name, speak, wiki, absent = [], [], [], []
    for member in study_member:
        name.append(member["name"])
        speak.append(len(member["speak"]))
        wiki.append(len(member["wiki"]))
        absent.append(len(member["absent"]))

    total = len(speak)

    speak = [1 - (speak[i] - absent[i]) / total for i in range(8)]
    wiki = [1 - (wiki[i] - absent[i]) / total for i in range(8)]

    today_absent = ["윤지수"]

    test1, test2 = {}, {}
    for _ in range(100000):
        today_speaker = random.choices(name, speak, k=1)[0]
        today_wikier = random.choices(name, wiki, k=1)[0]

        while today_speaker in today_absent:
            today_speaker = random.choices(name, wiki, k=1)[0]

        while today_wikier in today_absent or today_wikier == today_speaker:
            today_wikier = random.choices(name, wiki, k=1)[0]

        if today_speaker in test1:
            test1[today_speaker] += 1
        else:
            test1[today_speaker] = 1

        if today_wikier in test2:
            test2[today_wikier] += 1
        else:
            test2[today_wikier] = 1

    # 많이 당첨이 되지 않았거나, 많이 결석하면 더 많이 걸리는 경향이 보임
    print("발표", test1)
    print("서기", test2)
