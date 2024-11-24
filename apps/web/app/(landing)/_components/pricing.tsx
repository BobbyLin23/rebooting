import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const plans = [
  {
    name: 'Basic',
    price: '$9',
    features: ['5 Projects', '10GB Storage', 'Basic Support'],
  },
  {
    name: 'Pro',
    price: '$29',
    features: [
      'Unlimited Projects',
      '100GB Storage',
      'Priority Support',
      'Advanced Analytics',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited Everything',
      'Dedicated Support',
      'Custom Integrations',
    ],
  },
]

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  {plan.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold text-center mb-4">
                  {plan.price}
                  <span className="text-sm font-normal">/month</span>
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
