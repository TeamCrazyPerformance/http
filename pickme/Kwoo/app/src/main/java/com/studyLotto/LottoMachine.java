package com.studyLotto;

import java.util.List;
import java.util.Random;

public class LottoMachine {
    private List<StudyMember> studyMemberList;
    private List<StudyMember> absentMemberList;
    private StudyMember speaker;
    private StudyMember recorder;

    public LottoMachine(List<StudyMember> studyMemberList, List<StudyMember> absentMemberList) {
        this.studyMemberList = studyMemberList;
        this.absentMemberList = absentMemberList;
        this.speaker = null;
        this.recorder = null;
    }

    public void lottoTester(){
        double receordMax=-1, recordMin=Double.MAX_VALUE, speackMax=-1, speackMin=Double.MAX_VALUE;
        for(int i=0; i<1000; i++){
            pickRecord();
            pickSpeak();
        }

        for (StudyMember member :studyMemberList){
            if(member.getRecordWeight()>receordMax) receordMax = member.getRecordWeight();
            if(member.getRecordWeight()<recordMin) recordMin = member.getRecordWeight();
            if(member.getSpeakWeight()>speackMax) speackMax = member.getRecordWeight();
            if(member.getSpeakWeight()<speackMin) speackMin = member.getSpeakWeight();
        }

        System.out.println("발표 격차 지수 : "+ speackMax/speackMin + "\n" +"위키 격차 지수: " + receordMax/recordMin);
    }

    public StudyMember pickRecord() {
        double sumOfWeight = 0, randomNum;
        Random random = new Random(System.currentTimeMillis());
        boolean isNotDecided = true;

        for (StudyMember member : studyMemberList) {
            if (isAttendMember(member)) sumOfWeight += member.getRecordWeight();
        }

        randomNum = random.nextDouble() * sumOfWeight;

        //가중치 합 사이의 난수를 만들어서 추첨
        for (StudyMember member : studyMemberList) {
            if (isAttendMember(member)) {
                randomNum -= member.getRecordWeight();

                if (randomNum < 0 && isNotDecided && member!=speaker) {
                    recorder = member;
                    isNotDecided = false;
                }
                //당첨되지 않으면 가중치를 2배씩 늘림
                //double 형 최댓값에 가까워지면 모든 가중치를 일정한 숫자로 나눔.(가중치 중 큰 수)
                else {
                    if (member.getRecordWeight() > Double.MAX_VALUE / 100) {
                        for (StudyMember target : studyMemberList)
                            target.setRecordWeight(target.getRecordWeight() / member.getRecordWeight());
                    }
                    member.setRecordWeight(2 * member.getRecordWeight());
                }
            } else {
                if (member.getRecordWeight() > Double.MAX_VALUE / 100) {
                    for (StudyMember target : studyMemberList)
                        target.setRecordWeight(target.getRecordWeight() / member.getRecordWeight());
                }
                member.setRecordWeight(4 * member.getRecordWeight());
            }
        }

        return recorder;
    }

    public StudyMember pickSpeak() {
        double sumOfWeight = 0, randomNum;
        Random random = new Random(1 - System.currentTimeMillis());
        boolean isNotDecided = true;

        for (StudyMember member : studyMemberList) {
            if (isAttendMember(member)) sumOfWeight += member.getSpeakWeight();
        }

        randomNum = random.nextDouble() * sumOfWeight;

        for (StudyMember member : studyMemberList) {
            if (isAttendMember(member)) {
                randomNum -= member.getSpeakWeight();

                if (randomNum < 0 && isNotDecided && member!=recorder) {
                    speaker = member;
                    isNotDecided = false;
                } else {
                    if (member.getSpeakWeight() > Double.MAX_VALUE / 100) {
                        for (StudyMember target : studyMemberList)
                            target.setSpeakWeight(target.getSpeakWeight() / member.getSpeakWeight());
                    }
                    member.setSpeakWeight(2 * member.getSpeakWeight());
                }
            } else {
                if (member.getSpeakWeight() > Double.MAX_VALUE / 100) {
                    for (StudyMember target : studyMemberList)
                        target.setSpeakWeight(target.getSpeakWeight() / member.getSpeakWeight());
                }
                member.setSpeakWeight(4 * member.getSpeakWeight());
            }
        }

        return speaker;
    }

    private boolean isAttendMember(StudyMember member) {
        boolean isAttend = true;
        for (StudyMember absentMember : absentMemberList) {
            if (member.equals(absentMember)) isAttend = false;
        }
        return isAttend;
    }
}
