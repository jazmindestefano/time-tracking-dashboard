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

    const input_work_hours_cantidad = document.querySelector(".work-hours-cantidad");

    input_work_hours_cantidad.value = "Last week - 0hrs";

    input_work_hours.addEventListener('click', () => {

        input_work_hours.focus();

        input_work_hours.addEventListener('keypress', (e) => {
            
            if (e.keyCode == 13) {
                    const input_work_hours_new = input_work_hours.value;
                    const input_work_hours_cantidad_new = input_work_hours_new * 7;
                    alert(input_work_hours_new);
                    input_work_hours.blur();
                    return;
            }

           


        });

    });
   
    
});