function functionModal() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function functionCreateElement() {
    // Get button that create the elements
    var createBtn = document.getElementById("createBtn");

    createBtn.onclick = function() {
        var selectedOption = document.getElementById("elementsSelect");
        if(selectedOption.value == 'div'){
            var myDiv = document.createElement("div");
            myDiv.innerHTML = "<h1>Hello World!</h1>";
            document.body.appendChild(myDiv);
        }
        if(selectedOption.value == 'p'){
            var myParag = document.createElement("p");
            myParag.innerHTML = "<h1>Hello World!</h1>";
            document.body.appendChild(myParag);
        }
        if(selectedOption.value == 'nav'){
            var myNav = document.createElement("nav");
            myNav.innerHTML = "<h1>Hello World!</h1>";
            document.body.appendChild(myNav);
        }
        if(selectedOption.value == 'section'){
            var mySection = document.createElement("section");
            mySection.innerHTML = "<h1>Hello World!</h1>";
            document.body.appendChild(mySection);
        }
        if(selectedOption.value == 'footer'){
            var myFooter = document.createElement("footer");
            myFooter.innerHTML = "<h1>Hello World!</h1>";
            document.body.appendChild(myFooter);
        }
        console.log(selectedOption.value);
    }
}

window.onload = function() {
    functionModal();
    functionCreateElement();
};