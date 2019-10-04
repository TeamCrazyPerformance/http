package com.studyLotto;

import android.content.Context;
import android.os.Environment;

import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;

import java.io.*;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class JSONStudyDataAccessor implements StudyDataAccessor {

    private String studyDirPath;

    public JSONStudyDataAccessor(Context context){
        this.studyDirPath = context.getFilesDir().getPath().toString()+"/study";
    }

    public JSONStudyDataAccessor(){
        studyDirPath = "study";
    }

    @Override
    public List<String> getStudyList() {
        List<String> studyList = new ArrayList<String>();
        File studyDir = new File(studyDirPath);
        File[] fileList;

        if (!studyDir.exists()) studyDir.mkdirs();

        fileList = studyDir.listFiles();

        if (fileList!=null) {
            for (File file : fileList) {
                studyList.add(file.getName().split("\\.")[0]);
            }
        }

        return studyList;
    }

    @Override
    public List<StudyMember> readStudyMembers(String studyName) {
        JsonReader jsonReader = null;
        List<StudyMember> memberLIst = new ArrayList<>();

        try {
            jsonReader = new JsonReader(new FileReader(studyDirPath +"/"+ studyName + ".json"));
            StudyMember[] memberArray = new Gson().fromJson(jsonReader, StudyMember[].class);
            memberLIst.addAll(Arrays.asList(memberArray));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        return memberLIst;
    }

    @Override
    public void storeStudyMembers(List<StudyMember> studyMemberList, String studyName) {
        String jsonString = new Gson().toJson(studyMemberList);

        try {
            File file = new File(studyDirPath+"/"+studyName+".json");
            if(!file.exists()) file.createNewFile();

            FileWriter fileWriter = new FileWriter(file, false);
            fileWriter.write(jsonString);
            fileWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
