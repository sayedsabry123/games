// script.js

// الأسئلة الخاصة بكل قسم
const games = {
    arabic: [
        { question: "ما هو حرف الجر في الجملة: ذهبت إلى المدرسة؟", options: ["إلى", "المدرسة", "ذهبت"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو معنى كلمة 'جميل'؟", options: ["قبيح", "رائع", "بسيط"], answer: "B", image: "images/arabic.jpg" },
        { question: "ما هو الحرف الأول في كلمة 'تفاحة'؟", options: ["ت", "ف", "ح"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الحرف الأخير في كلمة 'مدرسة'؟", options: ["م", "س", "ة"], answer: "C", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ب' وينتهي بحرف 'ة'؟", options: ["بطيخة", "برتقالة", "بيضة"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ك' وينتهي بحرف 'ل'؟", options: ["كلب", "كتاب", "كيس"], answer: "B", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'س' وينتهي بحرف 'ن'؟", options: ["سيارة", "سفينة", "سهم"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'م' وينتهي بحرف 'ة'؟", options: ["مدرسة", "مفتاح", "مصباح"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ع' وينتهي بحرف 'ل'؟", options: ["عسل", "عين", "عجل"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ج' وينتهي بحرف 'ة'؟", options: ["جملة", "جامعة", "جسر"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'د' وينتهي بحرف 'ن'؟", options: ["دلو", "دينار", "دراجة"], answer: "B", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ر' وينتهي بحرف 'ة'؟", options: ["روضة", "رسالة", "رحلة"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ف' وينتهي بحرف 'ل'؟", options: ["فول", "فيل", "فستان"], answer: "B", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ص' وينتهي بحرف 'ة'؟", options: ["صحبة", "صندوق", "صورة"], answer: "C", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ط' وينتهي بحرف 'ة'؟", options: ["طائرة", "طاولة", "طفلة"], answer: "C", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ح' وينتهي بحرف 'ن'؟", options: ["حديقة", "حصان", "حمار"], answer: "B", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'خ' وينتهي بحرف 'ة'؟", options: ["خيمة", "خريطة", "خصلة"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ش' وينتهي بحرف 'م'؟", options: ["شمس", "شباك", "شجرة"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'ز' وينتهي بحرف 'ة'؟", options: ["زهرة", "زجاجة", "زينة"], answer: "A", image: "images/arabic.jpg" },
        { question: "ما هو الشيء الذي يبدأ بحرف 'و' وينتهي بحرف 'ن'؟", options: ["وردة", "وصول", "وسط"], answer: "B", image: "images/arabic.jpg" },
    ],
    english: [
        { question: "What is the color of the sky? (بالإنجليزية)", options: ["Blue", "Red", "Green"], answer: "A", image: "images/english.jpg" },
        { question: "What do we drink? (بالإنجليزية)", options: ["Water", "Pen", "Table"], answer: "A", image: "images/english.jpg" },
        { question: "What is the opposite of 'big'? (بالإنجليزية)", options: ["Small", "Tall", "Short"], answer: "A", image: "images/english.jpg" },
        { question: "Which animal says 'meow'? (بالإنجليزية)", options: ["Cat", "Dog", "Bird"], answer: "A", image: "images/english.jpg" },
        { question: "What comes after 'Monday'? (بالإنجليزية)", options: ["Sunday", "Tuesday", "Friday"], answer: "B", image: "images/english.jpg" },
        { question: "What is the opposite of 'happy'? (بالإنجليزية)", options: ["Sad", "Angry", "Funny"], answer: "A", image: "images/english.jpg" },
        { question: "What is the first letter in the word 'apple'? (بالإنجليزية)", options: ["A", "B", "C"], answer: "A", image: "images/english.jpg" },
        { question: "What is the last letter in the word 'banana'? (بالإنجليزية)", options: ["A", "B", "C"], answer: "A", image: "images/english.jpg" },
        { question: "What do we use to write? (بالإنجليزية)", options: ["Pen", "Book", "Chair"], answer: "A", image: "images/english.jpg" },
        { question: "What is the plural of 'cat'? (بالإنجليزية)", options: ["Cats", "Dog", "Birds"], answer: "A", image: "images/english.jpg" },
        { question: "What is the opposite of 'light'? (بالإنجليزية)", options: ["Dark", "Heavy", "Bright"], answer: "A", image: "images/english.jpg" },
        { question: "What do we use to eat soup? (بالإنجليزية)", options: ["Spoon", "Fork", "Knife"], answer: "A", image: "images/english.jpg" },
        { question: "What is the opposite of 'hot'? (بالإنجليزية)", options: ["Cold", "Warm", "Cool"], answer: "A", image: "images/english.jpg" },
        { question: "What is the color of an apple? (بالإنجليزية)", options: ["Red", "Green", "Yellow"], answer: "A", image: "images/english.jpg" },
        { question: "What is the opposite of 'fast'? (بالإنجليزية)", options: ["Slow", "Quick", "Speedy"], answer: "A", image: "images/english.jpg" },
        { question: "What do we use to cut paper? (بالإنجليزية)", options: ["Scissors", "Knife", "Ruler"], answer: "A", image: "images/english.jpg" },
        { question: "What is the opposite of 'up'? (بالإنجليزية)", options: ["Down", "Left", "Right"], answer: "A", image: "images/english.jpg" },
        { question: "What is the color of grass? (بالإنجليزية)", options: ["Green", "Blue", "Brown"], answer: "A", image: "images/english.jpg" },
        { question: "What is the opposite of 'young'? (بالإنجليزية)", options: ["Old", "Tall", "Short"], answer: "A", image: "images/english.jpg" },
        { question: "What do we use to listen? (بالإنجليزية)", options: ["Ears", "Eyes", "Nose"], answer: "A", image: "images/english.jpg" },
    ],
    math: [
        { question: "ما هو ناتج جمع 2 + 3؟", options: ["5", "6", "7"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو ناتج طرح 10 - 4؟", options: ["6", "5", "4"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو ناتج ضرب 3 × 4؟", options: ["12", "15", "18"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو نصف العدد 10؟", options: ["5", "4", "3"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو ناتج قسمة 15 ÷ 3؟", options: ["5", "4", "3"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو العدد الذي يلي العدد 9؟", options: ["8", "10", "11"], answer: "B", image: "images/math.jpg" },
        { question: "كم عدد الأصابع في يد واحدة؟", options: ["5", "10", "20"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو العدد الذي إذا ضربته في نفسه يصبح الناتج 16؟", options: ["4", "5", "6"], answer: "A", image: "images/math.jpg" },
        { question: "كم عدد الأضلاع في المثلث؟", options: ["3", "4", "5"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو العدد الذي إذا أضفت إليه 7 يصبح الناتج 10؟", options: ["3", "4", "5"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو ناتج جمع 5 + 8؟", options: ["13", "12", "14"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو ناتج طرح 20 - 5؟", options: ["15", "10", "5"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو ناتج ضرب 5 × 3؟", options: ["15", "10", "20"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو نصف العدد 8؟", options: ["4", "3", "2"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو ناتج قسمة 20 ÷ 4؟", options: ["5", "4", "3"], answer: "A", image: "images/math.jpg" },
        { question: "ما هو العدد الذي يلي العدد 19؟", options: ["18", "20", "21"], answer: "B", image: "images/math.jpg" },
        { question: "كم عدد الأصابع في اليدين؟", options: ["5", "10", "20"], answer: "C", image: "images/math.jpg" },
        { question: "ما هو العدد الذي إذا ضربته في نفسه يصبح الناتج 25؟", options: ["5", "4", "6"], answer: "A", image: "images/math.jpg" },
        { question: "كم عدد الأضلاع في المربع؟", options: ["3", "4", "5"], answer: "B", image: "images/math.jpg" },
        { question: "ما هو العدد الذي إذا أضفت إليه 6 يصبح الناتج 10؟", options: ["4", "3", "5"], answer: "A", image: "images/math.jpg" },
    ],
        intelligence: [
            { question: "ما الشيء الذي يزيد عندما نأخذه؟", options: ["الصورة", "الظل", "الوزن"], answer: "B", image: "images/intelligence.jpg" },
            { question: "ما الذي له أربع أرجل ولا يستطيع المشي؟", options: ["الطاولة", "الكرسي", "الحصان"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي لا يدخل إلا إذا فتحت فمه؟", options: ["المفتاح", "القفل", "الباب"], answer: "B", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يدور حول نفسه ولا يتحرك؟", options: ["الكرة", "الساعة", "الشجرة"], answer: "B", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يحملك وتحمله في نفس الوقت؟", options: ["الحذاء", "الحقيبة", "الكرسي"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يكبر عندما يأكل؟", options: ["الحصان", "النار", "الشمس"], answer: "B", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يمشي بدون أرجل؟", options: ["الساعة", "القارب", "الشمس"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يحتوي على كلمات ولكنه لا يتكلم؟", options: ["الكتاب", "التلفاز", "الراديو"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يبدأ بحرف 'س' وينتهي بحرف 'م'؟", options: ["سهم", "سمكة", "سيارة"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يظهر في الليل ويختفي في النهار؟", options: ["النجوم", "الشمس", "القمر"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي كلما زاد نقص؟", options: ["الوقت", "الظلام", "الضوء"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي له وجه وليس له عين؟", options: ["الساعة", "القمر", "الشمس"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يتحدث دون لسان؟", options: ["التليفون", "الراديو", "الكتاب"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يطير بلا أجنحة؟", options: ["الريح", "الطائر", "السهم"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يبكي بلا عيون؟", options: ["السماء", "الغيوم", "الشمس"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يدور ولا يتحرك؟", options: ["الكرة", "العجلة", "الشمس"], answer: "C", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يخترق الزجاج ولا يكسره؟", options: ["الضوء", "الماء", "الهواء"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يبدأ بـ 'ع' وينتهي بـ 'ل'؟", options: ["عسل", "عين", "عجل"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يبدأ بـ 'م' وينتهي بـ 'ة'؟", options: ["مدرسة", "مفتاح", "مصباح"], answer: "A", image: "images/intelligence.jpg" },
            { question: "ما هو الشيء الذي يبدأ بـ 'ف' وينتهي بـ 'ن'؟", options: ["فيل", "فول", "فستان"], answer: "A", image: "images/intelligence.jpg" },
        ],
    }
    let currentGame = null;
let currentLevel = 0;
let score = 0;
let timeLeft = 10;
let timer;

// بدء اللعبة
function startGame(gameType) {
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("drawing-game").style.display = "none";
    document.getElementById("coloring-game").style.display = "none";
    document.getElementById("snake-game").style.display = "none";
    document.getElementById("xo-game").style.display = "none";

    if (gameType === "drawing") {
        document.getElementById("drawing-game").style.display = "block";
    } else if (gameType === "coloring") {
        document.getElementById("coloring-game").style.display = "block";
    } else if (gameType === "snake") {
        document.getElementById("snake-game").style.display = "block";
        startSnakeGame();
    } else if (gameType === "xo") {
        document.getElementById("xo-game").style.display = "block";
        resetXOGame();
    } else {
        currentGame = gameType;
        currentLevel = 0;
        score = 0;
        document.getElementById("game-screen").style.display = "block";
        displayQuestion();
    }
}

// عرض السؤال الحالي (للألعاب الأخرى)
function displayQuestion() {
    const currentQuestion = games[currentGame][currentLevel];
    document.getElementById("game-title").innerText = `قسم ${currentGame === 'arabic' ? 'العربية' : currentGame === 'english' ? 'الإنجليزية' : currentGame === 'math' ? 'الرياضيات' : currentGame === 'intelligence' ? 'الذكاء' : currentGame === 'puzzle' ? 'تجميع القطع' : 'البحث عن الأشياء المخفية'}`;
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("game-image").src = currentQuestion.image;

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
    });

    document.getElementById("feedback").innerText = "";
    startTimer();
}

// بدء المؤقت (للألعاب الأخرى)
function startTimer() {
    timeLeft = 25;
    document.getElementById("time").innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

// التعامل مع انتهاء الوقت (للألعاب الأخرى)
function handleTimeout() {
    document.getElementById("feedback").innerText = "انتهى الوقت! حاول مرة أخرى 🔴";
    document.getElementById("feedback").style.color = "red";
    playSound("wrong");
    setTimeout(() => {
        currentLevel++;
        if (currentLevel < games[currentGame].length) {
            displayQuestion();
        } else {
            endGame();
        }
    }, 1000);
}

// التحقق من الإجابة (للألعاب الأخرى)
function checkAnswer(selectedOption) {
    clearInterval(timer);
    const currentQuestion = games[currentGame][currentLevel];

    if (selectedOption === currentQuestion.answer) {
        document.getElementById("feedback").innerText = "إجابة صحيحة! 👏";
        document.getElementById("feedback").style.color = "green";
        score++;
        document.getElementById("score").innerText = score;
        playSound("correct");
    } else {
        document.getElementById("feedback").innerText = "إجابة خاطئة! حاول مرة أخرى 🔴";
        document.getElementById("feedback").style.color = "red";
        playSound("wrong");
    }

    currentLevel++;
    if (currentLevel < games[currentGame].length) {
        setTimeout(displayQuestion, 1000);
    } else {
        endGame();
    }
}

// تخطي السؤال (للألعاب الأخرى)
function skipQuestion() {
    clearInterval(timer);
    currentLevel++;
    if (currentLevel < games[currentGame].length) {
        displayQuestion();
    } else {
        endGame();
    }
}

// إنهاء اللعبة (للألعاب الأخرى)
function endGame() {
    clearInterval(timer);
    alert(`تهانينا! لقد أنهيت القسم. نقاطك: ${score}/${games[currentGame].length}`);
    backToMenu();
}

// العودة إلى القائمة
function backToMenu() {
    document.getElementById("main-menu").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("drawing-game").style.display = "none";
    document.getElementById("coloring-game").style.display = "none";
    document.getElementById("snake-game").style.display = "none";
    document.getElementById("xo-game").style.display = "none";
}

// تشغيل الأصوات (للألعاب الأخرى)
function playSound(type) {
    let audio;
    if (type === "correct") {
        audio = new Audio("sounds/correct.mp3");
    } else if (type === "wrong") {
        audio = new Audio("sounds/wrong.mp3");
    }
    audio.play();
}

// لعبة الرسم
let canvas = document.getElementById("drawing-canvas");
let ctx = canvas.getContext("2d");
let painting = false;

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// لعبة التلوين
function setColor(color) {
    const image = document.getElementById("coloring-image");
    if (color === "black") {
        // إذا كان اللون أسود، نزيل المؤثرات ونضيف ظلال سوداء
        image.style.filter = "drop-shadow(0 0 20px black)";
    } else {
        // تطبيق ألوان مختلفة كمؤثرات
        image.style.filter = `drop-shadow(0 0 20px ${color})`;
    }
}

// إعادة تعيين اللون إلى الحالة الأصلية
function resetColor() {
    const image = document.getElementById("coloring-image");
    image.style.filter = "none";
}
// لعبة X-O
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartButton = document.getElementById("restart");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // الصفوف
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // الأعمدة
    [0, 4, 8], [2, 4, 6]  // الأقطار
];

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            isGameActive = false;
            statusText.innerText = `اللاعب ${currentPlayer} فاز! 🎉`;
            return;
        }
    }

    if (!gameBoard.includes("")) {
        isGameActive = false;
        statusText.innerText = "تعادل! 😐";
    }
}

function handleClick(event) {
    const index = event.target.dataset.index;

    if (gameBoard[index] !== "" || !isGameActive) return;

    gameBoard[index] = currentPlayer;
    event.target.innerText = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (isGameActive) {
        statusText.innerText = `دور اللاعب ${currentPlayer}`;
    }
}

function restartGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    currentPlayer = "X";
    statusText.innerText = `دور اللاعب ${currentPlayer}`;
    cells.forEach(cell => cell.innerText = "");
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
restartButton.addEventListener("click", restartGame);
