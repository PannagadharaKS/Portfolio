"use client"

import LogoSection from "./LogoSection"

const HeaderSection = () => {
    return (
        <div className="flex items-center justify-between h-11 w-full bg-green-600" >
            {/* LEFT */}
            <div className="flex items-center justify-start space-x-18 px-6 w-full" >
                {/* SKILLS */}
                <p>SKILLS</p>
                {/* PROJECTS */}
                <p>PROJECTS</p>
            </div>

            {/* MIDDLE */}
            <div className="flex items-center justify-center space-x-3 px-6 w-full" >
                {/* SEARCH */}
                {/* <div className="w-full px-2" >
                    <input className="outline-none border-none" type="text" value="" placeholder="Search" />
                </div> */}

                {/* LOGO / TITLE */}
                <LogoSection />
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-end space-x-3 px-6 w-full" >
                {/* ABOUT */}
                <p>ABOUT</p>
                {/* CONTACT ME */}
                <p>CONTACT ME</p>
            </div>
        </div>
    )
}

export default HeaderSection;