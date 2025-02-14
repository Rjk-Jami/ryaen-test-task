"use client"
import Image from "next/image";
import { GiTwoCoins } from "react-icons/gi";

const Play = () => {
    const bg = "https://res.cloudinary.com/dpphpbkkz/image/upload/v1739568483/bg_g7egwr.jpg";

    return (
        <div className="relative h-full rounded-2xl shadow-md text-white overflow-hidden">
            <Image
                src={bg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute"
            />
            <div className="relative z-10 p-4 h-full flex flex-col gap-3">
                {/* Top Section */}
                <div className="flex justify-between items-center">
                    <div className="text-lg flex items-center space-x-2">
                        <GiTwoCoins className="text-lg" />
                        <span className="font-semibold">24</span>
                    </div>
                    <span className="text-lg font-medium">Points history</span>
                </div>

                {/* Centered Content */}
                <div className="flex flex-1 justify-center items-center">
                    <div className="text-center">
                        <p className="mb-5">
                            Challenge yourself with puzzles,<br /> races, and fun rewards!
                        </p>
                        <button className="bg-[#021D4F] py-2 px-4 text-white rounded-lg">
                            Play now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Play;
