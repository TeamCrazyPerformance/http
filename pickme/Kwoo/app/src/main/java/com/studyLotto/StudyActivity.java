package com.studyLotto;

import android.content.Intent;
import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StudyActivity extends AppCompatActivity {

    private String studyName;
    private List<StudyMember> memberList;
    private Map<StudyMember, View> studyMemberViewMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_study);

        init();
        drawMemberLIst();
        addListener();
//        test();
    }

    private void init() {
        initStudyName();
        initStudyMembers();
        studyMemberViewMap = new HashMap<>();
    }

    private void initStudyName() {
        Intent intent = getIntent();
        this.studyName = intent.getExtras().getString("studyName");
    }

    private void initStudyMembers() {
        StudyDataAccessor dataAccessor = new JSONStudyDataAccessor(this);
        this.memberList = dataAccessor.readStudyMembers(studyName);
    }

    private void drawMemberLIst() {
        LinearLayout memberListLayout = findViewById(R.id.member_list_layout);

        for (StudyMember member : memberList) {
            CheckBox memberView = new CheckBox(this);
            memberView.setText(member.getName());
            memberListLayout.addView(memberView);
            studyMemberViewMap.put(member, memberView);
        }
    }

    private void addListener() {
        Button pickButton = findViewById(R.id.btn_pick);
        pickButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                LottoMachine lottoMachine;
                LinearLayout pickedMemberLayout = findViewById(R.id.picked_member_layout);
                List<StudyMember> absentMemberList = new ArrayList<>();

                for (StudyMember member : memberList) {
                    CheckBox memberView = (CheckBox) studyMemberViewMap.get(member);
                    if (memberView.isChecked()) absentMemberList.add(member);
                }

                lottoMachine = new LottoMachine(memberList, absentMemberList);

                TextView textView = new TextView(getApplicationContext());
                LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);

                textView.setLayoutParams(params);
                textView.setTextColor(Color.BLACK);
                textView.setText("발표자 : " + lottoMachine.pickSpeak().getName() + "\n" + "위키 : " + lottoMachine.pickRecord().getName());

                pickedMemberLayout.addView(textView);

                storeMemberList();
                findViewById(R.id.btn_pick).setEnabled(false);
            }
        });
    }

    private void storeMemberList() {
        StudyDataAccessor dataAccessor = new JSONStudyDataAccessor(this);
        dataAccessor.storeStudyMembers(memberList, studyName);
    }

    private void test() {

        List<StudyMember> absentMemberList = new ArrayList<>();

        for (StudyMember member : memberList) {
            CheckBox memberView = (CheckBox) studyMemberViewMap.get(member);
            if (memberView.isChecked()) absentMemberList.add(member);
        }

        LottoMachine lottoMachine = new LottoMachine(memberList, absentMemberList);
        lottoMachine.lottoTester();
    }
}
