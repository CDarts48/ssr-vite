import React from 'react';
import './css/Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            title: 'Efficient/Professional',
            content: '"Christopher was efficient, and extremely professional. It was as if he solved the issue before arriving and came with the piece to fix the problem with a receipt for me from Home Depot and all! Really appreciate when he had to come in and out of the house with the snow he took his shoes off and banged the snow off when setting them inside. 10/10 will hire again. We truly appreciate you being here so quickly within an hour of booking your services and solving all of our electrical issues! Thank you :)"',
            author: 'Cassandra K. - 11/15/2022'
        },
        {
            title: 'Expert Support',
            content: '"Chris was great. He knew exactly how to handle installing my lights and they look great. I’d definitely hire him again!"',
            author: 'Ryan C. - 4/13/2023'
        },
        {
            title: 'Excellent Service',
            content: '“Christopher communicated clearly, worked diligently, and was very efficient. He did the work I needed replacing a light fixture and then helped with several other small tasks. He had to go to several places to find all the right parts, but remained calm and focused. I really appreciated his kindness and flexibility. I highly recommend him!"',
            author: 'Elizabeth E. - 5/10/2023'
        }
    ];

    return (
        <section className="reviews"> 
            <h1>Satisfied Clients</h1>
            {reviews.map((review, index) => (
                <div key={index}>
                    <h2>{review.title}</h2>
                    <div className="stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p>{review.content}</p>
                    <p>{review.author}</p>
                    <button>Read full review</button>

                </div>
            ))}
        </section>
    );
}

export default Reviews;