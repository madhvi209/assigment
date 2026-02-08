import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
    const cardData = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse."
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse."
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse."
        }
    ];

    return (
        <section className="feature-showcase-section">
            <div className="feature-showcase-container">
                <h2 className="feature-showcase-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <div className="feature-showcase-grid">
                    {cardData.map((card) => (
                        <div key={card.id} className="feature-showcase-card">
                            <h4 className="feature-showcase-card-title">{card.title}</h4>
                            <p className="feature-showcase-card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;