// modal
document.addEventListener('DOMContentLoaded', function() { // wait for the the whole page to load
    const form = document.querySelector('form'); // select the first form element
    const modalElement = document.getElementById('submitModal');
    const modal = new bootstrap.Modal(modalElement); // create a new modal instance

    // find a place where we will put the cards
    const cardContainer = document.getElementById('profileContainer');

    let formData = {}; // object to hold form data, we use let because this will change over time

    // after submisiion
    form.addEventListener('submit', function(event) { // when the form is submitted
        event.preventDefault(); // prevent the default form submission

        // change the data based on what is inputtted
        formData = {
            name: document.getElementById("productName").value,
            description: document.getElementById("productDescription").value,
            imageUrl: document.getElementById("productImage").value,
        };
    

    // show modal
    modal.show(); // show the modal

    }); 

    // Once user closes modal, we want to add the card under profileContainer
    modalElement.addEventListener('hidden.bs.modal',function(){
        // create a new card element
        const card = document.createElement('div');
        card.className = 'card'; // add card class to div
        card.innerHTML = `
            <img src="${formData.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${formData.name}</h5>
                <p class="card-text">${formData.description}</p>
                <a href="#" class="btn btn-primary">Delete</a>
            </div>
        `;

        // add card to card container
        profileContainer.appendChild(card); // append the card to the card container

        //reset form
        form.reset(); 
    });

});