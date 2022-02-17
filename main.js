"use script"

window.addEventListener('load', (e) => {

    e.preventDefault();

    let input_work_hours = document.querySelector(".work-hours");
    let input_play_hours = document.querySelector(".play-hours");
    let input_study_hours = document.querySelector(".study-hours");
    let input_exercise_hours = document.querySelector(".exercise-hours");
    let input_social_hours = document.querySelector(".social-hours");
    let input_selfcare_hours = document.querySelector(".selfcare-hours");

    let daily_button = document.querySelector(".daily-button");
    let weekly_button = document.querySelector(".weekly-button");
    let monthly_button = document.querySelector(".monthly-button");

    input_work_hours.value = "0";
    input_play_hours.value = "0";
    input_study_hours.value = "0";
    input_exercise_hours.value = "0";
    input_social_hours.value = "0";
    input_selfcare_hours.value = "0";

    let amount_of_work_hours = document.querySelector(".amount-of-work-hours");
    let amount_of_play_hours = document.querySelector(".amount-of-play-hours");
    let amount_of_study_hours = document.querySelector(".amount-of-study-hours");
    let amount_of_exercise_hours = document.querySelector(".amount-of-exercise-hours");
    let amount_of_social_hours = document.querySelector(".amount-of-social-hours");
    let amount_of_selfcare_hours = document.querySelector(".amount-of-selfcare-hours");

    amount_of_work_hours.value = "0";
    amount_of_play_hours.value = "0";
    amount_of_study_hours.value = "0";
    amount_of_exercise_hours.value = "0";
    amount_of_social_hours.value = "0";
    amount_of_selfcare_hours.value = "0";

    const tecla_enter = 13;

    input_work_hours.addEventListener('keypress' , (e) => {
        if (e.keyCode == tecla_enter){
           alert("Presione enter");
           
           const work_value = input_work_hours.value;
           localStorage.setItem("work_value", work_value);
           console.log(localStorage.getItem("work_value"));

           const work_value_per_week = work_value * 5;
           amount_of_work_hours.value = work_value_per_week;
           localStorage.setItem("work_value_per_week", work_value_per_week);
           console.log(localStorage.getItem("work_value_per_week"));
        }
    });

    input_play_hours.addEventListener('keypress' , (e) => {
        if (e.keyCode == tecla_enter){
           alert("Presione enter");
           
           const play_value = input_play_hours.value;
           localStorage.setItem("play_value", play_value);
           console.log(localStorage.getItem("play_value"));

           const play_value_per_week = play_value * 5;
           amount_of_play_hours.value = play_value_per_week;
           localStorage.setItem("play_value_per_week", play_value_per_week);
           console.log(localStorage.getItem("play_value_per_week"));
        }
    });

    input_study_hours.addEventListener('keypress' , (e) => {
        if (e.keyCode == tecla_enter){
           alert("Preione enter");
           
           const study_value = input_study_hours.value;
           localStorage.setItem("study_value", study_value);
           console.log(localStorage.getItem("study_value"));

           const study_value_per_week = study_value * 5;
           amount_of_study_hours.value = study_value_per_week;
           localStorage.setItem("study_value_per_week", study_value_per_week);
           console.log(localStorage.getItem("study_value_per_week"));
        }
    });

    input_exercise_hours.addEventListener('keypress' , (e) => {
        if (e.keyCode == tecla_enter){
           alert("Presione enter");
           
           const exercise_value = input_exercise_hours.value;
           localStorage.setItem("exercise_value", exercise_value);
           console.log(localStorage.getItem("exercise_value"));

           const exercise_value_per_week = exercise_value * 5;
           amount_of_exercise_hours.value = exercise_value_per_week;
           localStorage.setItem("exercise_value_per_week", exercise_value_per_week);
           console.log(localStorage.getItem("exercise_value_per_week"));
        }
    });

    input_social_hours.addEventListener('keypress' , (e) => {
        if (e.keyCode == tecla_enter){
           alert("Presione enter");
           
           const social_value = input_social_hours.value;
           localStorage.setItem("social_value", social_value);
           console.log(localStorage.getItem("play_value"));

           const social_value_per_week = social_value * 5;
           amount_of_social_hours.value = social_value_per_week;
           localStorage.setItem("social_value_per_week", social_value_per_week);
           console.log(localStorage.getItem("social_value_per_week"));
        }
    });

    input_selfcare_hours.addEventListener('keypress' , (e) => {
        if (e.keyCode == tecla_enter){
           alert("Presione enter");
           
           const selfcare_value = input_selfcare_hours.value;
           localStorage.setItem("selfcare_value", selfcare_value);
           console.log(localStorage.getItem("selfcare_value"));

           const selfcare_value_per_week = selfcare_value * 5;
           amount_of_selfcare_hours.value = selfcare_value_per_week;
           localStorage.setItem("selfcare_value_per_week", selfcare_value_per_week);
           console.log(localStorage.getItem("selfcare_value_per_week"));
        }
    });
 
    
});