import React from "react";

const Resume = ({}) => {
    const resumeAddress = "https://nimapm.com/nima-pourmohamadi-front-end-Resume.pdf";

    return (
        <div className="opacity-0 c-resume w-full h-screen absolute top-0 left-0 z-10 flex items-center flex-wrap has-fade-in">
            <div className="c-resume__container ml-16">
                <h1 className="c-resume__title text-white">Download My Resume</h1>
                <p className="c-resume__desc h4 text-white">Here You can download my Resume. Just Click On Download.</p>

                <div className="mt-10">
                    <a className="o-btn" target="_blank" href={resumeAddress} download="Nima-Pour-Mohammadi-Resume">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
