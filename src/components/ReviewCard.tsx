import Image from "next/image";

export interface ReviewCardProps {
    name: string;
    location: string;
    comment: string;
    imageSrc: string;
}

export default function ReviewCard({ name, location, comment, imageSrc }: ReviewCardProps) {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start p-6 gap-4 bg-white rounded-2xl shadow-md">
            <div className="w-full flex justify-center">
                <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            
            <div className="flex flex-col w-full items-center">
                <h3 className="text-[24px] font-semibold">{name}</h3>
                <p className="text-[18px] text-gray-600">{location}</p>
            </div>

            <p className="text-[18px] text-gray-800">{comment}</p>
        </div>
    );
}