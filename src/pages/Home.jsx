import React from 'react';
import GlobeBackground from '../components/globe/GlobeBackground';
import HeroSection from '../components/sections/home/HeroSection';
import KeyHighlights from '../components/sections/home/KeyHighlights';
import TokenOverview from '../components/sections/home/TokenOverview';
import EcosystemPreview from '../components/sections/home/EcosystemPreview';
import RoadmapPreview from '../components/sections/home/RoadmapPreview';
import CommunityBanner from '../components/sections/home/CommunityBanner';

export function Home() {
    return (
        <div className="relative mt-20">
            <GlobeBackground />
            <div className="relative z-10">
                <HeroSection />
                <KeyHighlights />
                <TokenOverview />
                <EcosystemPreview />
                <RoadmapPreview />
                <CommunityBanner />
            </div>
        </div>
    );
}

export default Home;
