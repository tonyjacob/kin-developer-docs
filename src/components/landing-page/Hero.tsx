import { FC } from 'react'
import { DocsNavCard as NavCard } from '../../components/docs/DocsNavCard'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'

const content = {
  heading: 'Easy. Quick. Intuitive.',
  text: 'Integrate cryptocurrency into your app experience',
  heroImage: '/images/kin-cube.png',
}

export const Hero: FC = () => {
  return (
    <div className="mb-12 w-full space-y-12 px-2 pt-8 md:space-y-20 md:pt-16 lg:px-0 lg:pt-20">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-16 px-4 md:grid-cols-2 md:px-8 ">
        <div className="z-1 w-64 space-y-8 sm:max-w-md">
          <Heading level={0}>{content.heading}</Heading>
          <Paragraph className="text-lg">{content.text}</Paragraph>
        </div>
        <div className="relative mt-0 flex w-full items-start">
          {/* TODO don't use image as thumbnail if possible */}
          <img className="hidden md:block md:scale-125 lg:scale-150 " src={content.heroImage} />
        </div>
      </div>
      <div className="my-10 mx-auto mb-0 max-w-5xl space-y-12 px-3">
        <NavCard
          hero
          title="Kin Essentials"
          subtitle="Earn via the Kin Rewards Engine. Build with best in class No-Code and SDK tools."
          svgFile="kin"
          link={{ url: '/docs/essentials', label: 'See more' }}
        />
        <NavCard
          hero
          title="Use Cases"
          subtitle="See how our top earning apps use Kin to their advantage."
          svgFile="kin"
          link={{ url: '/docs/use-cases', label: 'See more' }}
        />
        <div className=" mx-auto my-0 grid w-full max-w-5xl gap-6 md:grid-cols-2">
          <NavCard
            hero
            title="Love Coding? Use our SDKs"
            subtitle="Harness the power of Kin with our range of SDKs."
            svgFile="kin"
            link={{ url: '/docs/developers', label: 'See more' }}
          />
          <NavCard
            hero
            title="Not a Dev? No Problem."
            subtitle="Build powerful Apps with no coding experience."
            svgFile="kin"
            link={{ url: '/docs/non-developers', label: 'See more' }}
          />
        </div>
        <NavCard
          hero
          title="Integrations"
          subtitle="Easily power-up your App with these amazing integrations."
          svgFile="kin"
          link={{ url: '/docs/integrations', label: 'See more' }}
        />
      </div>
    </div>
  )
}
