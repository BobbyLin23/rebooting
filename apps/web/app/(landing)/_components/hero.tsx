import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Revolutionize Your Workflow
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
          Boost productivity and streamline your business processes with our
          cutting-edge SaaS solution.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
          <Button size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  )
}
