const fs = require('fs');
const content = fs.readFileSync('about/annual-reports/index.html', 'utf8');
const quizStart = content.indexOf('<section id="quiz"');
const quizEnd = content.indexOf('</section>', quizStart) + 10;
if (quizStart !== -1) {
    fs.writeFileSync('scratch/quiz_html.txt', content.substring(quizStart, quizEnd));
}
