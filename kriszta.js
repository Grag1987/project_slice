function _load (){
	console.log("running");
	


	/*create a to do list: minden sorban egy checkbox, mellete legyen szöveges mező, amin beírhatjuk a feladatot, és legyen egy törlés gomb 10 db lemeből áljon a lista de bővíthető legyen egy + gombbal.
	0. változóba eltároljuk a root elemet. */

	let rootE = document.getElementById("root");

	/* 1. backtick altgGr+7 az űrlap létrehozása */

		let item = `
				<div class="inputbox">
					<input type="checkbox">
					<input type="text">
					<button class="delete">delete</button>
				</div>
		`;

	 /*2. 10 db delete class névvel */
			let itemNumber = 10;

	 /* 3. 10-es számot elmenteni, 0-10 ig for ciklussal, a root elemen belülre létrehozunk másolatot az elemet. (beforeend) insertAdjacentHTML-el */
	
	for (let i = 0; i < itemNumber; i++) {
				// creates divs:
				rootE.insertAdjacentHTML("beforeend", item);
				
		
	}
	/* 4. button nem lehet a listán belül, hozzáadjuk a root elemen kívül add insertAdjacentHTML-el, kívülre, afterend-del. */
	
		rootE.insertAdjacentHTML("afterend", `
			<button id="addItem">add new item</button>
		`)

	 /*5. click esemény új hozzáadása erre az add-ra, lehet id-ja, majd ha rátesszük az eseményt getElementbyId, click esemény függvény, amiben azt a fent említett váltzót mégeygszer hozzáadja hogy létrejöjjön a következő lista elem. */
		function addNewItem() {
			rootE.insertAdjacentHTML("beforeend", item);
			//TODO: valahogy itt kéne rátenni az új elemre is a törlés függvényt.
			
		}
	 	document.getElementById("addItem"). addEventListener("click", addNewItem);
	/*6. jelöljük ki az összes törlés gombot. mentsük el querySelectorral az összeset. for ciklussal menjünk végig a tömbön, html-elemekeen, hány db van belőle azt vesszük alapul a for ciklusnál, és mindegyikre rakjunk rá egy click eseményt, amihez készítünk egy függvényt.*/

		let deleteButtons = rootE.querySelectorAll(".delete");
	    //	console.log(deleteButtons);

		function deleteItem(e) {
		 //	console.log("delete Button was clicked");
			//console.log(e.target.parentElement);
			e.target.parentElement.remove();
		

		}
		for (let index = 0; index < deleteButtons.length; index++) {
			deleteButtons[index].addEventListener("click", deleteItem); //()? miért nem? felülírnánk vmit
			
		}

	/*7. az eklkészített függvényben a törlés gomb befoglaló sorát kitöröljük. */
	

	
}
window.addEventListener("load", _load);