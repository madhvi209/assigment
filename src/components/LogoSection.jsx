import React from 'react';
import './LogoSection.css';
import Logo1 from '/src/assets/formsOnFire.png';
import Logo2 from '/src/assets/electroNeek.png';
import Logo3 from '/src/assets/jotForm.png';

export default function LogoSection() {
    const logos = [
        { img: Logo1, name: "Forms On Fire" },
        { img: Logo2, name: "ElectroNeek Studio IDE" },
        { img: Logo3, name: "Jot form" },
    ];

    // Custom style object for bigger logos
    const largeLogoStyle = {
        maxWidth: '280px',
        maxHeight: '120px',
        width: '100%',
        height: 'auto',
        objectFit: 'contain'
    };

    return (
        <section className="logo-showcase">
            <div className="container">
                <h2 className="section-heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>

                <div className="logo-grid">
                    {logos.map((logo, index) => (
                        <div className="logo-item" key={index}>
                            <div className="img-wrapper" style={{ height: '140px' }}>
                                <img src={logo.img} alt={logo.name} style={largeLogoStyle} />
                            </div>
                            <p className="logo-label">{logo.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}