import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

import { getDictionary } from "../get-dictionary";

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover({dictionary}) {
  return (
    <Section title={dictionary.title} image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        {dictionary.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList>
    </Section>
  )
}

//
// Build section – here we render paragraphs from dictionary.process.build
// and then list its “phases” (each with a title and description) using a List
//
function Build({ dictionary }) {
  return (
    <Section title={dictionary.title} image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        {dictionary.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      <List className="mt-12">
        {dictionary.phases.map((phase, index) => (
          <ListItem key={index} title={phase.title}>
            {phase.description}
          </ListItem>
        ))}
      </List>
    </Section>
  )
}

//
// Deliver section – we render paragraphs from dictionary.process.deliver
// and then display a Blockquote with the quote coming from the dictionary.
// Here we split the author string (e.g. "Debra Fiscal, CEO of Unseal")
// into its name and role.
//
function Deliver({ dictionary }) {
  const [name, role] = dictionary.quote.author.split(',').map((s) => s.trim())
  return (
    <Section title={dictionary.title} image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        {dictionary.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      <Blockquote author={{ name, role }} className="mt-12">
        {dictionary.quote.text}
      </Blockquote>
    </Section>
  )
}

//
// Values section – we use the process.values dictionary to fill in the section
//
function Values({ dictionary }) {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow={dictionary.eyebrow} title={dictionary.title}>
        <p>{dictionary.description}</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          {dictionary.values.map((value, index) => (
            <GridListItem key={index} title={value.title}>
              {value.description}
            </GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

//
// The main Process page – we load the dictionary and pass along the proper parts to each section
//
export default async function Process({ params }) {
  const lang = params.lang
  const dictionary = await getDictionary(lang)
  
  return (
    <>
      <PageIntro eyebrow={dictionary.process.eyebrow} title={dictionary.process.title}>
        <p>{dictionary.process.description}</p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover dictionary={dictionary.process.discover} />
        <Build dictionary={dictionary.process.build} />
        <Deliver dictionary={dictionary.process.deliver} />
      </div>

      <Values dictionary={dictionary.process.values} />

      <ContactSection dictionary={dictionary.home.footer.contact} />
    </>
  )
}