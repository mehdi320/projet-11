import HeroBanner from "../../components/heroBanner/HeroBanner";
import Features from "../../components/features/Features";
import { features } from "../../constants/constants";

import "./Home.scss";

export default function Home() {
    return (
        <main>
            <HeroBanner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {/* Map sur le tableau features */}
                {features.map((e, index) => (
                    <Features
                        image={e.image}
                        alt={e.alt}
                        title={e.title}
                        description={e.description}
                        key={index}
                    />
                ))}
            </section>
        </main>
    );
}
