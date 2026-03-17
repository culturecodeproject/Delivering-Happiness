const quizData = [
    {
        q: "Bạn có một định hướng cuộc đời (Mục tiêu/Đam mê) rất rõ ràng và hay nói về nó, nhưng lại không dành thời gian hay tiền bạc để rèn luyện. Trạng thái này gọi là gì?",
        options: [
            { text: "Kẻ mộng mơ, lười biếng.", isCorrect: false },
            { text: "NATO (No Action Talk Only).", isCorrect: true },
            { text: "Người thiếu kỷ luật bản thân.", isCorrect: false },
            { text: "Người có tư duy tích cực nhưng thiếu thực tế.", isCorrect: false }
        ],
        explanation: "NATO (No Action Talk Only) – Trạng thái chỉ có Compass (Kim chỉ nam) mà thiếu Watch (Thời gian) và Dollar (Nguồn lực)."
    },
    {
        q: "Công thức thực tế nhất để tạo ra Giá trị (Value) không thể thay thế của một con người là gì?",
        options: [
            { text: "Thái độ + Kỹ năng + Kiến thức.", isCorrect: false },
            { text: "Value = Compass + Watch + Dollar.", isCorrect: true },
            { text: "IQ + EQ + May mắn.", isCorrect: false },
            { text: "Nỗ lực x Sự thông minh.", isCorrect: false }
        ],
        explanation: "Value = Compass + Watch + Dollar (Định hướng đúng + Kỷ luật thời gian + Tối ưu nguồn lực)."
    },
    {
        q: "Khi đối mặt với một cơn giận hoặc một quyết định bốc đồng sắp xảy ra, phương pháp 'sơ cứu tâm lý' ngay lập tức là gì?",
        options: [
            { text: "Cố gắng kiềm chế, uống nước, đi chỗ khác.", isCorrect: false },
            { text: "Mindfulness với công cụ SBA.", isCorrect: true },
            { text: "Hít sâu 3 lần và nhắm mắt lại.", isCorrect: false },
            { text: "Đếm từ 1 đến 10 để kiềm chế cơn giận.", isCorrect: false }
        ],
        explanation: "Thói quen Mindfulness (Tỉnh thức) với công cụ SBA (Stop - Breathe - Ask). Dừng lại, hít thở và tự hỏi mình một câu hỏi chất lượng."
    },
    {
        q: "Cảm giác thỏa mãn khi ăn một món ngon, lướt Tiktok hoặc chơi game giải trí thuộc nhóm hạnh phúc nào?",
        options: [
            { text: "Sở thích, niềm vui.", isCorrect: false },
            { text: "Level 1 - Pleasure (Thú vui).", isCorrect: true },
            { text: "Đam mê nhất thời.", isCorrect: false },
            { text: "Sự thư giãn đơn thuần.", isCorrect: false }
        ],
        explanation: "Level 1 - Pleasure (Thú vui). Cần nhận biết để không bị nghiện và nhầm lẫn với Hạnh phúc đích thực (Higher Purpose)."
    },
    {
        q: "Để một nhân sự thực sự hạnh phúc và cống hiến hết mình tại nơi làm việc, sếp cần cung cấp 3 đòn bẩy tâm lý (Levers) nào?",
        options: [
            { text: "Lương cao, sếp tâm lý, đồng nghiệp vui vẻ.", isCorrect: false },
            { text: "Progress, Control và Connectedness.", isCorrect: true },
            { text: "Môi trường làm việc chuyên nghiệp + Chế độ đãi ngộ tốt.", isCorrect: false },
            { text: "Công việc ổn định + Cơ hội thăng tiến rõ ràng.", isCorrect: false }
        ],
        explanation: "Sense of Progress (Thấy mình tiến bộ), Control (Có quyền kiểm soát/Tự chủ) và Connectedness (Sự kết nối ý nghĩa)."
    },
    {
        q: "Để rèn luyện thói quen Lạc quan (Optimism) một cách có hệ thống chứ không phải kiểu 'AQ' tích cực độc hại, bạn dùng công cụ nào?",
        options: [
            { text: "Cứ cười lên thôi, nghĩ về những điều tốt đẹp.", isCorrect: false },
            { text: "Mô hình ABCDE.", isCorrect: true },
            { text: "Viết nhật ký biết ơn mỗi ngày.", isCorrect: false },
            { text: "Tự ám thị những điều tích cực.", isCorrect: false }
        ],
        explanation: "Mô hình ABCDE – Phân tích sự kiện, niềm tin, hệ quả và tái định hình tư duy logic."
    },
    {
        q: "Trạng thái bạn làm việc say mê đến mức quên cả thời gian và không cảm thấy mệt mỏi, năng suất tăng gấp nhiều lần được gọi là gì?",
        options: [
            { text: "Đang vào phom, làm việc năng suất.", isCorrect: false },
            { text: "Flow hoặc Microflow.", isCorrect: true },
            { text: "Làm việc bằng cả niềm đam mê.", isCorrect: false },
            { text: "Sự tập trung tuyệt đối.", isCorrect: false }
        ],
        explanation: "Trạng thái Flow (Dòng chảy) hoặc rèn luyện qua các Microflow hàng ngày."
    },
    {
        q: "Văn hóa nền tảng số 1 để một tập thể dám nói lên sự thật, dám sáng tạo và cống hiến là gì?",
        options: [
            { text: "Môi trường thân thiện, văn hóa gia đình.", isCorrect: false },
            { text: "Psychological Safety.", isCorrect: true },
            { text: "Hệ thống quản trị minh bạch.", isCorrect: false },
            { text: "Sự tôn trọng và lắng nghe cấp dưới.", isCorrect: false }
        ],
        explanation: "Psychological Safety (An toàn tâm lý) – Đảm bảo nhân sự không sợ bị trừng phạt khi nêu ý kiến hay mắc sai lầm có tính toán."
    },
    {
        q: "Công cụ nào rẻ nhất nhưng hiệu quả nhất để xây dựng văn hóa Biết ơn (Gratitude) trong một tổ chức?",
        options: [
            { text: "Thưởng tiền nóng, tặng quà.", isCorrect: false },
            { text: "WOW Cards.", isCorrect: true },
            { text: "Bình chọn nhân viên xuất sắc nhất tháng.", isCorrect: false },
            { text: "Tổ chức các buổi tiệc gắn kết đội ngũ.", isCorrect: false }
        ],
        explanation: "WOW Cards – Những tấm thiệp/ghi nhận cụ thể, chân thành và kịp thời gửi đến đồng nghiệp."
    },
    {
        q: "Theo thói quen Vị nhân (Altruism), cách nhanh nhất để bạn phát triển năng lực của bản thân một cách bền vững là gì?",
        options: [
            { text: "Đi học thêm thật nhiều khóa học, đọc nhiều sách.", isCorrect: false },
            { text: "Buddy / Mentor.", isCorrect: true },
            { text: "Tự mày mò nghiên cứu và trải nghiệm thực tế.", isCorrect: false },
            { text: "Thay đổi môi trường làm việc để học hỏi thêm.", isCorrect: false }
        ],
        explanation: "Tìm kiếm Buddy (Người đồng hành) / Mentor (Cố vấn) để chia sẻ, giúp đỡ người khác hoặc được dẫn dắt."
    }
];

