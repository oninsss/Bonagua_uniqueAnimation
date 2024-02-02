const containerOne = document.getElementById('_containerOne');
const containerOne2 = document.getElementById('_containerOne2');
const containerOne3 = document.getElementById('_containerOne3');
const containerOne4 = document.getElementById('_containerOne4');
const containerOne5 = document.getElementById('_containerOne5');

const neonLayts1 = document.getElementById('neonLayts1');
const neonLayts2 = document.getElementById('neonLayts2');
const neonLayts3 = document.getElementById('neonLayts3');
const neonLayts4 = document.getElementById('neonLayts4');
const neonLayts5 = document.getElementById('neonLayts5');

const submitButton = document.getElementById('submitButton');
const submitButton2 = document.getElementById('submitButton2');
const submitButton3 = document.getElementById('submitButton3');
const submitButton4 = document.getElementById('submitButton4');
const submitButton5 = document.getElementById('submitButton5');

let isBlurEnabled1 = false;
let isBlurEnabled2 = false;
let isBlurEnabled3 = false;
let isBlurEnabled4 = false;
let isBlurEnabled5 = false;

function movementDetector(neonLayts, num){
    if (num === 1) {
        if (isBlurEnabled1) {
            neonLayts.style.filter = 'blur(20px)'; // Fix: Replace 'neonLayts' with 'neonLayts1'
        }
    } else if (num === 2) {
        if (isBlurEnabled2) {
            neonLayts.style.filter = 'blur(25px)'; // Fix: Replace 'neonLayts' with 'neonLayts2'
        }
    } else if (num === 3) {
        if (isBlurEnabled3) {
            neonLayts.style.filter = 'blur(25px)'; // Fix: Replace 'neonLayts' with 'neonLayts3'
        }
    } else if (num === 4) {
        if (isBlurEnabled4) {
            neonLayts.style.filter = 'blur(25px)'; // Fix: Replace 'neonLayts' with 'neonLayts4'
        }
    } else if (num === 5) {
        if (isBlurEnabled5) {
            neonLayts.style.filter = 'blur(25px)'; // Fix: Replace 'neonLayts' with 'neonLayts5'
        }
    }
}

function mouseLeavers(neonLayts, num){
    if (num === 1) {
        // Remove the blur effect when the mouse leaves the containerOne element
        if (isBlurEnabled1) {
            neonLayts.style.filter = 'none'; // Fix: Replace 'neonLayts' with 'neonLayts1'
            neonLayts.style.transition = 'all 1s ease-in-out'; // Fix: Replace 'neonLayts' with 'neonLayts1'
        }
    } else if (num === 2) {
        if (isBlurEnabled2) {
            neonLayts.style.filter = 'none'; // Fix: Replace 'neonLayts' with 'neonLayts2'
            neonLayts.style.transition = 'all 1s ease-in-out'; // Fix: Replace 'neonLayts' with 'neonLayts2'
        }
    } else if (num === 3) {
        if (isBlurEnabled3) {
            neonLayts.style.filter = 'none'; // Fix: Replace 'neonLayts' with 'neonLayts3'
            neonLayts.style.transition = 'all 1s ease-in-out'; // Fix: Replace 'neonLayts' with 'neonLayts3'
        }
    } else if (num === 4) {
        if (isBlurEnabled4) {
            neonLayts.style.filter = 'none'; // Fix: Replace 'neonLayts' with 'neonLayts4'
            neonLayts.style.transition = 'all 1s ease-in-out'; // Fix: Replace 'neonLayts' with 'neonLayts4'
        }
    } else if (num === 5) {
        if (isBlurEnabled5) {
            neonLayts.style.filter = 'none'; // Fix: Replace 'neonLayts' with 'neonLayts5'
            neonLayts.style.transition = 'all 1s ease-in-out'; // Fix: Replace 'neonLayts' with 'neonLayts5'
        }
    }
}


