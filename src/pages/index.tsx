import React from 'react';
import Layout from '@theme/Layout';
import HomepageHero from '../components/HomepageHero';
import PhaseRoadmap from '../components/PhaseRoadmap';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageApi from '../components/HomepageApi';
import CommunityLinks from '../components/CommunityLinks';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Learn to Cloud"
      description="The most up-to-date, community-driven guide to becoming a cloud engineer."
    >
      <HomepageHero />
      <main>
        <PhaseRoadmap />
        <HomepageFeatures />
        <HomepageApi />
        <CommunityLinks />
      </main>
    </Layout>
  );
}
