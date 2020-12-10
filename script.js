function _load(){
  console.log("running");
  
  // task todo: csinalj egy sorban egy checkbox elemet, majd egy szoveges mezot, illetve a sor vegere egy delete gombot. 10 elembol alljon, de a vegen legyen egy gomb amivel bovitheto

  //0. lepes= root div eltarolasa valtozoban valtozo letrehozasa a div root-nak
  let main_div = document.getElementById("root"); 

  //1. lepes= valtozo letrehozasa backtikkekkel(``) input+checkbox+delete button-delete classsal 

  let row = ` 
  <div class="row">
    <input type="checkbox"></input>
    <input type="text"></input>
    <button class="delete">delete</button>
  </div>`;

  //2. lepes= valtozoban elmentjuk a 10es szamot
  let itemNumber = 10;

  //3. lepes= for ciklussal elszamolunk 10ig
  for (let i = 0; i < itemNumber; i++){
    //4. lepes= insertadjecent htmllel beillesszuk (beforeenddel) 
    main_div.insertAdjacentHTML("beforeend", row);
  }

  //5. lepes= insertadjecent htmllel (afterend) hozzaadunk egy add gombot(id) a root diven kivul
  main_div.insertAdjacentHTML("afterend", `
    <button id="addButton">Add new row</button>
  `);

  //6. lepes= document.getelemntbyid. alapjan meghivni az add-ra a click esemenyt (a fenti sor elemekkel meghatarozott valtozot letrehozza a click esemenyre)
  function addNewItem() {
    main_div.insertAdjacentHTML("beforeend", row);
    //TODO: valahogy itt kéne rátenni az új elemre is a törlés függvényt.

  }
  document.getElementById("addButton");
  addEventListener("click", addNewItem);

  //7. lepes= query selectorba mentsuk el osszes torles gombot, majd for ciklussal menjunk vegig a tombon (elemek szama) mindegyikre tegyunk ra egy clikk esemenyt amihez keszitunk egy fuggvenyt
  let deleteButtons = main_div.querySelectorAll(".delete");
  //console.log(deleteButtons)

  function deleteRow(e) {
    //console.log("delete Button was clicked");
    //console.log(e.target.parentElement);
    e.target.parentElement.remove();

  }
  
  for (let i = 0; i < deleteButtons.length; i++) {
     deleteButtons[i].addEventListener("click", deleteRow); //()azert nem mert felulirnank valamit
  }

  //8. lepes= az elkeszitett fuggvenyben torolje azt a sort, amelyikben kattintottunk a delete sorba

}

window.addEventListener("load", _load);