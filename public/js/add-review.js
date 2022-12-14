async function newReviewHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const text = document.querySelector('#text').value;

    const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
            title,
            text
        }),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard/')
    } else {
        alert(response.statusText)
    }
};

document.querySelector('#new-review').addEventListener('submit', newReviewHandler);