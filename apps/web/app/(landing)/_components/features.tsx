import { CheckCircle, Zap, BarChart } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing tools and workflows.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Experience blazing fast performance with our optimized platform.',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description:
      'Gain valuable insights with our powerful analytics dashboard.',
  },
]

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
