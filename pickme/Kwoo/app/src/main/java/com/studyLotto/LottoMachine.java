package com.studyLotto;

import java.util.List;
import java.util.Random;

public class LottoMachine {
    private List<StudyMember> studyMemberList;
    private List<StudyMember> absentMemberList;

    public LottoMachine(List<StudyMember> studyMemberList, List<StudyMember> absentMemberList) {
        this.studyMemberList = studyMemberList;
        this.absentMemberList = absentMemberList;
    }

    public StudyMember pickRecord() {
        StudyMember luckyMember = null;
        double sumOfWeight = 0, randomNum;
        Random random = new Random(System.currentTimeMillis());
        boolean isNotDecided = true;

        for (StudyMember member : studyMemberList) {
            if (isAttendMember(member)) sumOfWeight += member.getRecordWeight();
        }

        randomNum = random.nextDouble() * sumOfWeight;
        System.out.println(randomNum);

        //가중치 합 사이의 난수를 만들어서 추첨
        for (StudyMember member : studyMemberList) {
            if (isAttendMember(member)) {
                randomNum -= member.getRecordWeight();

                if (randomNum < 0 && isNotDecided) {
                    luckyMember = member;
                    isNotDecided = false;
                }
                //당첨되지 않으면 가중치를 2배씩 늘림
                //double 형 최댓값에 가까워지면 모든 가중치를 일정한 숫자로 나눔.(가중치 중 큰 수)
                else {
                    if (member.getRecordWeight() > Double.MAX_VALUE / 3) {
                        for (StudyMember target : studyMemberList)
                            target.setRecordWeight(target.getRecordWeight() / member.getRecordWeight());
                    }
                    member.setRecordWeight(2 * member.getRecordWeight());
                }
            } else {
                if (member.getRecordWeight() > Double.MAX_VALUE / 5) {
                    for (StudyMember target : studyMemberList)
                        target.setRecordWeight(target.getRecordWeight() / member.getRecordWeight());
                }
                member.setRecordWeight(4 * member.getRecordWeight());
            }
        }

        return luckyMember;
    }

    public StudyMember pickSpeak() {
        StudyMember luckyMember = null;
        double sumOfWeight = 0, randomNum;
        Random random = new Random(1 - System.currentTimeMillis());
        boolean isNotDecided = true;

        for (StudyMember member : studyMemberList) {
            if (isAttendMember(member)) sumOfWeight += member.getSpeakWeight();
        }

        randomNum = random.nextDouble() * sumOfWeight;
        System.out.println(randomNum);
        for (StudyMember member : studyMemberList) {
            if (isAttendMember(member)) {
                randomNum -= member.getSpeakWeight();

                if (randomNum < 0 && isNotDecided) {
                    luckyMember = member;
                    isNotDecided = false;
                } else {
                    if (member.getSpeakWeight() > Double.MAX_VALUE / 3) {
                        for (StudyMember target : studyMemberList)
                            target.setSpeakWeight(target.getSpeakWeight() / member.getSpeakWeight());
                    }
                    member.setSpeakWeight(2 * member.getSpeakWeight());
                }
            } else {
                if (member.getSpeakWeight() > Double.MAX_VALUE / 6) {
                    for (StudyMember target : studyMemberList)
                        target.setSpeakWeight(target.getSpeakWeight() / member.getSpeakWeight());
                }
                member.setSpeakWeight(4 * member.getSpeakWeight());
            }
        }

        return luckyMember;
    }

    private boolean isAttendMember(StudyMember member) {
        boolean isAttend = true;
        for (StudyMember absentMember : absentMemberList) {
            if (member.equals(absentMember)) isAttend = false;
        }
        return isAttend;
    }
}
