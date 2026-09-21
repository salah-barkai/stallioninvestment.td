import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ServicesPreview from '../components/ServicesPreview'
import ProjectsPreview from '../components/ProjectsPreview'
import ConventionsPreview from '../components/ConventionsPreview'
import LatestNews from '../components/LatestNews'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <ProjectsPreview />
      <ConventionsPreview />
      <LatestNews />
      <Testimonials />
      <CTA />
    </>
  )
}
