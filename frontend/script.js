console.log("Welcome to SpecForge-AI");

const projectName = "SpecForge-AI";
console.log(projectName);

const fileInput = document.getElementById("requirement-file");
const fileInfo = document.getElementById("file-info");

fileInput.addEventListener("change", function () {

    const file = fileInput.files[0];

    if (!file) {
        fileInfo.innerHTML = "❌ Please select a file.";
        return;
    }

    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);

    if (
        file.type === "application/pdf" ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
        fileInfo.innerHTML = `
            Selected File: ${file.name}<br>
            File Size: ${fileSizeMB} MB<br>
            File Type: ${file.type}<br>
            Status: ✅ File Accepted
        `;
    } else {
        fileInfo.innerHTML = `
            Selected File: ${file.name}<br>
            File Size: ${fileSizeMB} MB<br>
            File Type: ${file.type}<br>
            Status: ❌ Unsupported File Type
        `;
    }
});