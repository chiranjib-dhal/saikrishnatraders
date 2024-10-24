let currentTestimonialIndex = 0;

const testimonials = [
  {
    text: 'I recently renovated my home and purchased all the plywood and aluminum materials from Sai Krishna Traders. The quality of their products is outstanding, and the prices are reasonable. The staff was helpful in guiding me to choose the right materials for my needs. I’m very happy with the results!',
    author: 'Chiranjib Dhal',
    rating: 5
  },
  {
    text: 'Great customer service and high-quality products. The team was very knowledgeable and assisted me throughout the buying process. Would definitely recommend!',
    author: 'John Doe',
    rating: 4
  },
  {
    text: 'Me throughout the buying process. Would definitely recommend! Great customer service and high-quality products. The team was very knowledgeable and assisted.',
    author: 'Rajendra Prasad',
    rating: 5
  },
  {
    text: 'I recently renovated my home and purchased all the plywood and aluminum materials from Sai Krishna Traders.. Would definitely recommend!',
    author: 'Soumaya Ranjan',
    rating: 4
  }
];

function showTestimonial(index) {
  const testimonial = testimonials[index];
  document.getElementById('testimonial-text').innerText = testimonial.text;
  document.getElementById('testimonial-author').innerText = `Author: ${testimonial.author}`;
  document.getElementById('testimonial-rating').innerText = `Rating: ${testimonial.rating} stars`;
}

function startCarousel() {
  setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
  }, 5000); // Change every 5 seconds
}

document.addEventListener('DOMContentLoaded', () => {
  showTestimonial(currentTestimonialIndex);
  startCarousel();
});

// Fetch the heading.html content
fetch('heading.html')
  .then(response => response.text())
  .then(data => {
    // Parse the fetched HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    // Get the new heading content
    const newHeading = doc.querySelector('#new-heading').innerHTML;

    // Replace the old heading in body.html
    document.querySelector('#page-heading').innerHTML = newHeading;
  })
  .catch(error => console.error('Error loading the heading:', error));

  
