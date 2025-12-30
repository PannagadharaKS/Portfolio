import AboutSection from "@/components/about/AboutSection";
import HeaderSection from "@/components/header/HeaderSection";
import HobbiesSection from "@/components/hobbies/HobbiesSection";
import HomeSection from "@/components/home/HomeSection";
import SkillsSection from "@/components/skills/SkillsSection";

export default function Home() {
	return (
		<div className="items-center justify-items-center min-h-screen sm:p-2">
			{/* HEADER */}
			<HeaderSection/>

			{/* HOME */}
			<HomeSection/>

			{/* SKILLS */}
			<SkillsSection/>

			{/* HOBBIES */}
			<HobbiesSection/>
			
			{/* ABOUT */}
			<AboutSection/>

			{/* CONTACT */}

			{/* FOOTER */}

		</div>
	);
}
