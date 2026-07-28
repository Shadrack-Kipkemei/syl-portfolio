"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";


export default function YouAndYouth() {
    const [files, setFiles] = useState({});

    const handleFileChange = (e, field) => {
        setFiles({
            ...files,
            [field]: e.target.files[0],
        });
    };

    const topics = [
        "Church's Relationship to Government",
        "Music and Worship",
        "Sex and Romance",
        "Care for the Environment",
        "Dating and Marriage",
        "Service and Volunteering",
        "Ethics",
        "Health and Temperance",
        "Social Justice",
        "Religious Freedom",
        "Youth Evangelism",
        "Violence and Peace",
        "Christian Dress",
        "Gosiip and Profanity",
        "AIDS/Cancer",
        "Recreation and Amusement",
        "LGBTQIA2S+",
        "Unemployment and Entrepreneurship",
        "Prejudice and Racism",
        "Morality",
        "Human Rights",
        "Money Consumerism",
        "Mental Health",
        "Back to the Altar"
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-[#003366] to-[#001933] text-white p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-2">
                        Section 4: You and Youth
                    </h1>
                    <p className="text-center text-gray-300 mb-10">
                        Dialogue, mentorship and Development
                    </p>

                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-3">
                            Discussion Topics
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Select ten discussion topics, conduct a small group discussion, and write your reaction paper.
                        </p>

                        <div className="grid md:grid-cols-2 gap-5">
                            {topics.map((topic, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 border border-white/10 rounded-xl p-5"
                                >
                                    <h3 className="font-semibold text-lg mb-3">
                                        {index + 1}. {topic}
                                    </h3>

                                    <textarea
                                        rows="5"
                                        placeholder="Write your reaction paper..."
                                        className="w-full rounded-lg bg-white/20 border border-white/30 p-3 mb-4 placeholder-gray-300"
                                    />
                                    <label className="inline-flex items-center px-4 py-2 bg-cyan-400 text-black rounded-lg cursor-pointer hover:bg-cyan-300 transition">
                                        Upload Recording/Evidence

                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={(e) =>
                                                handleFileChange(e, `topic${index}`)
                                            }
                                        />
                                    </label>

                                    {files[`topic${index}`] && (
                                        <p className="text-green-300 mt-3 text-sm">
                                            {files[`topic${index}`].name}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8">
                            <h2 className="text-2xl font-semibold mb-4">
                                Safety Planning and Insurance
                            </h2>

                            <input
                                type="text"
                                placeholder="Training Venue"
                                className="w-full mb-4 p-3 rounded-lg bg-wjite/20 border border-white/30"
                            />
                            <input
                                type="date"
                                className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30"
                            />

                            <label className="inline-flex items-center px-5 py-3 bg-cyan-400 text-black rounded-lg cursor-pointer hover:bg-cyan-300">
                                Upload Certificate

                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) =>
                                        handleFileChange(e, "safety")
                                    }
                                />
                            </label>

                                    {files.safety && (
                                        <p className="mt-3 text-green-300">
                                            {files.safety.name}
                                        </p>
                                    )}
                    </div>

                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
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
                            placeholder="Mentor Comments..."
                            className="w-full mb-4 p-3 rounded-lg bg-white/20 border border-white/30"
                        />

                        <input
                            type="date"
                            className="w-full mb-6 p-3 rounded-lg bg-white/20 border border-white/30"
                        />

                        <button className="w-full bg-cyan-400 text-black font-bold py-3 rounded-lg hover:bg-cyan-300 transition">
                            Save Section 4
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}