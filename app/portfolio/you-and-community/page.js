"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";


export default function YouAndTheCommunity() {
    const [files, setFiles] = useState({});

    const handleFileChange = (e, field) => {
        setFiles({
            ...files,
            [field]: e.target.files[0],
        });
    };

    const requirements = [
        {
            id: "communityNeeds",
            title: "Community Needs Assessment",
            description: "Upload your community needs assessment report and findings.",
        },
        {
            id: "communityProject",
            title: "Community Development Project",
            description: "Upload evidence of planning and participating in a community service project.",
        },
        {
            id: "betterLiving",
            title: "Better Living / Youth Alive Program",
            description: "Upload reports, photos, or certificates from Better Living or Youth Alive activities.",
        },
        {
            id: "globalYouthDay",
            title: "Global Youth Day / Community Impact",
            description: "Upload evidence of participation in Global Youth Day or another community outreach event.",
        },
        {
            id: "evangelism",
            title: "Evangelism Campaign",
            description: "Upload reports, sermons, photos, or certificates from an evangelistic campaign.",
        },
        {
            id: "personalEvangelism",
            title: "Personal Evangelism",
            description: "Upload evidence of personal witnessing or outreach ministry.",
        },
        {
            id: "bibleStudies",
            title: "15 Bible Study Doctrines",
            description: "Upload evidence of completing and teaching the required Bible study series.",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-[#003366] to-[#001933] text-white p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-2">
                        Section 6: You and The Community
                    </h1>
                    <p className="text-center text-gray-300 mb-10">
                        Community Service, Outreach, Evangelism and Mission
                    </p>

                    {requirements.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-6"
                        >
                            <h2 className="text-2xl font-semibold mb-2">
                                {item.title}
                            </h2>
                            <p className="text-gray-300 mb-4">
                                {item.description}
                            </p>

                            < textarea
                                rows="5"
                                placeholder="Write your report, testimony, or reflection..."
                                className="w-full p-4 mb-4 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300"
                            />

                            <label className="inline-flex items-center px-5 py-3 bg-cyan-400 text-black font-semibold rounded-lg cursor-pointer hover:bg-cyan-300 transition">
                                Upload Evidence
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e, item.id)}
                                />
                            </label>

                            {files[item.id] && (
                                <p className="mt-3 text-green-300">
                                    {files[item.id].name}
                                </p>
                            )}
                        </div>

                    ))}

                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mt-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Mentor Verification
                        </h2>

                        <input
                            type="text"
                            placeholder="Mentor Name"
                            ClassName="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30"
                        />
                        <textarea
                            rows="4"
                            placeholder="Mentor comments..."
                            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30"
                        />
                        <input
                            type="date"
                            className="w-full mb-6 p-3 rounded-lg bg-white/20 border border-white/30"
                        />

                        <button className="w-full bg-cyan-400 text-black font-bold py-3 rounded-lg hover:bg-cyan-300 transition">
                            Save Section 6
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}