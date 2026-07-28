"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar"

export default function YouAndTheChurch() {
    const [files, setFiles] = useState({});

    const handleFileChange = (e, field) => {
        setFiles({
            ...files,
            [field]: e.target.files[0],
        });
    };

    const requirements = [
        {
            id: "churchEvents",
            title: "Church Events Participation",
            description: "Upload evidence of AYM events"
        },
        {
            id: "churchHeritage",
            title: "Church Heritage",
            description: "Upload your Church Heritage Award, local church history project, or book reflection."
        },
        {
            id: "retreat",
            title: "Retreat/Spiritual Emphasis",
            description: "Upload reports, photos, certificates, or reflections from retreats or spiritual emphasis programs."
        },
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-[#003366] to-[#001933] text-white p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-2">
                        Section 5: You and the Church
                    </h1>
                    <p className="text-center text-gray-300 mb-10">
                        Demonstrating Active Leadership and Service in the Church
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

                            <textarea
                                rows="5"
                                placeholder="Write a brief report or reflection..."
                                className="w-full p-4 mb-4 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300"
                            />
                            <label className="inline-flex items-center px-5 py-3 bg-syan-400 text-black font-semibold rounded-lg cursor-pointer hover:bg-cyan-300 transition">
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
                            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30"
                        />

                        <textarea
                            rows="4"
                            placeholder="Mentor comments..."
                            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30"
                        />

                        <input
                            type="date"
                            className="w-full mb-6 p-3 rounded-lg bg-white/20 border border-white/20"
                        />

                        <button className="w-full bg-cyan-400 text-black font-bold py-3 rounded-lg hover:bg-cyan-300 transition">
                            Save Section 5
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}