
export default function CareerBenefits() {
    const benefits = [
        { title: "Flexible Hours", desc: "We value your time and work-life balance." },
        { title: "Remote Work", desc: "Work from anywhere in the world." },
        { title: "Health Insurance", desc: "Comprehensive health coverage for you and your family." },
        { title: "Career Growth", desc: "Opportunities for learning and advancement." },
    ];

    return (
        <section className="wionbenefits-section">
            <div className="container">
                <div className="row">
                    {benefits.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={200 + (i * 100)}>
                            <div className="wionbenefit-box">
                                <div className="icon mb-20">
                                    <div className="icon-circle">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                </div>
                                <h4 className="wionbenefit-title">{item.title}</h4>
                                <p className="wionbenefit-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
