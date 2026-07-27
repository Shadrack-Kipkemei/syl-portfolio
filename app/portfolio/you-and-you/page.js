"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function YouAndYou() {
    const [files, setFiles] = useState({});
    const handleFileChange = (e, field) => {
        setFiles({
            ...files,
            [field]: e.target.files[0],
        });
    };

    const uploadSections = [
        {
            id: "bookReflection",
            title: "Education/Messages to Young People Reflection",
            description: "Upload your 250-word reflection paper or recording evidence.",
        },
        {
            id: "leadershipEvidence",
            title: "Leadership Skills Evidence",
            description: "Upload evidence of worship sessions, leadership roles, Ambassador module leadership, or staff involvement.",
        },
        {
            id: "fitnessPlan",
            title: "Physical Fitness Plan",
            description: "Upload AY Silver/Gold Award evidence or your approved fitness program.",
        },
        {
            id: "personalityTest",
            title: "16 Personality test Results",
            description: "Upload your personality assessment results and mentor discussion notes.",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-[#003366] to-[#001933] text-white p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-2">
                        Section 3: You and You
                    </h1>
                    <p className="text-center text-gray-300 mb-10">
                        Personal Growth, Leadership Development, and Self-Discovery
                    </p>

                    {/* {Vision & Mission} */}
                    <div className="bg-white/10 rounded-2xl p-6 mb-6 border border-white/20">
                        <h2 className="text-2xl font-semibold mb-4">
                            Personal Vision and Mission
                        </h2>
                        <div className="grid gap-4">
                            <textarea
                                rows="4"
                                placeholder="Write your personal vision statement..."
                                className="w-full p-4 rounded-lg bg-white/20 border border-white/30"
                            />
                            <textarea
                                rows="4"
                                placeholder="Write your personal mission statement..."
                                className="w-full p-4 rounded-lg bg-white/20 border border-white/30"
                            />
                        </div>
                    </div>

                    {/* {Roles & Goals} */}
                    <div className="bg-white/10 rounded-2xl p-6 mb-6 border border-white/20">
                        <h2 className="text-2xl font-semibold ,mb-4">
                            Roles and Goals
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((role) => (
                                <div key={role}>
                                    <input
                                        type="text"
                                        placeholder={`role ${role}`}
                                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 mb-2"
                                    />
                                    <textarea
                                        rows="4"
                                        placeholder={`Goals for Role ${role}`}
                                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30"
                                    />
                                </div>
                            ))}
                        </div>
                </div>

                {/* {Upload Sections} */}
                <div className="grid gap-6">
                    {uploadSections.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/10 rounded-2xl p-6 border border-white/20"
                        >
                            <h2 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h2>
                            <p className="text-gray-300 mb-4">
                                {item.description}
                            </p>
                            
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
                                    Uploaded: {files[item.id].name}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* {Mentor Notes} */}
                <div className="mt-8 bg-white/10 rounded-2xl p-6 border border-white/20">
                    <h2 className="text-2xl font-semibold mb-4">
                        Mentor Notes
                    </h2>

                    <textarea
                        rows="6"
                        placeholder="Record insights from discussions with your mentor..."
                        className="w-full rounded-lg bg-white/20 border border-white/30"
                    />
                </div>

                <button className="w-full mt-8 bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-cyan-300 transition">
                    Save Section 3
                </button>
            </div>
        </div>

        </>
    );
}