package com.studyLotto;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;

import java.util.ArrayList;
import java.util.List;

public class CreateStudyActivity extends AppCompatActivity {

    List<EditText> memberEditTextList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_study);

        memberEditTextList = new ArrayList<>();
        addListener();
    }

    private void addListener() {
        Button btnAddNewMember = findViewById(R.id.btn_add_new_member);
        Button btnConfirm = findViewById(R.id.btn_confirm);

        btnAddNewMember.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                LinearLayout newMemberList = findViewById(R.id.new_member_list);
                EditText newMemberEditText = new EditText(getApplicationContext());

                LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
                params.setMargins(10, 5, 5, 10);

                newMemberEditText.setLayoutParams(params);
                newMemberEditText.setTextColor(Color.BLACK);
                newMemberEditText.setBackgroundColor(0xffe0e0e0);

                memberEditTextList.add(newMemberEditText);
                newMemberList.addView(newMemberEditText);
            }
        });

        btnConfirm.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                List<StudyMember> studyMemberList = new ArrayList<>();
                EditText studyNameEdit = findViewById(R.id.study_name_edit);
                StudyDataAccessor dataAccessor = new JSONStudyDataAccessor(getApplicationContext());

                for(EditText editText : memberEditTextList){
                    studyMemberList.add(StudyMember.createNewStudyMemeber(editText.getText().toString()));
                }

                dataAccessor.storeStudyMembers(studyMemberList, studyNameEdit.getText().toString());
                finish();
            }
        });
    }
}
