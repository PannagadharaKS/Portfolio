/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const skills: any = [
    "React",
    "Next",
    "Node",
    "Javascript",
    "Typescript",
    "Three"
]

const SkillsSection = () => {

    return (
        <div className="flex flex-col items-center justify-between my-9 py-12 h-screen w-full" >
            <h1 className="text-3xl" >SKILLS</h1>
        </div>
    )
}

export default SkillsSection;