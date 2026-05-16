import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ServicesPreview from '../components/ServicesPreview'
import ProjectsPreview from '../components/ProjectsPreview'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
      <CTA />
    </>
  )
}
