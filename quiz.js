const quizData = [
    {
        q: "Bạn có một định hướng cuộc đời (Mục tiêu/Đam mê) rất rõ ràng và hay nói về nó, nhưng lại không dành thời gian hay tiền bạc để rèn luyện. Trạng thái này gọi là gì?",
        options: [
            { text: "Kẻ mộng mơ, lười biếng.", isCorrect: false, label: "Người chưa học" },
            { text: "NATO (No Action Talk Only) – Trạng thái chỉ có Compass mà thiếu Watch và Dollar.", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "NATO (No Action Talk Only) – Trạng thái chỉ có Compass (Kim chỉ nam) mà thiếu Watch (Thời gian) và Dollar (Nguồn lực)."
    },
    {
        q: "Công thức thực tế nhất để tạo ra Giá trị (Value) không thể thay thế của một con người là gì?",
        options: [
            { text: "Thái độ + Kỹ năng + Kiến thức.", isCorrect: false, label: "Người chưa học" },
            { text: "Value = Compass + Watch + Dollar.", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "Value = Compass + Watch + Dollar (Định hướng đúng + Kỷ luật thời gian + Tối ưu nguồn lực)."
    },
    {
        q: "Khi đối mặt với một cơn giận hoặc một quyết định bốc đồng sắp xảy ra, phương pháp 'sơ cứu tâm lý' ngay lập tức là gì?",
        options: [
            { text: "Cố gắng kiềm chế, uống nước, đi chỗ khác.", isCorrect: false, label: "Người chưa học" },
            { text: "Thói quen Mindfulness với công cụ SBA (Stop - Breathe - Ask).", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "Thói quen Mindfulness (Tỉnh thức) với công cụ SBA (Stop - Breathe - Ask). Dừng lại, hít thở và tự hỏi mình một câu hỏi chất lượng."
    },
    {
        q: "Cảm giác thỏa mãn khi ăn một món ngon, lướt Tiktok hoặc chơi game giải trí thuộc nhóm hạnh phúc nào?",
        options: [
            { text: "Sở thích, niềm vui.", isCorrect: false, label: "Người chưa học" },
            { text: "Level 1 - Pleasure (Khoái cảm ngắn hạn).", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "Level 1 - Pleasure (Khoái cảm ngắn hạn). Cần nhận biết để không bị nghiện và nhầm lẫn với Hạnh phúc đích thực (Higher Purpose)."
    },
    {
        q: "Để một nhân sự thực sự hạnh phúc và cống hiến hết mình tại nơi làm việc, sếp cần cung cấp 3 đòn bẩy tâm lý (Levers) nào?",
        options: [
            { text: "Lương cao, sếp tâm lý, đồng nghiệp vui vẻ.", isCorrect: false, label: "Người chưa học" },
            { text: "Progress (Tiến bộ), Control (Tự chủ) và Connectedness (Kết nối).", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "Sense of Progress (Thấy mình tiến bộ), Control (Có quyền kiểm soát/Tự chủ) và Connectedness (Sự kết nối ý nghĩa)."
    },
    {
        q: "Để rèn luyện thói quen Lạc quan (Optimism) một cách có hệ thống chứ không phải kiểu 'AQ' tích cực độc hại, bạn dùng công cụ nào?",
        options: [
            { text: "Cứ cười lên thôi, nghĩ về những điều tốt đẹp.", isCorrect: false, label: "Người chưa học" },
            { text: "Mô hình ABCDE.", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "Mô hình ABCDE – Phân tích sự kiện, niềm tin, hệ quả và tái định hình tư duy logic."
    },
    {
        q: "Trạng thái bạn làm việc say mê đến mức quên cả thời gian và không cảm thấy mệt mỏi, năng suất tăng gấp nhiều lần được gọi là gì?",
        options: [
            { text: "Đang vào phom, làm việc năng suất.", isCorrect: false, label: "Người chưa học" },
            { text: "Trạng thái Flow (Dòng chảy) hoặc Microflow.", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "Trạng thái Flow (Dòng chảy) hoặc rèn luyện qua các Microflow hàng ngày."
    },
    {
        q: "Văn hóa nền tảng số 1 để một tập thể dám nói lên sự thật, dám sáng tạo và cống hiến là gì?",
        options: [
            { text: "Môi trường thân thiện, văn hóa gia đình.", isCorrect: false, label: "Người chưa học" },
            { text: "Psychological Safety (An toàn tâm lý).", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "Psychological Safety (An toàn tâm lý) – Đảm bảo nhân sự không sợ bị trừng phạt khi nêu ý kiến hay mắc sai lầm có tính toán."
    },
    {
        q: "Công cụ nào rẻ nhất nhưng hiệu quả nhất để xây dựng văn hóa Biết ơn (Gratitude) trong một tổ chức?",
        options: [
            { text: "Thưởng tiền nóng, tặng quà.", isCorrect: false, label: "Người chưa học" },
            { text: "WOW Cards – Thiệp ghi nhận chân thành.", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "WOW Cards – Những tấm thiệp/ghi nhận cụ thể, chân thành và kịp thời gửi đến đồng nghiệp."
    },
    {
        q: "Theo thói quen Vị nhân (Altruism), cách nhanh nhất để bạn phát triển năng lực của bản thân một cách bền vững là gì?",
        options: [
            { text: "Đi học thêm thật nhiều khóa học, đọc nhiều sách.", isCorrect: false, label: "Người chưa học" },
            { text: "Tìm kiếm Buddy / Mentor để chia sẻ và được dẫn dắt.", isCorrect: true, label: "Hệ điều hành DH" }
        ],
        explanation: "Tìm kiếm Buddy (Người đồng hành) / Mentor (Cố vấn) để chia sẻ, giúp đỡ người khác hoặc được dẫn dắt."
    }
];

let currentStep = 0;
let score = 0;
let answered = false;

function initQuiz() {
    renderQuestion();
}

function renderQuestion() {
    const data = quizData[currentStep];
    const container = document.getElementById('quizContent');
    const progressBar = document.getElementById('quizProgressBar');

    progressBar.style.width = `${((currentStep) / quizData.length) * 100}%`;

    container.innerHTML = `
        <div class="quiz-question-tag">Câu hỏi ${currentStep + 1}/${quizData.length}</div>
        <div class="quiz-question-text">${data.q}</div>
        <div class="quiz-options">
            ${data.options.map((opt, idx) => `
                <div class="quiz-option" onclick="handleAnswer(${idx}, ${opt.isCorrect})">
                    <span style="font-size:0.8rem; background:rgba(255,255,255,0.1); padding:2px 8px; border-radius:4px; margin-right:12px; opacity:0.6">${opt.label}</span>
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
            if (quizData[currentStep].options[idx].isCorrect) {
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

    container.style.display = 'none';
    summary.style.display = 'block';

    document.getElementById('finalScore').innerText = `${score}/${quizData.length}`;
}

function finishQuiz() {
    document.getElementById('quizOverlay').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('quizOverlay').style.display = 'none';
    }, 800);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
