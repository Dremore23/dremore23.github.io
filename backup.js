(function(){
  if( document.cookie.indexOf('device_pixel_ratio') == -1
      && 'devicePixelRatio' in window
      && window.devicePixelRatio == 2 ){
        
    document.cookie = 'device_pixel_ratio=' + window.devicePixelRatio + ';';
    window.location.reload();
  }
})();

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
  var allPhotos = document.querySelectorAll(".photo");
  var nameInput = document.getElementById("content");

	for (var i=0; i < photos_db.length ; i++)
	{
		for (var j=0; j < nameInput.value.length; j++) 
		{
			if (nameInput.value.charAt(j) != photos_db[i].name.charAt(j))
			{
				$(allPhotos[i]).remove(); 
				break;
			}		
		}
		   if ($("#towns option:selected").text() != photos_db[i].city)
		    {
				 if ($("#towns option:selected").text() == "-Выберите город-")
				  { 
				  $(allPhotos[i]).remove(); 
          }
			  }
	}
}



function changer() {

$("div.photo").remove();
for (var i=0; i < photos_db.length ; i++) 
	{
		var element = document.createElement('div');
		element.className = 'photo';
		var finder = document.getElementById("allphotos");
		finder.appendChild(element);
		var g = i+1;
		element.style.backgroundImage = "url(photos/"+g.toString()+".jpg)"; 
	}
	var dop = document.querySelectorAll(".photo");
  var elem = document.getElementById("content");

	for (var i=0; i < photos_db.length ; i++)
	{
		for (var j=0; j<elem.value.length; j++) 
		{
			if (elem.value.charAt(j)!= photos_db[i].name.charAt(j))
			{
					
				$(dop[i]).remove(); 
				
			}
			if (elem.value == "")
			{
				$(dop[i]).remove(); 
			}
		}
		if ($("#towns option:selected").text() != photos_db[i].city) {
				if ($("#towns option:selected").text() == "-Выберите город-")
				{ 
				}
				else 
				{
        $(dop[i]).remove(); 
        }
			}
	}


 

}





