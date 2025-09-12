import { Button } from "@/components/ui/button";
import heroBg from "@/assets/background.png";

export default function EGCIndiaHero() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-4" 
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
            }}>
            <div className="bg-transparent p-6">
                <h1 className="text-3xl font-bold mb-4">WELCOME TO EGC INDIA</h1>
                <p className="mb-4">
                    Welcome to EGC INDIA - We are the sister concern of Excellency group
                    companies that was established in the year 2014. To serve the
                    international market, EGC INDIA was <br/> established. It's into the export
                    and import of Agro based products.
                </p>
                <p className="mb-4">
                    We at EGC India take pride in being the suppliers of all types of Agro
                    Products. We are exporting a full range of products including
                    <br />
                    <span className="font-semibold">
                        Fresh Vegetable, Spices, Pulses, Grain, Oilseeds, Cattle Feed,
                        Textile & all kinds of Foodstuff
                    </span>
                </p>
                <Button className="bg-[#2d2c7a] text-white hover:bg-[#37369b]">
                    READ MORE
                </Button>
            </div>
        </div>
    );
}