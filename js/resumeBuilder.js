'use strict';
var work = {
  'jobs': [{
    'employer': 'Self-employed',
    'title': 'Translator',
    'location': 'Reykjavík, Iceland',
    'dates': 'September 2011-',
    'description': 'Translator of Japanese and German into English in the fields of intellectual property and scientific research publishing.'
  }, {
    'employer': 'Park IP',
    'title': 'Project Management Associate',
    'location': 'New York, NY',
    'dates': 'July 2010-September 2011',
    'description': 'Coordinated a global network of translators to meet corporate clients\' translation needs.'
  }]
};
var projects = {
  'projects': [{
    'title': 'Patent for a \'mobile telephone\'',
    'dates': 'Published on Nov 6, 2013',
    'description': 'A mobile telephone in which a cartilage conduction unit for making contact with the ear cartilage is provided to at least one of two corner parts at an upper side of the mobile telephone. [...]',
    'images': ['images/project1_image1.png', 'images/project1_image2.png'],
    'link': 'http://www.google.com/patents/EP2661055A1'
  }, {
    'title': 'Patent for a \'heat pump system\'',
    'dates': 'Published on Nov 29, 2012',
    'description': 'A refrigerant circuit includes a compressor, a heat source-side heat exchanger, and a usage-side heat exchanger capable of heating an aqueous medium. [...]',
    'images': ['images/project2_image1.png', 'images/project2_image2.png'],
    'link': 'https://www.google.com/patents/US20120297808'
  }]
};
var bio = {
  'name': 'Spencer Walle',
  'role': 'Front-end Web Developer',
  'welcomeMessage': 'Welcome to my resume!',
  'contacts': {
    'email': 'spncrwll@gmail.com',
    'mobile': '+1 (555) 555-5555',
    'github': 'spncrwll',
    'location': 'Reykjavík, Iceland'
  },
  'skills': ['Translation', 'Front-end web development', 'marathoning TV shows'],
  'bioPic': 'images/bioPic.jpg',
  'livedBefore': ['Marseille, France', 'Barcelona, Spain']
};
var education = {
  'schools': [{
    'name': 'Princeton University',
    'location': 'Princeton, NJ (USA)',
    'degree': 'BA',
    'major': 'Near Eastern Studies, South Asian Studies',
    'dates': '2006-2010',
    'url': 'http://www.princeton.edu'
  }, {
    'name': 'Middlesex School',
    'location': 'Concord, MA (USA)',
    'degree': 'High school',
    'major': 'N/A',
    'dates': '2002-2006',
    'url': 'http://www.mxschool.edu'
  }],
  'onlineCourses': [{
    'title': 'Front-end Web Development',
    'school': 'Udacity',
    'dates': '2015-',
    'url': 'http://www.udacity.com',
    'courseURL': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }, {
    'title': 'Other online degree',
    'school': 'Other Online School',
    'dates': '2015-',
    'url': 'http://www.instagram.com',
    'courseURL': 'http://www.instagram.com'
  }]
};
var data = '%data%'
var $header = $('#header');
// begin section of code that appends information
// name, role, biopic, welcome message
bio.displayInfo = function() {
  var formattedName = HTMLheaderName.replace(data, bio.name);
  var formattedRole = HTMLheaderRole.replace(data, bio.role);
  var formattedbioPic = HTMLbioPic.replace(data, bio.bioPic);
  var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
  $header.prepend(formattedRole);
  $header.prepend(formattedName);
  $header.append(formattedbioPic);
  $header.append(formattedWelcome);
};
bio.displayInfo();

// header and footer contacts
bio.displayContacts = function() {
  var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
  var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
  var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
  var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
  $('#topContacts').append(formattedEmail + formattedMobile + formattedGithub + formattedLocation);
  $('#footerContacts').append(formattedEmail + formattedMobile + formattedGithub + formattedLocation);
};
bio.displayContacts();

//skills
if (bio.skills.length) {
  $header.append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
    $('#skills').append(formattedSkill);
  }
}

//education
education.display = function() {
  for (var i = 0; i < education.schools.length; i++) {
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name).replace('#', education.schools[i].url);
    var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].major);
    $('.education-entry:last').append(formattedSchoolName + formattedDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
  };
  $('#education-entry:last').append(HTMLschoolStart);
  $('.education-entry:last').append(HTMLonlineClasses);
  for (var i = 0; i < education.onlineCourses.length; i++) {
    var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title).replace('#', education.onlineCourses[i].courseURL);
    var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school).replace('#', education.onlineCourses[i].url);
    var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
    $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates);
  };
};
education.display();

// jobs
work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
    var formattedEmployerAndTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
    var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
    var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
    $('.work-entry:last').append(formattedEmployerAndTitle + formattedDates + formattedLocation + formattedDescription);
  };
};
work.display();

// projects
projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title).replace('%link%', projects.projects[i].link);
    var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
    var formattedDescrip = HTMLprojectDescription.replace(data, projects.projects[i].description);
    $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescrip);
    var imageNumber = 1;
    for (var j = 0; j < projects.projects[i].images.length; j++) {
      var imageNumberString = (j + 1).toString();
      var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]).replace('%number%', imageNumberString);
      $('.project-entry:last').append(formattedImage);
    }
  }
}
projects.display();
//end code that appends information

// locationizer
function locationizer(work_obj) {
  var locationArray = [];
  for (i = 0; i < work_obj.jobs.length; i++) {
    locationArray.push(work_obj.jobs[i].location);
  }
  return locationArray;
}

// international naming
$('#main').append(internationalizeButton);

function inName(name) {
  name = name.trim().split(' ');
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + ' ' + name[1];
};

/// map
$('#mapDiv').append(googleMap);
