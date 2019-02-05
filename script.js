

function addAllPhotos() {
	for (var i=0; i < photos_db.length ; i++) 
	{
		var newPhoto = document.createElement('div');
		newPhoto.className = 'photo';
		var photoContainer = document.getElementById("allphotos");
		photoContainer.appendChild(newPhoto);
		var g = i+1;
		newPhoto.style.backgroundImage = "url(photos/"+g.toString()+".jpg)"; 
	}
}

function addAllTowns() {
	  var newTown = document.createElement('option');
		newTown.text = "-Выберите город-";
		var townContainer = document.getElementById("towns");
		townContainer.appendChild(newTown);
	for (var i=0; i < photos_db.length ; i++) 
	{
		var newTown = document.createElement('option');
		newTown.text = photos_db[i].city;
		var townContainer = document.getElementById("towns");
		townContainer.appendChild(newTown);
	}
	  var allOptions = document.querySelectorAll("option");
	for (var i = 0; i < allOptions.length; i++){
		if (allOptions[i].text == allOptions[i+1].text) 
		{
			allOptions[i].parentNode.removeChild(allOptions[i]);
		}
	}	
}

function changeName() {
	$("div.photo").remove();
	for (var i=0; i < photos_db.length ; i++) 
	{
		var newPhoto = document.createElement('div');
		newPhoto.className = 'photo';
		var photoContainer = document.getElementById("allphotos");
		photoContainer.appendChild(newPhoto);
		var g = i+1;
		newPhoto.style.backgroundImage = "url(photos/"+g.toString()+".jpg)"; 
	}
  var photosAll = document.querySelectorAll(".photo");
  var forName = document.getElementById("content");

	for (var i=0; i < photos_db.length ; i++)
	{
		for (var j=0; j<forName.value.length; j++) 
		{
			if (forName.value.charAt(j)!= photos_db[i].name.charAt(j))
			{
				$(photosAll[i]).remove(); 
				break;
			}	
		}
		if ($("#towns option:selected").text() != photos_db[i].city) 
		  {
			 if ($("#towns option:selected").text() != "-Выберите город-")
				{
          $(photosAll[i]).remove(); 
        }
			}
	}
	proverka();
}

function changeTown() {
$("div.photo").remove();
for (var i=0; i < photos_db.length ; i++) 
	{
		var newPhoto = document.createElement('div');
		newPhoto.className = 'photo';
		var photoContainer = document.getElementById("allphotos");
		photoContainer.appendChild(newPhoto);
		var g = i+1;
		newPhoto.style.backgroundImage = "url(photos/"+g.toString()+".jpg)"; 
	}
	var photosAll = document.querySelectorAll(".photo");
  var forName = document.getElementById("content");

	for (var i=0; i < photos_db.length ; i++)
	{
		for (var j=0; j<forName.value.length; j++) 
		{
			if (forName.value.charAt(j)!= photos_db[i].name.charAt(j))
			{				
				$(photosAll[i]).remove(); 		
			}
			if (forName.value == "")
			{
				$(photosAll[i]).remove(); 
			}
		}
		  if (($("#towns option:selected").text() != photos_db[i].city)&&($("#towns option:selected").text() != "-Выберите город-"))
		  {
        $(photosAll[i]).remove();       
			}
	}
	proverka();
}


$(document).on("click",(".photo"),function(e)
{

var indexThis = ( $(".photo").index(e.target) ) + 1;

var findPopUp = document.querySelector(".popUpPhoto");
findPopUp.style.display = "flex";
 var popupImage = document.querySelector(".popUpPhoto__image");
 popupImage.style.backgroundImage = e.target.style.backgroundImage;
 });


$(document).on("click",(".popUpPhoto"),function(e)
{
var findPopUp = document.querySelector(".popUpPhoto");
 findPopUp.style.display = "none";

 });

function proverka() {
	
 var photosAll = document.querySelectorAll(".photo");
 var i = photosAll.length;
 var result = document.querySelector(".elemsorting__result");
 var corectPadding = document.querySelector(".mainblock__elemsorting");

	if (i==0) {
	result.style.display = "block";
  corectPadding.style.paddingBottom = "10px";
	}
	else {
  result.style.display = "none";
  corectPadding.style.paddingBottom = "40px";
	}
}





