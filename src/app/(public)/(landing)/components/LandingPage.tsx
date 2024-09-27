import {
  PiGithubLogo,
  PiIdentificationBadge,
  PiLinkedinLogo,
  PiTwitterLogo,
} from 'react-icons/pi'
import {
  bgGradient,
  buttonHoverTransition,
  textGradient,
} from '@/design/constants'

import Link from 'next/link'
import { classNames } from '@/utils/classNames'

const paddingX = 'px-4 md:px-8 lg:px-16'

export const LandingPage = () => {
  return (
    <div>
      <div className="space-y-28">
        <Hero />
        <div className={classNames(paddingX, 'space-y-28')}>
          <HowItWorks />
          <Benefits />
        </div>
        <Cta />
      </div>

      <Footer />
    </div>
  )
}

const Hero = () => {
  return (
    <div className={classNames(bgGradient, paddingX, 'py-12 text-white')}>
      <div>
        <h1 className="text-center text-5xl font-bold leading-none tracking-tight">
          Convert colors to Tailwind CSS in seconds
        </h1>

        <p className="mt-4 text-center text-xl font-medium">
          Find the perfect tailwind color class from any HEX value
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Need to match colors in your design with Tailwind’s utility classes?
          This app makes it simple! Just input your color in HEX format, and
          it’ll instantly find the closest Tailwind CSS color class for you. Say
          goodbye to manually scrolling through color palettes. Speed up your
          design process with precision!
        </p>
      </div>

      <div className="mt-12 flex items-center justify-center">
        <Link
          href="/#inputColour"
          className={classNames(
            buttonHoverTransition,
            'uppercas rounded-xl bg-white px-8 py-4 shadow-xl hover:opacity-75'
          )}
        >
          <p
            className={classNames(
              bgGradient,
              textGradient,
              'text-lg font-bold'
            )}
          >
            Start converting
          </p>
        </Link>
      </div>
    </div>
  )
}

const HowItWorks = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center">
        <p
          className={classNames(
            bgGradient,
            textGradient,
            'text-center text-3xl font-bold leading-none tracking-tight'
          )}
        >
          How it works
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <HowItWorkItem
          description="Enter a HEX color code."
          icon="🎨"
          title="Input your color"
        />
        <HowItWorkItem
          description="Instantly get the nearest Tailwind CSS color class."
          icon="📍"
          title="Find the closest tailwind match"
        />
        <HowItWorkItem
          description="Quickly copy the class name and paste it directly into your project."
          icon="📎"
          title="Copy and use"
        />
      </div>
    </div>
  )
}

const HowItWorkItem = ({
  description,
  icon,
  title,
}: {
  description: string
  icon: string
  title: string
}) => {
  return (
    <div className="rounded-xl bg-violet-50 p-4">
      <div className="mb-4 inline-block rounded-xl bg-purple-100 p-4">
        <p className="p-4 text-3xl">{icon}</p>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const Benefits = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center">
        <p
          className={classNames(
            bgGradient,
            textGradient,
            'text-center text-3xl font-bold leading-none tracking-tight'
          )}
        >
          Benefits
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <BenefitItem
          title="Time-saving"
          description="Instantly convert colors without manually referencing the Tailwind documentation."
        />
        <BenefitItem
          title="Easy to use"
          description="A simple and intuitive interface designed for designers and developers."
        />
        <BenefitItem
          className="lg:col-span-2"
          title="Accurate color matching"
          description="Our tool finds the exact or closest Tailwind color class to match your design.
"
        />
      </div>
    </div>
  )
}

const BenefitItem = ({
  description,
  className,
  title,
}: {
  description: string
  className?: string
  title: string
}) => {
  return (
    <div
      className={classNames(
        className ? className : '',
        'rounded-xl bg-slate-100 p-4'
      )}
    >
      <p className="text-xl font-bold">{title}</p>
      <p>{description}</p>
    </div>
  )
}

const Cta = () => {
  return (
    <div className={classNames(bgGradient, paddingX, 'py-12 text-white')}>
      <div>
        <h2 className="text-center text-3xl font-bold leading-none tracking-tight">
          Ready to boost your workflow?
        </h2>

        <p className="mt-4 text-center text-xl font-medium">
          Input your color now and see how easy it is to find the perfect
          Tailwind class.
        </p>
      </div>

      <div className="mt-12 flex items-center justify-center">
        <Link
          href="/#inputColour"
          className={classNames(
            buttonHoverTransition,
            'uppercas rounded-xl bg-white px-8 py-4 shadow-xl hover:opacity-75'
          )}
        >
          <p
            className={classNames(
              bgGradient,
              textGradient,
              'text-lg font-bold'
            )}
          >
            Start converting
          </p>
        </Link>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="p-4 text-sm text-slate-400 md:px-0">
      <div className={paddingX}>
        <div className="md:flex md:items-center md:justify-between md:space-y-0">
          <p className="flex items-center justify-center gap-x-1 md:justify-start">
            Yet another app made with ❤️ by
            <Link
              className="border-b-[1px] border-slate-400"
              target="_blank"
              href="https://jeanrobertou.com"
            >
              Jean Robertou
            </Link>
          </p>

          <div className="mt-4 flex items-center justify-center gap-x-4">
            <Link target="_blank" href="https://jeanrobertou.com">
              <PiIdentificationBadge className="h-6 w-6" />
            </Link>
            <Link target="_blank" href="https://github.com/jean1591">
              <PiGithubLogo className="h-6 w-6" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/robertoujean/"
            >
              <PiLinkedinLogo className="h-6 w-6" />
            </Link>
            <Link target="_blank" href="https://x.com/Jean_Robert_II">
              <PiTwitterLogo className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