function toggleBlurEffect(container, submitButton, neonLayts, descript, num) {
    if (num === 1) {
        isBlurEnabled1 = !isBlurEnabled1;

        if (isBlurEnabled1) {
            neonLayts.classList.add('blur-effect');
            container.querySelector('p').style.animation = "izmooth 2s ease-in-out";
            container.querySelector('p').innerText = descript;
            container.querySelector('p').style.textAlign = "justify";
            container.style.height = "600px";
            container.querySelector('img').src = "./images/1.jpg";
            container.querySelector('img').style.width = "100px";
            container.querySelector('img').style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.height = '600px';
            neonLayts.style.width = '190px';
            submitButton.querySelector('h3').innerText = "Go back 👈";
            submitButton.style.backgroundColor = "#0f0f0f";
            container.style.boxShadow = "0 0 20px 0px black"
            
        } else {
            neonLayts.style.height = "0px";
            neonLayts.classList.remove('blur-effect');
            container.querySelector('p').innerText = "";
            container.querySelector('img').src = "";
            container.querySelector('img').style.width = "100px";
            container.style.boxShadow = "none";
            submitButton.querySelector('h3').innerText = "Know me better 👉";
            submitButton.style.backgroundColor = "green";
            neonLayts.style.filter = 'none'; // Remove the blur effect
            container.style.height = '250px';
            container.addEventListener('mouseenter', () => {
                container.style.boxShadow = "0 0 20px 0px black";
            });

            container.addEventListener('mouseleave', () => {
                container.style.boxShadow = "none";
                container.style.transition = "all 0.5s ease-in-out";
            });
        }
    } else if (num === 2) {
        isBlurEnabled2 = !isBlurEnabled2;

        if (isBlurEnabled2) {
            neonLayts.classList.add('blur-effect');
            container.querySelector('p').style.animation = "izmooth 2s ease-in-out";
            container.querySelector('p').innerText = descript;
            container.querySelector('p').style.textAlign = "justify";
            container.style.height = "600px";
            container.querySelector('img').src = "./images/2.jpg";
            container.querySelector('img').style.width = "100px";
            container.querySelector('img').style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.height = '600px';
            neonLayts.style.width = '190px';
            submitButton.querySelector('h3').innerText = "Go back 👈";
            submitButton.style.backgroundColor = "#0f0f0f";
            container.style.boxShadow = "0 0 20px 0px black"
            
        } else {
            neonLayts.style.height = "0px";
            neonLayts.classList.remove('blur-effect');
            container.querySelector('p').innerText = "";
            container.querySelector('img').src = "";
            container.querySelector('img').style.width = "100px";
            container.style.boxShadow = "none";
            submitButton.querySelector('h3').innerText = "Know me better 👉";
            submitButton.style.backgroundColor = "green";
            neonLayts.style.filter = 'none'; // Remove the blur effect
            container.style.height = '250px';
            container.addEventListener('mouseenter', () => {
                container.style.boxShadow = "0 0 20px 0px black";
            });

            container.addEventListener('mouseleave', () => {
                container.style.boxShadow = "none";
                container.style.transition = "all 0.5s ease-in-out";
            });
        }
    } else if (num === 3) {
        isBlurEnabled3 = !isBlurEnabled3;

        if (isBlurEnabled3) {
            neonLayts.classList.add('blur-effect');
            container.querySelector('p').style.animation = "izmooth 2s ease-in-out";
            container.querySelector('p').innerText = descript;
            container.querySelector('p').style.textAlign = "justify";
            container.style.height = "600px";
            container.querySelector('img').src = "./images/3.jpg";
            container.querySelector('img').style.width = "100px";
            container.querySelector('img').style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.height = '600px';
            neonLayts.style.width = '190px';
            submitButton.querySelector('h3').innerText = "Go back 👈";
            submitButton.style.backgroundColor = "#0f0f0f";
            container.style.boxShadow = "0 0 20px 0px black"
            
        } else {
            neonLayts.style.height = "0px";
            neonLayts.classList.remove('blur-effect');
            container.querySelector('p').innerText = "";
            container.querySelector('img').src = "";
            container.querySelector('img').style.width = "100px";
            container.style.boxShadow = "none";
            submitButton.querySelector('h3').innerText = "Know me better 👉";
            submitButton.style.backgroundColor = "green";
            neonLayts.style.filter = 'none'; // Remove the blur effect
            container.style.height = '250px';
            container.addEventListener('mouseenter', () => {
                container.style.boxShadow = "0 0 20px 0px black";
            });

            container.addEventListener('mouseleave', () => {
                container.style.boxShadow = "none";
                container.style.transition = "all 0.5s ease-in-out";
            });
        }
    } else if (num === 4) {
        isBlurEnabled4 = !isBlurEnabled4;

        if (isBlurEnabled4) {
            neonLayts.classList.add('blur-effect');
            container.querySelector('p').style.animation = "izmooth 2s ease-in-out";
            container.querySelector('p').innerText = descript;
            container.querySelector('p').style.textAlign = "justify";
            container.style.height = "600px";
            container.querySelector('img').src = "./images/4.jfif";
            container.querySelector('img').style.width = "100px";
            container.querySelector('img').style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.height = '600px';
            neonLayts.style.width = '190px';
            submitButton.querySelector('h3').innerText = "Go back 👈";
            submitButton.style.backgroundColor = "#0f0f0f";
            container.style.boxShadow = "0 0 20px 0px black"
            
        } else {
            neonLayts.style.height = "0px";
            neonLayts.classList.remove('blur-effect');
            container.querySelector('p').innerText = "";
            container.querySelector('img').src = "";
            container.querySelector('img').style.width = "100px";
            container.style.boxShadow = "none";
            submitButton.querySelector('h3').innerText = "Know me better 👉";
            submitButton.style.backgroundColor = "green";
            neonLayts.style.filter = 'none'; // Remove the blur effect
            container.style.height = '250px';
            container.addEventListener('mouseenter', () => {
                container.style.boxShadow = "0 0 20px 0px black";
            });

            container.addEventListener('mouseleave', () => {
                container.style.boxShadow = "none";
                container.style.transition = "all 0.5s ease-in-out";
            });
        }
    } else if (num === 5) {
        isBlurEnabled5 = !isBlurEnabled5;

        if (isBlurEnabled5) {
            neonLayts.classList.add('blur-effect');
            container.querySelector('p').style.animation = "izmooth 2s ease-in-out";
            container.querySelector('p').innerText = descript;
            container.querySelector('p').style.textAlign = "justify";
            container.style.height = "600px";
            container.querySelector('img').src = "./images/5.jfif";
            container.querySelector('img').style.width = "100px";
            container.querySelector('img').style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.animation = "izmooth 2s ease-in-out";
            neonLayts.style.height = '600px';
            neonLayts.style.width = '190px';
            submitButton.querySelector('h3').innerText = "Go back 👈";
            submitButton.style.backgroundColor = "#0f0f0f";
            container.style.boxShadow = "0 0 20px 0px black"
            
        } else {
            neonLayts.style.height = "0px";
            neonLayts.classList.remove('blur-effect');
            container.querySelector('p').innerText = "";
            container.querySelector('img').src = "";
            container.querySelector('img').style.width = "100px";
            container.style.boxShadow = "none";
            submitButton.querySelector('h3').innerText = "Know me better 👉";
            submitButton.style.backgroundColor = "green";
            neonLayts.style.filter = 'none'; // Remove the blur effect
            container.style.height = '250px';
            container.addEventListener('mouseenter', () => {
                container.style.boxShadow = "0 0 20px 0px black";
            });

            container.addEventListener('mouseleave', () => {
                container.style.boxShadow = "none";
                container.style.transition = "all 0.5s ease-in-out";
            });
        }
    }
}



