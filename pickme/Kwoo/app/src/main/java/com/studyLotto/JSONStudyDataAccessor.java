package com.studyLotto;

import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;

import java.io.*;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class JSONStudyDataAccessor implements StudyDataAccessor {

    @Override
    public List<String> getStudyList() {
        List<String> studyList = new ArrayList<String>();
        File studyDir=new File("study");
        File [] fileList;

        if(!studyDir.exists()) studyDir.mkdirs();

        fileList = studyDir.listFiles();

        for(File file : fileList) {
            studyList.add(file.getName().split("\\.")[0]);
        }

        return studyList;
    }

    @Override
    public List<StudyMember> readStudyMembers(String studyName){
        JsonReader jsonReader=null;

        try {
            jsonReader = new JsonReader(new FileReader("study/"+studyName+".json"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        return new Gson().fromJson(jsonReader, StudyMember[].class);
    }

    @Override
    public void storeStudyMembers(List<StudyMember> studyMembers, String studyName){
        String jsonString = new Gson().toJson(studyMembers);

        try {
            FileWriter fileWriter = new FileWriter("study/"+studyName+".json", false);
            fileWriter.write(jsonString);
            fileWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
