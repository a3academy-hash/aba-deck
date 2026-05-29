import { SideNav } from '@/components/SideNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Hero } from '@/components/sections/Hero';
import { WhyABA } from '@/components/sections/WhyABA';
import { CompetitiveInfrastructure } from '@/components/sections/CompetitiveInfrastructure';
import { LeagueStructure } from '@/components/sections/LeagueStructure';
import { NationalVisibility } from '@/components/sections/NationalVisibility';
import { ChampionshipExperience } from '@/components/sections/ChampionshipExperience';
import { TechnologyEcosystem } from '@/components/sections/TechnologyEcosystem';
import { MembershipEconomics } from '@/components/sections/MembershipEconomics';
import { Governance } from '@/components/sections/Governance';
import { MembershipPathway } from '@/components/sections/MembershipPathway';
import { FAQ } from '@/components/sections/FAQ';
import { ExpansionVision } from '@/components/sections/ExpansionVision';
import { FoundingSchools } from '@/components/sections/FoundingSchools';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <SideNav />
      {/* Main content offsets the desktop rail (lg:pl-64) and the mobile top
          bar (pt-14 on small screens; hero is full-bleed so it overrides). */}
      <main className="lg:pl-64">
        <Hero />
        <WhyABA />
        <CompetitiveInfrastructure />
        <LeagueStructure />
        <NationalVisibility />
        <ChampionshipExperience />
        <TechnologyEcosystem />
        <MembershipEconomics />
        <Governance />
        <MembershipPathway />
        <FAQ />
        <ExpansionVision />
        <FoundingSchools />
        <Contact />
      </main>
      <div className="lg:pl-64">
        <SiteFooter />
      </div>
    </>
  );
}
