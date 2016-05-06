var bio = {
	"name": "Jason Rubalcaba",
	"role": "Analyst and Developer",
	"contacts": {
		"email": "jason.ray.rubalcaba@gmail.com",
		"github": "mrrockabilly",
		"location": "Koreatown, Los Angeles"
	},
	"picture": "images/me.png",
	"welcomeMessage": "I'm an experienced social media analyst and web developer.  Thanks for checking out my resume!",
	"skills": ["C++", "HTML", "CSS", "Ruby", "Quality Control", "SDLC"]
};

var work = {
	"jobs": [
		{
			"employer": "KPMG",
			"title": "Socail Media Analyst and Quality Control Supervisor",
			"location": "Orange County, CA",
			"datesWorked": "August 2013-November 2015",
			"description": "Place Holder"
		},
		{
			"employer": "ProUnlimited",
			"title": "QC Testor",
			"location": "Orange County, CA",
			"datesWorked": "Sept 2012- August 2013",
			"description": "Place Holder"
		}
	]
};

var education = {
	"schools": [
		{ "name": "University of California, Santa Cruz",
			"datesAttended": "2009 - 2012",
			"location": "Santa Cruz, California",
			"degree": "B.A.",
			"major": "Math",
			"url": "www.ucsc.edu"
		}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "HTML & CSS",
			"completed": "April 2016",
			"url": "https://www.udacity.com/course/ud304"
		},
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "May 2016",
			"url": "https://www.udacity.com/course/ud804"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Online Portfolio",
			"datesWorked": "April 2016",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/guitar.png"],
			"url": "http://www.github.com/mrrockabilly"
		},
		{
			"title": "Mr. Rockabilly",
			"datesWorked": "April 2016",
			"description": "Created an online portfolio using a Ruby on Rails framework. It runs on an Amazon EC2 instance.",
			"images": ["images/books.png"],
			"url": "http://mrrockabilly.com"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
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
$("#mapDiv").append(googleMap);

for(i in bio.skills)
{
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}


function displayWork()
{
	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}
}

// This function returns all the locations in my work history.

function locationizer(work_obj)
{
    var locationsArray = [];

    for (var job in work_obj.jobs)
    {
        var newLocation = work_obj.jobs[job].location;
        locationsArray.push(newLocation);
    }
    return locationsArray;

}

// This function logs clicks to console.
$(document).click(function(loc)
{
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

// This function converts names to an international statndard.
function inName(name)
{
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

projects.display = function()
{
		for(i in projects.projects)
		{
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
}

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

education.display();



console.log(inName(bio.name));
displayWork();
projects.display();
