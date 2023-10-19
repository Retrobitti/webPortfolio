document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.project_button');
    const projectText = document.getElementById('project_text');
    const projectImage = document.getElementById("project_image");

    let imageLoopInterval;
    let isLooping=false;

    function getText(buttonId) {
        const data = {
            '1': "As our first school project we were given an assignment to make something using Arduino Uno. We decided to make a simple Simon says game as that matched our skill level at the time. We had a team of three people and we used basic C as our programming language. My job was to randomize the order in which the lights lit up. I also made a simple score system for the game. I definitely learned a lot during this project.",
            '2': "At the end of first school year we weare tasked to make an ATM simulation in groups of for. The simulation needed to have all the basic functions of an ATM(deposit, withdraw et.). The application needed to take a reading from an RFID card and then prompt user to give a Pin of that RFID card. My job was making the frontend and RFID communication. For this project I used QT Creator and C++.",
            '3': "I took a summer course where we learned the basics of Unreal Engine 5. After learning said basics we needed to make a playable game. Our game is called Vile Woods. It's a third-person action bullet hell game where the player needs to defeat a monster in the woods. We had six people working on this project. My primary task was to make the bullet hell system. I made six different projectiles. For the projectiles I used Niagara Particle System. On top of this I designed the boss level and boss ai. I also did lot's of small stuff and made some changes to code to make the game run smoother and look better. During this project I learned tons about Unreal Engine 5. "
        };

        return data[buttonId] || "Default project text";
    }

    function getImageUrl(buttonId) {
        const imageUrls = {
            '1': "assets/simon.png",
            '2': "assets/banksim.png",
            '3': ["assets/vile_woods_1.jpeg", "assets/vile_woods_2.jpg", "assets/vile_woods_3.jpeg"]
        };

        return imageUrls[buttonId];
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clearInterval(imageLoopInterval);
            projectText.textContent = getText(button.id);
            const imageSource = getImageUrl(button.id);
            isLooping = button.id === '3';
            if (Array.isArray(imageSource)) {
                let currentIndex = 0;

                function updateImage() {
                    projectImage.src = imageSource[currentIndex];
                    currentIndex = (currentIndex + 1) % imageSource.length; 
                }

                updateImage(); 
                if (button.id === '3' && isLooping) {
                    imageLoopInterval = setInterval(updateImage, 5000);
                }
            } else {
                projectImage.src = imageSource;
            }
            
        });
    });
    document.getElementById("download_button").addEventListener("click", function() {
        const cvFilePath = "assets/testCV.pdf";
    
        fetch(cvFilePath)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'testCV.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
    });
});











