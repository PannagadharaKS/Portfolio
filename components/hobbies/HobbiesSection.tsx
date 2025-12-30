"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const HobbiesSection = () => {

	const hobbiesAndInterestsLists: any = [
		"ANIME",
		"GAMES",
		"SERIES"
	];
	const hobbiesAndInterestsDetails: any = {
		"ANIME": {
			"WATCHED": [{
				title_en: "Frieren: Beyond Journey's End",
				synopsis: "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.\n\r\nHowever, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her \"usual\" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.\n\r\nAs the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.\n\r\n[Written by MAL Rewrite]",
				picture_url: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
			}],			
			"DROPPED": [{
				title_en: "NORAGAMI",
				picture_url: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
			}],
			"CURRENTLY WATCHING": [{
				title_en: "NORAGAMI",
				picture_url: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
			}],
			"FAVOURITE": [{
				title_en: "NORAGAMI",
				picture_url: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
			}],
			"YET TO WATCH": [{
				title_en: "NORAGAMI",
				picture_url: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
			}]
		}
	}
	const [currentSelectedHobby, setCurrentSelectedHobby] = useState<any>(null);
	const [currentFilter, setCurrentFilter] = useState<string>("ALL");
	const [currentFilterDetails, setCurrentFilterDetails] = useState<any>(null);

	useEffect(() => {
		console.log(currentFilterDetails)
		if(!!currentSelectedHobby && currentFilter in currentSelectedHobby) {
			setCurrentFilterDetails(currentSelectedHobby[currentFilter]);
		}
	}, [currentSelectedHobby, currentFilter, currentFilterDetails]);

	const handleCurrentSelectedHobby = (item: any) => {
		try {
			setCurrentSelectedHobby(hobbiesAndInterestsDetails[item]);
			return true;
		} catch (e) {
			console.log(e);
			return;
		}
	}

	return (
		<div className="flex flex-col items-center justify-start my-9 py-12 min-h-screen w-full" >
			<h1 className="text-3xl" >HOBBIES / INTERESTS</h1>

			{!currentSelectedHobby && (
				<div className="flex space-x-9 my-9" >
					{hobbiesAndInterestsLists.map((item: string) => (
						<div key={item} className="cursor-pointer group relative w-80 h-40 overflow-hidden bg-slate-800 text-white" onClick={() => handleCurrentSelectedHobby(item)} >
							<div className="relative z-10 h-full flex items-center justify-center">{item}</div>
							<span className="border-r-8 border-r-blue-400 absolute inset-y-0 left-[-20%] w-[140%] bg-indigo-600 -skew-x-35 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out transform-gpu" />
						</div>
					))}
				</div>)
			}

			{!!currentSelectedHobby &&
				<div className="w-full flex flex-col items-center my-3" >
					<select className="bg-[#3f3f3f] p-2 w-96 outline-none" onChange={(e) => setCurrentFilter(e.target.value)} >
						<option defaultValue="ALL" >ALL</option>
						{Object.keys(currentSelectedHobby)?.map((filter: string) => (
							<option key={filter} className="p-2" value={filter} >{filter}</option>
						))}
					</select>

					{Object.entries(currentSelectedHobby as Record<string, any[]>).map(([key, value]) => (
						<div key={key} className="flex " >
							{(currentFilter == "ALL" || key == currentFilter) && (
								<div className="w-full my-3 space-y-3" >
									<div className="flex items-center space-x-3" >
										<hr className="flex-1 h-0.5 text-[#3f3f3f]" />
										<p className="text-center" >{key}</p>
										<hr className="flex-1 h-0.5 text-[#3f3f3f]" />
									</div>

									{value?.map((currentItem: any) => (
										<div key={currentItem} className="flex flex-wrap" >
											<div className="m-3 flex flex-col items-center justify-center space-x-3" >
												<Image className="!m-0" src={currentItem.picture_url} alt="https://cdn.myanimelist.net/images/anime/1015/138006.jpg" width={180} height={90} />
												<p className="text-center text-sm pt-4" >{currentItem?.title_en}</p>
											</div>
										</div>
									))}
								</div>
							)}
						</div>

					))}

				</div>
			}

			<div className="my-9" >
				<button className="cursor-pointer p-3 bg-black text-blue-500" onClick={() => setCurrentSelectedHobby(null)} >HOBBIES & INTERESTS LIST</button>
			</div>

		</div>
	)
}

export default HobbiesSection;