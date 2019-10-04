package com.studyLotto;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

public interface StudyDataAccessor {
    List<String> getStudyList();
    List<StudyMember> readStudyMembers(String studyName);
    void storeStudyMembers(List<StudyMember> studyMemberList, String studyName);
}
