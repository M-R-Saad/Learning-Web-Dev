// This JS file is for the common functionalities and challenge tasks.

// Task 1: When complete button is clicked, the task is marked as completed and the button is disabled also a notification is added in the activity log.

const completeButtons = document.querySelectorAll('.complete-btn');

completeButtons.forEach(button => {

    button.addEventListener('click', 
        function() {
            alert("Board Updated Successfully!");

            button.disabled = true;
            button.style.backgroundColor = '#E8E8E8';
            button.style.color = '#A0A0A0';

            const taskRemaining = parseInt(document.getElementById("task-remaining").innerText) - 1;
            document.getElementById("task-remaining").innerText = taskRemaining.toString().padStart(2, '0');

            // Challenge Task 4: When all 6 tasks are completed, show an alert.

            if (taskRemaining === 0) {
                alert("All tasks completed!");
            }

            const taskCompleted = parseInt(document.getElementById("task-completed").innerText) + 1;
            document.getElementById("task-completed").innerText = taskCompleted.toString().padStart(2, '0');

            // Challenge Task 3: Showing the task title in the activity log section.
            const taskTitle = button.parentNode.parentNode.getElementsByTagName('h1')[0].innerText;
            
            const activityLog = document.getElementById('activity-log');
            const currentTime = new Date().toLocaleTimeString(); // Get current time and format it to HH:MM:SS AM/PM.
            const newLogEntry = document.createElement('div');
            newLogEntry.classList.add('bg-[#F4F7FF]', 'p-3', 'rounded-lg');
            newLogEntry.innerHTML = `
                <p class="opacity-70">
                    You have Completed The Task <span class="font-bold">${taskTitle}</span> at ${currentTime}.
                </p>
            `;
            activityLog.append(newLogEntry);
        }
    );
});

// Task 2: When Clear History button is clicked, all the activity logs are cleared.

document.getElementById('clear-btn').addEventListener('click',
    function() {
        const activityLog = document.getElementById('activity-log');
        activityLog.innerHTML = '';
    }
);



// Challenge Task 1: Change background color randomly on button click.
document.getElementById('theme-btn').addEventListener('click', 
    function() {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
    }
);

// Challenge Task 2: Going to the Question Blog page and back to the main page.

document.getElementById('blog-btn').addEventListener('click', 
    function() {
        window.location.href = 'question_blog.html';
    }
);

// Challenge Task 2: Displaying the current date in the calendar section.

function showCurrentDate() {
    const dateElement = document.getElementById('current-date');

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const today = new Date();
    
    dateElement.innerHTML = `
        <h1 class="text-2xl text-[#00303C]">
            ${days[today.getDay()]},
            <br>
            <span class="font-bold">
                ${months[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}
            </span>
        </h1>
    `;
}

showCurrentDate();


