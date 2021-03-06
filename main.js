"use script"

window.addEventListener('load', (e) => {

    e.preventDefault();

    let input_work_hours = document.querySelector(".work-hours");
    let input_play_hours = document.querySelector(".play-hours");
    let input_study_hours = document.querySelector(".study-hours");
    let input_exercise_hours = document.querySelector(".exercise-hours");
    let input_social_hours = document.querySelector(".social-hours");
    let input_selfcare_hours = document.querySelector(".selfcare-hours");

    let amount_of_work_hours = document.querySelector(".amount-of-work-hours");
    let amount_of_play_hours = document.querySelector(".amount-of-play-hours");
    let amount_of_study_hours = document.querySelector(".amount-of-study-hours");
    let amount_of_exercise_hours = document.querySelector(".amount-of-exercise-hours");
    let amount_of_social_hours = document.querySelector(".amount-of-social-hours");
    let amount_of_selfcare_hours = document.querySelector(".amount-of-selfcare-hours");

    let daily_button = document.querySelector(".daily-button");
    let weekly_button = document.querySelector(".weekly-button");
    let monthly_button = document.querySelector(".monthly-button");

    let work_word = document.querySelector(".work-word");
    let play_word = document.querySelector(".play-word");
    let study_word = document.querySelector(".study-word");
    let exercise_word = document.querySelector(".exercise-word");
    let social_word = document.querySelector(".social-word");
    let selfcare_word = document.querySelector(".selfcare-word");

    input_work_hours.value = "0";
    input_play_hours.value = "0";
    input_study_hours.value = "0";
    input_exercise_hours.value = "0";
    input_social_hours.value = "0";
    input_selfcare_hours.value = "0";

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

           daily_button.addEventListener('click', () => {
                const work_value_per_day = work_value * 1;
                amount_of_work_hours.value = work_value_per_day;
                work_word.textContent = "day";
                localStorage.setItem("work_value_per_day", work_value_per_day);
                console.log(localStorage.getItem("work_value_per_day"));
           });

           weekly_button.addEventListener('click', () => {
                work_word.textContent = "week";
                const work_value_per_week = work_value * 5;
                amount_of_work_hours.value = work_value_per_week;
           });

           monthly_button.addEventListener('click', () => {
            const work_value_per_month = work_value * 20;
            amount_of_work_hours.value = work_value_per_month;
            work_word.textContent = "month";
            localStorage.setItem("work_value_per_day", work_value_per_month);
            console.log(localStorage.getItem("work_value_per_month"));
            });


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

           daily_button.addEventListener('click', () => {
            const play_value_per_day = play_value * 1;
            amount_of_play_hours.value = play_value_per_day;
            play_word.textContent = "day";
            localStorage.setItem("play_value_per_day", play_value_per_day);
            console.log(localStorage.getItem("play_value_per_day"));
            });

            weekly_button.addEventListener('click', () => {
                play_word.textContent = "week";
                const play_value_per_week = play_value * 5;
                amount_of_play_hours.value = play_value_per_week;
           });

            monthly_button.addEventListener('click', () => {
            const play_value_per_month = play_value * 20;
            amount_of_play_hours.value = play_value_per_month;
            play_word.textContent = "month";
            localStorage.setItem("play_value_per_day", play_value_per_month);
            console.log(localStorage.getItem("play_value_per_month"));
            });

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

           daily_button.addEventListener('click', () => {
            const study_value_per_day = study_value * 1;
            amount_of_study_hours.value = study_value_per_day;
            study_word.textContent = "day";
            localStorage.setItem("study_value_per_day", study_value_per_day);
            console.log(localStorage.getItem("study_value_per_day"));
            });

            weekly_button.addEventListener('click', () => {
                study_word.textContent = "week";
                const study_value_per_week = study_value * 5;
                amount_of_study_hours.value = study_value_per_week;
           });

            monthly_button.addEventListener('click', () => {
            const study_value_per_month = study_value * 20;
            amount_of_study_hours.value = study_value_per_month;
            study_word.textContent = "month";
            localStorage.setItem("study_value_per_day", study_value_per_month);
            console.log(localStorage.getItem("study_value_per_month"));
            });

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
            
           daily_button.addEventListener('click', () => {
            const exercise_value_per_day = exercise_value * 1;
            amount_of_exercise_hours.value = exercise_value_per_day;
            exercise_word.textContent = "day";
            localStorage.setItem("exercise_value_per_day", exercise_value_per_day);
            console.log(localStorage.getItem("exercise_value_per_day"));
            });

            weekly_button.addEventListener('click', () => {
                exercise_word.textContent = "week";
                const exercise_value_per_week = exercise_value * 5;
                amount_of_exercise_hours.value = exercise_value_per_week;
           });

            monthly_button.addEventListener('click', () => {
            const exercise_value_per_month = exercise_value * 20;
            amount_of_exercise_hours.value = exercise_value_per_month;
            exercise_word.textContent = "month";
            localStorage.setItem("exercise_value_per_day", exercise_value_per_month);
            console.log(localStorage.getItem("exercise_value_per_month"));
            });
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
            
           daily_button.addEventListener('click', () => {
            const social_value_per_day = social_value * 1;
            amount_of_social_hours.value = social_value_per_day;
            social_word.textContent = "day";
            localStorage.setItem("social_value_per_day", social_value_per_day);
            console.log(localStorage.getItem("social_value_per_day"));
            });

            weekly_button.addEventListener('click', () => {
                social_word.textContent = "week";
                const social_value_per_week = social_value * 5;
                amount_of_social_hours.value = social_value_per_week;
           });

            monthly_button.addEventListener('click', () => {
            const social_value_per_month = social_value * 20;
            amount_of_social_hours.value = social_value_per_month;
            social_word.textContent = "month";
            localStorage.setItem("social_value_per_day", social_value_per_month);
            console.log(localStorage.getItem("social_value_per_month"));
            });
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

           daily_button.addEventListener('click', () => {
            const selfcare_value_per_day = selfcare_value * 1;
            amount_of_selfcare_hours.value = selfcare_value_per_day;
            selfcare_word.textContent = "day";
            localStorage.setItem("selfcare_value_per_day", selfcare_value_per_day);
            console.log(localStorage.getItem("selfcare_value_per_day"));
            });

            weekly_button.addEventListener('click', () => {
                selfcare_word.textContent = "week";
                const selfcare_value_per_week = selfcare_value * 5;
                amount_of_selfcare_hours.value = selfcare_value_per_week;
           });

            monthly_button.addEventListener('click', () => {
            const selfcare_value_per_month = selfcare_value * 20;
            amount_of_selfcare_hours.value = selfcare_value_per_month;
            selfcare_word.textContent = "month";
            localStorage.setItem("selfcare_value_per_day", selfcare_value_per_month);
            console.log(localStorage.getItem("selfcare_value_per_month"));
            });
        }
    });
 
    
});