import React, {useRef, useState} from 'react';
import MainNav from "../../component/navbar/MainNav.jsx";
import MainHeader from "../../component/header/MainHeader.jsx";
import MainBody from "../../component/body/MainBody.jsx";
import Skills from "../../component/body/Skills.jsx";


const MainHome = () => {
    const sectionRefs = useRef({
        experience: null,
        skills: null,
        certifications: null,
    });
    const handleScrollToSection = (sectionName) => {
        if (sectionRefs.current[sectionName]) {
            sectionRefs.current[sectionName].scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            {/* Navigation Bar */}
            <MainNav
                onScrollToSection={handleScrollToSection}
                sectionRefs={sectionRefs}
            />
            {/* Header with Profile Image */}
            <MainHeader/>
            {/* Experience Section */}
            <section ref={(el) => (sectionRefs.current.experience = el)}  id="experience">
                <MainBody/>
            </section>

            {/* Skills Section */}
            <section ref={(el) => (sectionRefs.current.certifications = el)} id="certifications">
                <Skills/>
            </section>

            {/* Projects Section */}
            {/*<section id="projects">*/}
            {/*    <h2>프로젝트</h2>*/}
            {/*    <p>프로젝트 1: 웹 앱 개발 (React 기반)</p>*/}
            {/*    <p>프로젝트 2: 기업 웹사이트 리디자인</p>*/}
            {/*</section>*/}

            {/* Contact Section */}
            {/*<section id="contact">*/}
            {/*    <h2>연락처</h2>*/}
            {/*    <form onSubmit={handleSubmit}>*/}
            {/*        <label>*/}
            {/*            이메일:*/}
            {/*            <input*/}
            {/*                type="email"*/}
            {/*                value={email}*/}
            {/*                onChange={(e) => setEmail(e.target.value)}*/}
            {/*                required*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*        <button type="submit">보내기</button>*/}
            {/*    </form>*/}
            {/*</section>*/}
        </>
    );
}

export default MainHome;
