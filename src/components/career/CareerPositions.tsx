
import { Link } from 'react-router-dom';

const jobOpenings = [
    {
        id: 1,
        title: "Senior Product Designer",
        department: "Design",
        location: "Remote",
        type: "Full Time",
        icon: "assets/images/svg/design.svg" // Placeholder icon path
    },
    {
        id: 2,
        title: "Frontend Developer",
        department: "Engineering",
        location: "New York, USA",
        type: "Full Time",
        icon: "assets/images/svg/code.svg"
    },
    {
        id: 3,
        title: "Marketing Manager",
        department: "Marketing",
        location: "London, UK",
        type: "Part Time",
        icon: "assets/images/svg/marketing.svg"
    }
];

export default function CareerPositions() {
    return (
        <section className="wioncareer-positions-section wionsp-bottom">
            <div className="container">
                <div className="wionsection-title center mb-50">
                    <div className="wionsub-title" data-aos="fade-up" data-aos-delay="200">
                        <p>Open Positions</p>
                    </div>
                    <h2 data-aos="fade-up" data-aos-delay="300">Come Join Our Team</h2>
                </div>

                <div className="row">
                    {jobOpenings.map((job, i) => (
                        <div key={job.id} className="col-lg-12" data-aos="fade-up" data-aos-delay={200 + (i * 100)}>
                            <div className="wioncareer-item">
                                <div className="wioncareer-info">
                                    <div className="wioncareer-icon-box">
                                        <img src={job.icon} alt="" style={{ width: '30px', filter: 'brightness(0) invert(1)' }} onError={(e) => { e.currentTarget.style.display = 'none' }} />
                                    </div>
                                    <div className="wioncareer-text">
                                        <h4 className="wioncareer-title">{job.title}</h4>
                                        <div className="wioncareer-meta">
                                            <span className="wioncareer-meta-item">
                                                <span className="wioncareer-dot"></span>
                                                {job.department}
                                            </span>
                                            <span className="wioncareer-meta-item">
                                                <span className="wioncareer-dot"></span>
                                                {job.location} ({job.type})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="wioncareer-btn">
                                    <Link to="/contact-us1" className="wiondefault-btn wionheader-btn btn2 wioncareer-apply-btn">
                                        Apply Now
                                        <span className="wionbutton-icon wioncareer-apply-icon">
                                            <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                                            <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
