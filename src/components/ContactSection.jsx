import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import clsx from 'clsx'

export function ContactSection({ dictionary, invert = true }) {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              {dictionary.title}
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                {dictionary.button}
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                {dictionary.businessInquiries.title}
              </h3>

              <div
                className={clsx(
                  'text-sm not-italic mt-6',
                  invert ? 'text-neutral-300' : 'text-neutral-600',
                )}
              >
                <strong className={invert ? 'text-white' : 'text-neutral-950'}>
                  {dictionary.businessInquiries.name}
                </strong>
                <br />
                {dictionary.businessInquiries.role}
                <br />
                {dictionary.businessInquiries.phone}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