let currentStep = 0;
let score = 0;
let answered = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initQuiz() {
    renderQuestion();
}

function renderQuestion() {
    const data = quizData[currentStep];
    const container = document.getElementById('quizContent');
    const progressBar = document.getElementById('quizProgressBar');

    progressBar.style.width = `${((currentStep) / quizData.length) * 100}%`;

    // Sort options to randomly place correct answer
    const currentOptions = [...data.options];
    shuffleArray(currentOptions);
    data.shuffledOptions = currentOptions;

    const labels = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
        <div class="quiz-question-tag">Câu hỏi ${currentStep + 1}/${quizData.length}</div>
        <div class="quiz-question-text">${data.q}</div>
        <div class="quiz-options">
            ${currentOptions.map((opt, idx) => `
                <div class="quiz-option" onclick="handleAnswer(${idx}, ${opt.isCorrect})">
                    <span style="font-weight:800; color:var(--warm-yellow); margin-right:12px; font-size:1.1rem">${labels[idx]}.</span>
                    ${opt.text}
                </div>
            `).join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback">
            <h4>Đáp án đúng:</h4>
            <p>${data.explanation}</p>
        </div>
        <button class="btn-quiz-next" id="quizNextBtn" onclick="nextQuestion()">Tiếp theo</button>
    `;
    answered = false;
}

function handleAnswer(index, isCorrect) {
    if (answered) return;
    answered = true;

    const options = document.querySelectorAll('.quiz-option');
    options[index].classList.add(isCorrect ? 'correct' : 'wrong');

    // Find and highlight correct option if user was wrong
    if (!isCorrect) {
        options.forEach((opt, idx) => {
            if (quizData[currentStep].shuffledOptions[idx].isCorrect) {
                opt.classList.add('correct');
            }
        });
    } else {
        score++;
    }

    document.getElementById('quizFeedback').style.display = 'block';
    document.getElementById('quizNextBtn').style.display = 'block';
}

function nextQuestion() {
    currentStep++;
    if (currentStep < quizData.length) {
        renderQuestion();
    } else {
        showSummary();
    }
}

function showSummary() {
    document.getElementById('quizProgressBar').style.width = '100%';
    const container = document.getElementById('quizContent');
    const summary = document.getElementById('quizSummary');

    if (container) container.style.display = 'none';
    if (summary) summary.style.display = 'block';

    const finalScoreEl = document.getElementById('finalScore');
    if (finalScoreEl) finalScoreEl.innerText = `${score}/${quizData.length}`;
}

function finishQuiz() {
    // Navigate back to home or just hide
    document.getElementById('quizOverlay').classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 800);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
