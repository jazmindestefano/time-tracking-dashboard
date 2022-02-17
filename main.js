"use script"

window.addEventListener('load', (e) => {

    e.preventDefault();

    const input_work_hours = document.querySelector(".work-hours");
    const input_play_hours = document.querySelector(".play-hours");
    const input_study_hours = document.querySelector(".study-hours");
    const input_exercise_hours = document.querySelector(".exercise-hours");
    const input_social_hours = document.querySelector(".social-hours");
    const input_selfcare_hours = document.querySelector(".selfcare-hours");

    input_work_hours.value = "0hrs";
    input_play_hours.value = "0hrs";
    input_study_hours.value = "0hrs";
    input_exercise_hours.value = "0hrs";
    input_social_hours.value = "0hrs";
    input_selfcare_hours.value = "0hrs";

    const span_amount_of_work_hours = document.querySelector(".amount-of-work-hours");

    span_amount_of_work_hours.value = "0";
   
    
});