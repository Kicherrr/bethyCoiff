function afficherBoutons(num) {
			if (num == 1) {
				document.getElementById("groupe1").style.display = "block";
				document.getElementById("groupe2").style.display = "none";
			} else {
				document.getElementById("groupe1").style.display = "none";
				document.getElementById("groupe2").style.display = "block";
			}
		}

function plusdedl(num) {
			if (num == 1) {
				document.getElementById("image1").style.display = "block";
			} 
			if (num == 2) {
				document.getElementById("image2").style.display = "block";
			}
			if (num == 3) {
				document.getElementById("image3").style.display = "block";
			}
			if (num == 4) {
				document.getElementById("image4").style.display = "block";
			}
		}
