// Navigation on multiple pages
$(function () {
    $("#nav-placeholder").load("nav.html");
});

$(function () {
    $("#footer-placeholder").load("footer.html");
});

// Link to Login Page
function login() {

    let email = "admin@gmail.com";
    let password = "password";

    if (document.getElementById("password").value === password && document.getElementById("email").value === email) {
        window.location.href = '/dashboard';
        return false;
    } else if (document.getElementById("password").value === password) {
        console.log('Password is not "password"');
    } else if (document.getElementById("email").value === email) {
        console.log('Email is not "admin@gmail.com"');
    } else {
        console.log('Other issue');
    }
}

// Link to Exams Page
function linkToExams() {
    window.location.href = '/exams';
    return false;
}

// Link to Exam Registration Page
function linkToExamRegistration() {
    window.location.href = '/exam-registration';
    return false;
}

// Register Courses
function deregisterCourses() {
    // TODO implement logic
    linkToExams();
}

// Deregister Courses
function registerCourses() {
    // TODO implement logic
    linkToExams();
}




