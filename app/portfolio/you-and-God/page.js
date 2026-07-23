"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function YouAndGodPage() {
    const [files, setFiles] = useState({});
    const [formData, setFormData] = useState({
        spiritualGifts: "",
        bibleReading: "",
        desireOfAges: "",
        devotionalJournal: "",
        beliefs: "",
    });

    const handleFileChange = (e, field) => {
        setFiles({
            ...files,
            [field]: e.target.files[0],
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <navbar />

            <div className="min-h-screen bg-gradient-to-b from-[#003366] to-[#001933] text-white p-6">
                <div className="max-w-5xl mx-auto">

                    {/* {Header} */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-2">
                            Section 2: You and God
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            This section documents spiritual growth, Bible study, devotional life,
                            and relationship with God as part of the Senior Youth Leader (SYL) curriculum.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {/* {Spiritual Gifts} */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-3">
                                Spiritual Gifts Assessment
                            </h2>
                            <p classname="text-gray-300 mb-4">
                                Complete a spiritual gifts assessment and explain how your gifts can be used in youth ministry.
                            </p>

                            <label className="inline-flex items-center px-5 py-3 bg-cyan-400 text-black font-semobold rounded-lg cursor-pointer hover:bg-cyan-300 transition">
                                Upload Assessment
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.jpg.jpeg,.png.doc"
                                    onChange={(e) => handleFileChange(e, "spiritualGiftsFile")}
                                />
                            </label>

                            {files.spiritualGiftsFile && (
                                <p className="mt-3 text-sm text-green-300">
                                    ✔ Selected: {files.spiritualGiftsFile.name}
                                </p>
                            )}

                            <textarea
                                name="spiritualGifts"
                                value={formData.spiritualGigts}
                                onChange={handleChange}
                                placeholder="Write your reflection on how your spiritual gifts can be used in youth ministry..."
                                rows={5}
                                className="w-full mt-4 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        {/* {Bible Reading Plan} */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <h2 classname="text-2xl font-semibold mb-3">
                                Bible Reading Plan
                            </h2>
                            <p className="text-gray-300 mb-4">
                                Record your progress in reading the four Gospels over the course of the year.
                            </p>

                            <label className="inline-flex items-center px-5 py-3 bg-cyan-400 text-black font-semibold rounded-lg cursor-pointer hover:bg-cyan-300 transition">
                                Upload Reading Plan
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.jpg,.jpeg,.png,.doc"
                                    onChange={(e) => handleFileChange(e, "bibleReadingFile")}
                                />
                            </label>

                            {files.bibleReadingFile && (
                                <p className="mt-3 text-sm text-grren-300">
                                    ✔ Selected: {files.bibleReadingFile.name}
                                </p>
                            )}

                            <textarea
                                name="bibleReading"
                                value={formData.bibleReading}
                                onChange={handleChange}
                                placeholder="Write your Bible reading progress and key lessons learned..."
                                rows={5}
                                className="w-full mt-4 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus-ring-cyan-400"
                            />
                        </div>

                        {/* {Desire of Ages Study} */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-3">
                                Desire of Ages Study
                            </h2>
                            <p className="text-gray-300 mb-4">
                                Write a 250-word reflection on lessons learned from the book Desire of Ages.
                            </p>

                            <textarea
                                name="desireOfAges"
                                value={formData.desireOfAges}
                                onChange={handleChange}
                                placeholder="Write your 250-word reflection here..."
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        {/* {Devotional Journal} */}
                        <div classname="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-3">
                                Devotional Journal
                            </h2>
                            <p className="text-gray-300 mb-4">
                               Upload your 6-month devotional journal and record key spiritual lessons. 
                            </p>

                            <label className="inline-flex items-center px-5 py-3 bg-cyan-400 text-black font-semibold rounded-lg cursor-pointer hover:bg-cyan-300 transition">
                                Upload Journal
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    onChange={(e) => handleFileChange(e, "devotionalJournalFile")}
                                />
                            </label>

                            {files.devotionalJournalFile && (
                                <p className="mt-3 text-sm text-green-300">
                                    ✔ Selected: {files.devotionalJournalFile.name}
                                
                                </p>
                            )}

                            <textarea
                                name="devotionalJournal"
                                value={formData.devotionalJournal}
                                onChange={handleChange}
                                placeholder="Write the key lessons from your devotional journal..."
                                rows={6}
                                className="w-full mt-4 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        {/* {28 Fundamental Beliefs} */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-3">
                                28 Fundamental Beliefs
                            </h2>
                            <p className="text-gray-300 mb-4">
                                Upload or summarize your reflections on the 28 Fundamental Beliefs of the Seventh-day Adventist Church.
                            </p>

                            <label className="inline-flex items-center px-5 py-3 bg-cyan-400 text-black font-semibold rounded-lg cursor-pointer hover:bg-cyan-300 transition">
                                Upload Fundamental Beliefs Summary
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    onChange={(e) => handleFileChange(e, "beliefsFile")}
                                />
                            </label>

                            {files.beliefsFile && (
                                <p className="mt-3 text-sm text-green-300">
                                    ✔ Selected: {files.beliefsFile.name}

                                </p>
                            )}

                            <textarea
                                name="beliefs"
                                value={formData.beliefs}
                                onChange={handleChange}
                                placeholder="Write your reflections on the 28 Fundamental Beliefs..."
                                rows={8}
                                className="w-full mt-4 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        {/* {Save Button} */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <button className="w-full bg-cyan-400 text-black font-bold py-4 rounded=lg hover:bg-cyan-300 transition text-lg">
                                Save Section 2
                            </button>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    );
}