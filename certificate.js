const form=document.getElementById('certificateForm');
const student_Name=document.getElementById('s_Name');
const student_Birth_Day=document.getElementById('birth_Day');
const course=document.getElementById('course');
const start_Date=document.getElementById('start_Date');
const end_Date=document.getElementById('end_Date');
const schedule=document.getElementById('schedule');
const study_Hour=document.getElementById('study_Hour');
const at_Rate=document.getElementById('at_Rate');
const textbook=document.getElementById('textbook');
const issue_Date=document.getElementById('issue_Date');

//certification Frame
const cer_Student_Name=document.getElementById('cer_Student_Name');
const cer_Course=document.getElementById('cer_Course');
const cer_SBD=document.getElementById('cer_Birth_Day');
const cer_SD = document.getElementById('cer_SD');
const cer_ED = document.getElementById('cer_ED');
const cer_Schedule = document.getElementById('cet_Schedule'); // typo fixed
const cer_Study_Hour = document.getElementById('cer_Study_Hour');
const cer_At_Rate = document.getElementById('cer_At_Rate');
const cer_Textbook = document.getElementById('cer_Textbook');
const cer_Issue_Date = document.getElementById('cet_Issue_Date'); 
const cettificate_Frame=document.getElementById('certificate_Frame');
const pdf_container=document.getElementById('pdf_container');

const download_Btn= document.getElementById("downloadBtn");
function processing(event){
event.preventDefault();
const student_Name_Value=student_Name.value.trim();

    cer_Student_Name.textContent = student_Name_Value;
    cer_SBD.textContent=student_Birth_Day.value;
    cer_Course.textContent = course.value;
    cer_SD.textContent = start_Date.value;
    cer_ED.textContent = end_Date.value;
    cer_Schedule.textContent = schedule.value;
    cer_Study_Hour.textContent = study_Hour.value;
    cer_At_Rate.textContent = at_Rate.value + "%";
    cer_Textbook.textContent = textbook.value.trim();
    cer_Issue_Date.textContent = issue_Date.value;

}
form.addEventListener('submit',processing);


    function valid_Number_Input(event){
      const input=event.target;
      const value=input.value;
       if (/[^0-9]/.test(value)) {
        this.value = '';
      }

    };
    study_Hour.addEventListener('input',valid_Number_Input);
    at_Rate.addEventListener('input',valid_Number_Input);

    download_Btn.addEventListener("click",function(){
      const opt = {
  margin:       [0.2, 0.2, 0.2, 0.2],
  filename:     'N_Level_Certificate.pdf',
  image:        { type: 'jpeg', quality: 1 },
  html2canvas:  { scale: 1, useCORS: true },
  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

        html2pdf().set(opt).from(pdf_container).save();
    });