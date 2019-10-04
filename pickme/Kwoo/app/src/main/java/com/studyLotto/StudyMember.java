package com.studyLotto;


public class StudyMember{
    private String name;
    private double speakWeight;
    private double recordWeight;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getSpeakWeight() { return speakWeight; }
    public void setSpeakWeight(double speakWeight) { this.speakWeight = speakWeight; }

    public double getRecordWeight() { return recordWeight; }
    public void setRecordWeight(double recordWeight) { this.recordWeight = recordWeight; }

    public static StudyMember createNewStudyMemeber(String name){
        StudyMember newStudyMember = new StudyMember();
        newStudyMember.setName(name);
        newStudyMember.setRecordWeight(1);
        newStudyMember.setSpeakWeight(1);

        return newStudyMember;
    }
}
