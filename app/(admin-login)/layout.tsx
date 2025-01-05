import Image from "next/image";
import bgImage from "@/public/2.jpg";
import { ModeToggle } from "@/components/ModeToggle";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen w-full relative overflow-hidden bg-center">
            <Image
                src={bgImage}
                width={1000}
                height={1000}
                alt={"background img"}
                className={"w-full h-full object-cover absolute left-0 top-0 -z-40"}
            />
            <div className="w-full h-full flex flex-col items-center justify-center backdrop-blur-lg">
                <div className="absolute top-4 right-4">
                    <ModeToggle />
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;