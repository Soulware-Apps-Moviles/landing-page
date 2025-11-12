import Image from "next/image";


type Orientation = "left" | "right";

export interface FeatureCardProps {
    header: string;
    text: string;
    imageSrc: string;
    orientation: Orientation;
}

export default function FeatureCard({ header, text, imageSrc, orientation }: FeatureCardProps) {
    const isRight = orientation === "right";

    return (
        <div
            className={`
        flex flex-col
        md:flex-row
        ${isRight ? "md:flex-row-reverse" : ""}
        items-center
        gap-12 md:gap-16
        w-full
      `}
        >
            {/* Imagen */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={header}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">{header}</h3>
                <p className="text-base md:text-lg text-gray-800">{text}</p>
            </div>
        </div>
    );
}

