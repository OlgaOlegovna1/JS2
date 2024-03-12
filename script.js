function addReview() {
    const productName = document.getElementById('product-name').value;
    const reviewText = document.getElementById('review-text').value;

    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[productName]) {
        reviews[productName] = [];
    }
    reviews[productName].push(reviewText);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    document.getElementById('product-name').value = '';
    document.getElementById('review-text').value = '';
    displayProductList();
}

function displayProductList() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    for (let product in reviews) {
        const listItem = document.createElement('li');
        listItem.textContent = product;
        listItem.onclick = function() {
            displayReviews(product);
        };
        productList.appendChild(listItem);
    }
}

function displayReviews(product) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';
    if (reviews[product]) {
        reviews[product].forEach((review, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.textContent = review;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.onclick = function() {
                reviews[product].splice(index, 1);
                localStorage.setItem('r`eviвrБ', JSON.stringify(reviews));
                displayReviews(product);
            };
            reviewItem.appendChild(deleteButton);
            reviewsContainer.appendChild(reviewItem);
        });
    }
}

displayProductList();