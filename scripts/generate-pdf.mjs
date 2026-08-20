import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  // Standard Letter size: 612 x 792 points
  const page = pdfDoc.addPage([612, 792]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const colors = {
    primary: rgb(0.043, 0.082, 0.165), // Deep Navy
    text: rgb(0.15, 0.15, 0.15),
    lightText: rgb(0.4, 0.4, 0.4),
    accent: rgb(0.0, 0.5, 0.7), // Tealish blue
    line: rgb(0.85, 0.85, 0.85)
  };

  let y = 742; // Start from top margin
  const margin = 50;
  const width = 612 - 2 * margin;

  // Helper to draw text
  function drawText(text, x, fontSize, font, color = colors.text) {
    page.drawText(text, {
      x: x,
      y: y,
      size: fontSize,
      font: font,
      color: color
    });
  }

  // Draw Header
  y -= 10;
  drawText("MUHAMMAD NOUMAN", margin, 22, fontBold, colors.primary);
  y -= 16;
  drawText("Software Engineering Student | C#/.NET | Web Development | Python & Libraries", margin, 10, fontItalic, colors.accent);
  y -= 14;
  drawText("+92 300 6798914  |  noumanmuhammad479@gmail.com  |  Bhalwal, Sargodha, Pakistan", margin, 9, fontRegular, colors.lightText);
  y -= 12;
  drawText("LinkedIn: linkedin.com/in/muhammad-nouman-6ba6982b6  |  GitHub: github.com/mnoumanrasheed  |  Kaggle: kaggle.com/mnoumanrasheed", margin, 8, fontRegular, colors.lightText);

  y -= 15;
  // Draw separator line
  page.drawLine({
    start: { x: margin, y: y },
    end: { x: margin + width, y: y },
    thickness: 1.5,
    color: colors.primary,
  });

  y -= 18;

  // Section: Objective
  drawText("OBJECTIVE", margin, 11, fontBold, colors.primary);
  y -= 14;
  const objectiveText = "A results-driven Software Engineering student seeking to leverage expertise in C#/.NET, web development, Python/OpenCV, and AI/Machine Learning within a progressive organization. Committed to delivering high-quality software solutions through strong academic knowledge, hands-on project experience, and proven analytical and leadership skills.";

  // Objective wrapping (very basic wrapping)
  const words = objectiveText.split(" ");
  let line = "";
  for (let word of words) {
    const testLine = line + word + " ";
    const width = fontRegular.widthOfTextAtSize(testLine, 9);
    if (width > 512) {
      drawText(line.trim(), margin, 9, fontRegular, colors.text);
      y -= 11;
      line = word + " ";
    } else {
      line = testLine;
    }
  }
  if (line) {
    drawText(line.trim(), margin, 9, fontRegular, colors.text);
    y -= 12;
  }

  y -= 8;

  // Section: Education
  drawText("EDUCATION", margin, 11, fontBold, colors.primary);
  y -= 4;
  page.drawLine({ start: { x: margin, y: y }, end: { x: margin + width, y: y }, thickness: 0.5, color: colors.line });
  y -= 12;

  // BS SE
  drawText("BS Software Engineering (6th Semester - In Progress)", margin, 9.5, fontBold, colors.text);
  page.drawText("2023 - Present", { x: 612 - margin - fontRegular.widthOfTextAtSize("2023 - Present", 9), y: y, size: 9, font: fontRegular, color: colors.lightText });
  y -= 11;
  drawText("University of Lahore - Sargodha Campus  |  CGPA: 3.99 / 4.00", margin, 9, fontRegular, colors.lightText);
  y -= 14;

  // FSc
  drawText("FSc Pre-Medical", margin, 9.5, fontBold, colors.text);
  page.drawText("2021 - 2023", { x: 612 - margin - fontRegular.widthOfTextAtSize("2021 - 2023", 9), y: y, size: 9, font: fontRegular, color: colors.lightText });
  y -= 11;
  drawText("Punjab Group of Colleges, Bhalwal  |  Marks: 78%", margin, 9, fontRegular, colors.lightText);
  y -= 14;

  // Matriculation
  drawText("Matriculation (Science)", margin, 9.5, fontBold, colors.text);
  page.drawText("2020", { x: 612 - margin - fontRegular.widthOfTextAtSize("2020", 9), y: y, size: 9, font: fontRegular, color: colors.lightText });
  y -= 11;
  drawText("Taleem-ul-Islam School, Bhalwal  |  Marks: 93%", margin, 9, fontRegular, colors.lightText);

  y -= 18;

  // Section: Projects
  drawText("PROJECTS", margin, 11, fontBold, colors.primary);
  y -= 4;
  page.drawLine({ start: { x: margin, y: y }, end: { x: margin + width, y: y }, thickness: 0.5, color: colors.line });
  y -= 12;

  // Project 1: SmartFace
  drawText("SmartFace Attendance System  |  C#, Windows Forms, OpenCV Face Recognition", margin, 9.5, fontBold, colors.text);
  y -= 11;
  drawText("• Developed a local desktop student registration and face detection/training application using a web camera.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 11;
  drawText("• Integrated SQLite database for automatic records, webcam tracking, and instant automated attendance logs.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 14;

  // Project 2: Web Portfolio
  drawText("Web Portfolio & Business Websites  |  Next.js, React, TypeScript, CSS", margin, 9.5, fontBold, colors.text);
  y -= 11;
  drawText("• Built a responsive Next.js portfolio, Al-Rasheed Super Store e-commerce landing page, and EV Consults agency sites.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 11;
  drawText("• Optimized UI/UX animations and styles with vanilla CSS variables and responsiveness principles.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 14;

  // Project 3: C# Desktop Systems
  drawText("C# Desktop Management Systems  |  C#, .NET Framework, Windows Forms, SQL Server", margin, 9.5, fontBold, colors.text);
  y -= 11;
  drawText("• Created functional Library Management and Employee Payroll management systems.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 11;
  drawText("• Programmed payroll salary logic, tax calculator algorithms, payslip generation, and interactive admin control panels.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 14;

  // Project 4: Image Processing & ML
  drawText("Image Processing & ML Fundamentals  |  Python, OpenCV, Scikit-learn, Pandas", margin, 9.5, fontBold, colors.text);
  y -= 11;
  drawText("• Programmed image manipulation algorithms including filters, edge detection, background removal, and batch scripts.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 11;
  drawText("• Developed an Iris flower species classifier utilizing Scikit-learn ML models for botanical prediction.", margin + 10, 8.5, fontRegular, colors.text);

  y -= 18;

  // Section: Experience
  drawText("PROFESSIONAL EXPERIENCE", margin, 11, fontBold, colors.primary);
  y -= 4;
  page.drawLine({ start: { x: margin, y: y }, end: { x: margin + width, y: y }, thickness: 0.5, color: colors.line });
  y -= 12;

  // Experience 1
  drawText("Networking Intern  |  Interstate Gas Systems, Islamabad", margin, 9.5, fontBold, colors.text);
  page.drawText("Aug 2025 - Sep 2025", { x: 612 - margin - fontRegular.widthOfTextAtSize("Aug 2025 - Sep 2025", 9), y: y, size: 9, font: fontRegular, color: colors.lightText });
  y -= 11;
  drawText("• Handled system setups, learned server operation mechanisms, and drafted technical workflows and networks diagram.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 11;
  drawText("• Observed network infrastructure routing and strengthened troubleshooting, collaboration, and IT document structure.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 14;

  // Experience 2
  drawText("Educator  |  School & Academy", margin, 9.5, fontBold, colors.text);
  page.drawText("2022 - 2023", { x: 612 - margin - fontRegular.widthOfTextAtSize("2022 - 2023", 9), y: y, size: 9, font: fontRegular, color: colors.lightText });
  y -= 11;
  drawText("• Taught pre-matriculation and matriculation level classes, styling curriculum explanation to suit student needs.", margin + 10, 8.5, fontRegular, colors.text);
  y -= 11;
  drawText("• Developed strong communication, public speaking, leadership, and group coordination skills.", margin + 10, 8.5, fontRegular, colors.text);

  y -= 18;

  // Section: Technical Skills
  drawText("TECHNICAL SKILLS", margin, 11, fontBold, colors.primary);
  y -= 4;
  page.drawLine({ start: { x: margin, y: y }, end: { x: margin + width, y: y }, thickness: 0.5, color: colors.line });
  y -= 12;

  drawText("• Programming: C++, C#, Java, Python, TypeScript, SQL", margin, 8.5, fontRegular, colors.text);
  y -= 10;
  drawText("• Frontend & Frameworks: HTML, CSS, JavaScript, Next.js, React, .NET, Windows Forms", margin, 8.5, fontRegular, colors.text);
  y -= 10;
  drawText("• AI & Data: OpenCV, Scikit-learn, Machine Learning basics, Image Processing, Pandas, NumPy", margin, 8.5, fontRegular, colors.text);
  y -= 10;
  drawText("• Systems & Tools: Visual Studio, VS Code, Git & GitHub, Linux (Ubuntu), Kaggle, Networking Basics", margin, 8.5, fontRegular, colors.text);

  y -= 16;

  // Section: Certifications & Additional Info
  drawText("CERTIFICATIONS & LANGUAGES", margin, 11, fontBold, colors.primary);
  y -= 4;
  page.drawLine({ start: { x: margin, y: y }, end: { x: margin + width, y: y }, thickness: 0.5, color: colors.line });
  y -= 12;

  drawText("• Prompt Engineering Workshop Certificate - University of Lahore (Sargodha Campus)", margin, 8.5, fontRegular, colors.text);
  y -= 10;
  drawText("• Internship Certificate - Interstate Gas Systems, Islamabad (2025)", margin, 8.5, fontRegular, colors.text);
  y -= 10;
  drawText("• Debate Competitions Certificate - Multiple debate certificates (School to University levels)", margin, 8.5, fontRegular, colors.text);
  y -= 10;
  drawText("• Languages: English (Professional), Urdu (Native)  |  Soft Skills: Critical Thinking, Event Organization, Teamwork", margin, 8.5, fontRegular, colors.text);

  const pdfBytes = await pdfDoc.save();
  const dirPath = path.dirname('public/cv.pdf');
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync('public/cv.pdf', pdfBytes);
  console.log("Professional PDF CV generated successfully at public/cv.pdf");
}

generateCV().catch(err => {
  console.error("Error generating CV PDF: ", err);
  process.exit(1);
});
