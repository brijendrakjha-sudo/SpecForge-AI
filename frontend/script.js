
console.log("Welcome to SpecForge-AI");

// Project features
const features = [
    "Requirement Analysis",
    "User Story Generation",
    "API Generation",
    "Database Schema Generation",
    "UML Diagram Generation",
    "Sprint Planning"
];

// Display features dynamically
const featuresList = document.getElementById("features-list");

if (featuresList) {
    features.forEach(function(feature) {
        const listItem = document.createElement("li");
        listItem.textContent = feature;
        featuresList.appendChild(listItem);
    });
}

// Get HTML elements
const fileInput = document.getElementById("requirement-file");
const fileInfo = document.getElementById("file-info");

// Validate uploaded file
function validateFile(file) {
    const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    return allowedTypes.includes(file.type);
}

// Display file information
function displayFileInfo(file, isValid) {
    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);

    fileInfo.replaceChildren();

    const details = [
        `File Name: ${file.name}`,
        `File Size: ${fileSizeMB} MB`,
        `File Type: ${file.type || "Unknown"}`,
        `Status: ${isValid ? "File Accepted" : "Unsupported File Type"}`
    ];

    details.forEach(function(detail) {
        const paragraph = document.createElement("p");
        paragraph.textContent = detail;
        fileInfo.appendChild(paragraph);
    });
}

// Listen for file selection
fileInput.addEventListener("change", function() {
    const file = fileInput.files[0];

    if (!file) {
        fileInfo.textContent = "Please select a file.";
        return;
    }

    const isValid = validateFile(file);
    displayFileInfo(file, isValid);
});
