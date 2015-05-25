var bio =
{
    "name": "John Doe",
    "role": "Web Developler",
    "contacts": {
        "email": "john.doe@google.com",
        "github": "johndoe",
        "location": "Silicon Valley"
    },
    "welcomeMessage": "The only real mistake is the one from which we learn nothing. -Henry Ford",
    "skills": [
        "Project Management",
        "Java",
        "C/C++",
        "Python",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
    ],
    "bioPic": "images/portrait.svg",
    "displayFooter": function(){
        var email = '<li class="white-text"> Email: ' + this.contacts.email + "</li>";
        var github = '<li class="white-text"> GitHub: ' + this.contacts.github + "</li>";
        $("#footerContacts").append(email);
        $("#footerContacts").append(github);
    },
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);

        var formattedPic = HTMLbioPic.replace("%data%", this.bioPic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").append(formattedPic);
        $("#header").append(formattedWelcome);

        if (this.skills.length > 0)
        {
            $("#header").append(HTMLskillsStart);

            for (var i=0; i<this.skills.length; i++)
            {
                var tmpSkill = HTMLskills.replace("%data%", this.skills[i]);
                $("#skills").append(tmpSkill);
            }
        }
    }
};




var work =
{
    "jobs": [
        {
            "employer" : "Uncle Sam",
            "title" : "President",
            "location" : "Washington, DC",
            "date" : "2012 - 2015",
            "description" : "Take care of the planet and avoid utter desctruction"
        },
        {
            "employer" : "Office Depot",
            "title" : "Customer Service Specialist",
            "location" : "Mt. Vernon, WA",
            "date" : "2008",
            "description" : "Made copies and made customers happy"
        }
    ],
    "display": function() {
        for (job in this.jobs)
        {
            $("#workExperience").append(HTMLworkStart);

            var tmpEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
            var tmpTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);

            var tmpDate = HTMLworkDates.replace("%data%", this.jobs[job].date);
            var tmpLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
            var tmpDesc = HTMLworkDescription.replace("%data%", this.jobs[job].description);

            var formattedEmployerTitle = tmpEmployer + tmpTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(tmpDate);
            $(".work-entry:last").append(tmpLocation);
            $(".work-entry:last").append(tmpDesc);
        }
    }
};




var projects =
{
    "projects": [
        {
            "title": "Portfolio Page",
            "date": "April 2015",
            "github": "https://github.com",
            "description": "A dashboard for my projects",
            "images": ["images/portfolio.svg"]
        },
        {
            "title": "Resume",
            "date": "May 2015",
            "github": "https://github.com",
            "description": "A sample resume showcasing the use of JavaScript",
            "images": ["images/portfolio.svg"]
        }
    ],
    "display": function(){
        //console.log(this.projects[0].title);
        for (p in this.projects){
            $("#projects").append(HTMLprojectStart);

            var tmpTitle = HTMLprojectTitleLink.replace("%data%", this.projects[p].title);
            tmpTitle = tmpTitle.replace("%link%", this.projects[p].github);
            var tmpDate = HTMLprojectDates.replace("%data%", this.projects[p].date);
            var tmpDescription= HTMLprojectDescription.replace("%data%", this.projects[p].description);

            $(".project-entry:last").append(tmpTitle);
            $(".project-entry:last").append(tmpDate);
            $(".project-entry:last").append(tmpDescription);

            if (this.projects[p].images.length > 0) {
                for (i in this.projects[p].images){
                    var tmpImage = HTMLprojectImage.replace("%data%", this.projects[p].images[i]);
                    $(".project-entry:last").append(tmpImage);
                }
            }
        }
    }
};




var education =
{
    "schools": [
        {
            "name": "Brigham Young University (BYU)",
            "location": "Provo, UT",
            "degree": "BA",
            "major": "Russian",
            "minors": ["Computer Science", "Asian Studies", "Aerospace Studies"],
            "date": "2012",
            "url": "http://www.byu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-end Web Developer Nanodegree",
            "school": "Udacity",
            "date": "2015",
            "url": "http://www.udacity.com"
        }
    ],
    "display": function() {
        for (s in this.schools){
            $("#education").append(HTMLschoolStart);

            var tmpName = HTMLschoolName.replace("%data%", this.schools[s].name);
            var tmpDegree = HTMLschoolDegree.replace("%data%", this.schools[s].degree);
            var tmpDate = HTMLschoolDates.replace("%data%", this.schools[s].date);
            var tmpLocation = HTMLschoolLocation.replace("%data%", this.schools[s].location);
            var tmpMajor = HTMLschoolMajor.replace("%data%", this.schools[s].major);

            var minorList = [];
            for (m in this.schools[s].minors){
                minorList.push(this.schools[s].minors[m]);
            }
            var tmpMinors = minorList.join(", ");
            tmpMinors = HTMLschoolMinor.replace("%data%", tmpMinors);

            $(".education-entry:last").append( tmpName + tmpDegree);
            $(".education-entry:last").append( tmpDate);
            $(".education-entry:last").append( tmpLocation);
            $(".education-entry:last").append( tmpMajor);
            $(".education-entry:last").append( tmpMinors);
        }

        $("#education").append(HTMLonlineClasses);
        for (o in this.onlineCourses){
            $("#education").append(HTMLschoolStart);

            var tmpTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[o].title);
            var tmpSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[o].school);
            var tmpDate = HTMLonlineDates.replace("%data%", this.onlineCourses[o].date);
            var tmpURL = HTMLonlineURL.replace("%data%", this.onlineCourses[o].url);

            $(".education-entry:last").append(tmpTitle + tmpSchool);
            $(".education-entry:last").append(tmpDate);
            $(".education-entry:last").append(tmpURL);
        }
    }
};


bio.display();
bio.displayFooter();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);



//
