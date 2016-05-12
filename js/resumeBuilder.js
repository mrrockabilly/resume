
var bio = {
    "name": "Jason Rubalcaba",
    "role": "Analyst and Developer",
    "contacts": {
        "email": "jason.ray.rubalcaba@gmail.com",
        "github": "mrrockabilly",
        "location": "Koreatown, Los Angeles",
        "mobile": "310-650-8107"
    },
    "biopic": "images/me.png",
    "welcomeMessage": "I'm a social media analyst and web developer.  Thanks for checking out my resume!",
    "skills": ["Social Media Analytics", "Web Development", "Quality Control", "SDLC"]
};

var work = {
    "jobs": [{
        "employer": "KPMG",
        "title": "Socail Media Analyst and Quality Control Supervisor",
        "location": "Orange County, CA",
        "dates": "August 2013-November 2015",
        "description": "Prepared Power Point presentations for executive level management on social media data. <br /> Wrote training manuals and FAQ documents for various in-house developed tools, these documents were used internally by management as well as by clients.<br /> Served as a liaison between clients and a software development team to improve the end user experience for the customer. <br />Supervised the social media quality control team, which included local and overseas contractors."
    }, {
        "employer": "ProUnlimited",
        "title": "QC Testor",
        "location": "Orange County, CA",
        "dates": "Sept 2012- August 2013",
        "description": "Worked closely with software developers and data scientists, provided a feedback loop to improve methods for data gathering. <br /> Reviewed and assured relevancy of gathered social media data. <br /> Analyzed Twitter and other social media trends Assisted management with data presentations to the customer, addressing customer expectations and concerns."
    }]
};

var education = {
    "schools": [{
        "name": "University of California, Santa Cruz",
        "date": "2009 - 2012",
        "location": "Santa Cruz, California",
        "degree": "B.A.",
        "major": ["Mathematics"],
        "minor": "Computational Math",
        "url": "www.ucsc.edu"
    }],
    "onlineCourses": [{
        "school": "Codecademy",
        "title": "Learn the Command Line",
        "completed": "October 2015",
        "url": "https://www.codecademy.com/learn/learn-the-command-line"
    }, {
        "school": "Codecademy",
        "title": "SQL",
        "completed": "November 2015",
        "url": "https://www.codecademy.com/learn/learn-sql"
    }]
};

var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "dates": "April 2016",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
            "Nanodegree.",
        "images": ["images/guitar.png"],
        "url": "https://github.com/mrrockabilly/portfolio_hw"
    }, {
        "title": "Mr. Rockabilly",
        "dates": "April 2016",
        "description": "Created an online portfolio using a Ruby on Rails framework. It runs on an Amazon EC2 instance.",
        "images": ["images/books.png"],
        "url": "http://mrrockabilly.com"
    }]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);
  $("#header").append(HTMLskillsStart);

  if (bio.skills.length > 0) {
      for (var i in bio.skills) {
          $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
      }
  }

  for (var k in formattedContactInfo) {
      $("#topContacts").append(formattedContactInfo[k]);
      $("#footerContacts").append(formattedContactInfo[k]);
  }
};

work.display = function() {
    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (var job in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }
};

// This function returns all the locations in my work history.
/*
function locationizer(work_obj) {
    var locationsArray = [];

    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationsArray.push(newLocation);
    }
    return locationsArray;

}


// This function converts names to an international statndard.
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
*/


projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var j in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title).replace("#", education.onlineCourses[j].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
