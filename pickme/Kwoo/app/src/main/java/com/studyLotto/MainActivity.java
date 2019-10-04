package com.studyLotto;

import android.content.Intent;
import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    private List<String>  studyList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }



    @Override
    protected void onResume() {
        super.onResume();
        setContentView(R.layout.activity_main);
        initStudyList();
        makeButtonsThroughStudyList();
        makeStudyAddButton();
    }

    private void initStudyList(){
        StudyDataAccessor dataAccessor = new JSONStudyDataAccessor(this);
        studyList = dataAccessor.getStudyList();
    }

    private void makeButtonsThroughStudyList(){
        LinearLayout layout = findViewById(R.id.main_layout);

        for(String study : studyList){
            final Button button = new Button(this);

            button.setText(study);
            button.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent intent = new Intent(getApplicationContext(), StudyActivity.class);
                    intent.putExtra("studyName", button.getText());
                    startActivity(intent);
                }
            });

            layout.addView(button);
        }
    }

    private void makeStudyAddButton() {
        Button studyAddBtn = new Button(this);
        LinearLayout layout = findViewById(R.id.bottom_layout);

        studyAddBtn.setText("스터디 추가");
        studyAddBtn.setBackgroundColor(Color.LTGRAY);
        studyAddBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getApplicationContext(), CreateStudyActivity.class);
                startActivity(intent);
            }
        });

        layout.addView(studyAddBtn);
    }
}
