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
			"datesWorked": "March 2015 - December 2015",
			"description": "Place Holder"
		},
		{
			"employer": "ProUnlimited",
			"title": "QC Testor",
			"location": "EOrange County, CA",
			"datesWorked": "September 2008 - March 2015",
			"description": "Place Holder"
		}
	]
};

var education = {
	"schools": [
		{ "name": "University of California, Santa Cruz",
			"datesAttended": "1996 - 2001",
			"location": "Windsor, Ontario, Canada",
			"degree": "B.A.",
			"major": "Math",
			"url": "www.ucsc.edu"
		}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Object-Oriented Javascript",
			"completed": "November 2014",
			"url": "https://www.udacity.com/course/ud015"
		},
		{ "school": "Udacity",
			"title": "HTML5 Canvas",
			"completed": "November 2014",
			"url": "https://www.udacity.com/course/ud292"
		},
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud304"
		},
		{ "school": "Udacity",
			"title": "Web Development",
			"completed": "August 2014",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Online Portfolio",
			"datesWorked": "October 2014",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/guitar.png"],
			"url": "http://www.github.com/mrrockabilly"
		},
		{
			"title": "Mr. Rockabilly",
			"datesWorked": "June 2014 - August 2014",
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

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
