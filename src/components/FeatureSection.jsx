import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
    const cardData = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit .",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse."
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit .",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse."
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit .",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse."
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <div className="grid-3">
                    {cardData.map((card) => (
                        <div key={card.id} className="card">
                            <h4 className="card-title">{card.title}</h4>
                            <p style={{ textAlign: 'left' }}>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;