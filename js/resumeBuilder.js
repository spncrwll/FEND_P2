var work = {
  "jobs": [{
    "employer": "Self-employed",
    "title": "Translator",
    "location": "Reykjavík, Iceland",
    "dates": "September 2011-",
    "description": "Translator of Japanese and German into English in the fields of intellectual property and scientific research publishing."
  }, {
    "employer": "Park IP",
    "title": "Project Management Associate",
    "location": "New York, NY",
    "dates": "July 2010-September 2011",
    "description": "Coordinated a global network of translators to meet corporate clients' translation needs."
  }]
};
var projects = {
  "projects": [{
    "title": "Patent for a 'mobile telephone'",
    "dates": "Published on Nov 6, 2013",
    "description": "A mobile telephone in which a cartilage conduction unit for making contact with the ear cartilage is provided to at least one of two corner parts at an upper side of the mobile telephone. [...]",
    "images": ["images/project1_image1.png", "images/project1_image2.png"],
    "link": "http://www.google.com/patents/EP2661055A1"
  }, {
    "title": "Patent for a 'heat pump system'",
    "dates": "Published on Nov 29, 2012",
    "description": "A refrigerant circuit includes a compressor, a heat source-side heat exchanger, and a usage-side heat exchanger capable of heating an aqueous medium. [...]",
    "images": ["images/project2_image1.png", "images/project2_image2.png"],
    "link": "https://www.google.com/patents/US20120297808"
  }]
}
var bio = {
  "name": "Spencer Walle",
  "role": "Front-end Web Developer",
  "welcomeMessage": "Welcome to my resume!",
  "contacts": {
    "email": "spncrwll@gmail.com",
    "mobile": "+1 (555) 555-5555",
    "github": "spncrwll",
    "location": "Reykjavík, Iceland"
  },
  "skills": ["Translation", "Front-end web development", "marathoning TV shows"],
  "bioPic": "images/bioPic.jpg",
  "livedBefore": ["Marseille, France", "Barcelona, Spain"]
};
var education = {
  "schools": [{
    "name": "Princeton University",
    "location": "Princeton, NJ (USA)",
    "degree": "BA",
    "major": "Near Eastern Studies, South Asian Studies",
    "dates": "2006-2010",
    "url": "http://www.princeton.edu"
  }, {
    "name": "Middlesex School",
    "location": "Concord, MA (USA)",
    "degree": "High school",
    "major": "N/A",
    "dates": "2002-2006",
    "url": "http://www.mxschool.edu"
  }],
  "onlineCourses": [{
    "title": "Front-end Web Development",
    "school": "Udacity",
    "dates": "2015-",
    "url": "http://www.udacity.com",
    "courseURL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }, {
    "title": "Other online degree",
    "school": "Other Online School",
    "dates": "2015-",
    "url": "http://www.instagram.com",
    "courseURL": "http://www.instagram.com"
  }]
};

// begin section of code that appends information
// name, role, biopic, welcome message
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);
$("#header").append(formattedWelcome);

// header and footer contacts
var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

//skills
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}

//education
function displayEducation() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%link%", education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);
  };
  $(".education-entry:last").append(HTMLonlineClasses);
  for (var course in education.onlineCourses) {
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%link%", education.onlineCourses[course].courseURL);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school).replace("%link%", education.onlineCourses[course].url);
    var formattedTitleAndSchool = formattedTitle + formattedSchool;
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedTitleAndSchool);
    $(".education-entry:last").append(formattedDates);
  };

};
displayEducation();

// jobs
function displayWork() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerAndTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployerAndTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();

// projects
projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%link%", projects.projects[project].link);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescrip = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescrip);
    var imageNumber = 1;
    for (var image in projects.projects[project].images) {
      var imageNumberString = imageNumber.toString();
      imageNumber++;
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]).replace("%number%", imageNumberString);
      $(".project-entry:last").append(formattedImage);
    }
  }
}
projects.display();
//end code that appends information

// locationizer
function locationizer(work_obj) {
  var locationArray = [];
  for (job in work_obj.jobs) {
    locationArray.push(work_obj.jobs[job].location);
  }
  return locationArray;
}

// international naming
$("#main").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
};

/// map
$("#mapDiv").append(googleMap);