submitButton.addEventListener('click', () => {
    const description = "John Doe is a dedicated and experienced software engineer with a passion for creating efficient and scalable web applications. He has a strong background in JavaScript, HTML, and CSS, and is proficient in various frameworks and libraries such as React and Node.js. John is a team player and enjoys collaborating with others to solve complex problems and deliver high-quality solutions.";
    toggleBlurEffect(containerOne, submitButton, neonLayts1, description, 1);
});

submitButton2.addEventListener('click', () => {
    const description = "Annie Batumbakal is a skilled IT professional specializing in database management and system optimization. With a keen eye for detail, she ensures data integrity and implements efficient solutions for streamlined processes. Annie is proficient in SQL and database administration, contributing to the success of the IT team with her expertise. ";
    toggleBlurEffect(containerOne2, submitButton2, neonLayts2,description, 2);
});

submitButton3.addEventListener('click', () => {
    const description = "Izpanz Bahbb is a dynamic IT professional with a focus on cybersecurity and network infrastructure. With a deep understanding of security protocols and risk mitigation, he plays a crucial role in safeguarding the company's digital assets. Izpanz is well-versed in network architecture and employs proactive measures to ensure a secure IT environment. ";
    toggleBlurEffect(containerOne3, submitButton3, neonLayts3, description, 3);
});

submitButton4.addEventListener('click', () => {
    const description = "Dhie Koh Lam is a creative and versatile IT specialist with expertise in front-end development and user interface design. Proficient in HTML, CSS, and JavaScript, Dhie is dedicated to crafting visually appealing and user-friendly web applications. His passion for creating seamless user experiences extends to exploring new design trends and staying updated on the latest advancements in web technologies. ";
    toggleBlurEffect(containerOne4, submitButton4, neonLayts4, description, 4);
});

submitButton5.addEventListener('click', () => {
    const description = "John Floyd Cruz is a dedicated and experienced IT professional specializing in software engineering. With a strong background in JavaScript, HTML, and CSS, John excels in developing efficient and scalable web applications. Proficient in frameworks and libraries such as React and Node.js, he collaborates effectively with his team to solve complex problems and deliver high-quality solutions. ";
    toggleBlurEffect(containerOne5, submitButton5, neonLayts5, description, 5);
});

containerOne.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts1, 1);
});

containerOne2.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts2, 2);
});

containerOne3.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts3, 3);
});

containerOne4.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts4, 4);
});

containerOne5.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts5, 5);
});

containerOne.addEventListener('mouseleave', () => {
    mouseLeavers(neonLayts1, 1);
});
containerOne2.addEventListener('mouseleave', () => {
    mouseLeavers(neonLayts2, 2);
});
containerOne3.addEventListener('mouseleave', () => {
    mouseLeavers(neonLayts3, 3);
});
containerOne4.addEventListener('mouseleave', () => {
    mouseLeavers(neonLayts4, 4);
});
containerOne5.addEventListener('mouseleave', () => {
    mouseLeavers(neonLayts5, 5);
});

