"use client";

import { useState } from "react";
import Navbar from "@/components/navbar/page";

export default function Prerequisites() {
    const [files, setFiles] = useState({});
    const handleFileChange = (e, field) => {
        setFiles({
            ...files,
            [field]: e.target.files[0],
        });
    };

    const requirements = [
        {
            id: "baptism",
            title: "Baptism Certificate",
            description: "Upload your certificate or proof of baptism.",
        },
        {
            id: "recommendation",
            title: "Church Board Recommendation",
            description: "Upload a recommendation letter from your church board.",
        },
        {
            id: "ministry",
            title: "Ministry Involvement",
            description: "Upload proof of active involment in Senior Youth Ministry.",
        },
        {
            id: "seminar",
            title: "10-Hour Seminar Certificate",
            description: "Upload your certificate of completion for the 10-hour seminar.",
        },
    ];

    return (
        <>
            <Navbar />

            <div classname="min-h-screen bg-gradient-to-b from-[#003366] to-[#001933] text-white p-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold mb-2 text-center">
                        Section 1: Prerequisites
                    </h1>
                    <p className="text-center text-gray-300 mb-10">
                        Upload all required documents for your SYL Portfolio.
                    </p>

                    <div className="grid gap-6">
                        {requirements.map((req) => (
                            <div
                                key={req.id}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                                >
                                    <h2 className="text-2xl font-semibold mb-2">{req.title}</h2>
                                    <p className="text-gray-300 mb-4">{req.description}</p>
                                    <label className="inline-flex items-center px-5 py-3 bg-cyan-400 text-black font-semibold rounded-lg cursor-pointer hover:bg-cyan-300 transition">
                                        Upload Document
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => handleFileChange(e, req.id)}
                                            />
                                    </label>

                                    {files[req.id] && (
                                        <p className="mt-3 text-sm text-green-300">
                                           ✔ Selected: {files[req.id].name} 
                                        </p>
                                    )}
                                    
                                </div>
                        ))}
                    </div>

                    <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">Mentor Verification</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Mentor Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter mentor name"
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-cyan-400"
                                    />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                            </div>
                        </div>

                        <button className="mt-6 w-full bg-cyan-400 text-black font-bold py-3 rounded-lg hover:bg-cyan-300 transition">
                            Save Section 1
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
