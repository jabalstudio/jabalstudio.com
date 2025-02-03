import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import logoArchitects from '@/images/logos/architects.png'
import logoEcommerce from '@/images/logos/ecommerce.png'
import logoEducation from '@/images/logos/education.png'
import logoGovernments from '@/images/logos/governments.png'
import logoHotels from '@/images/logos/hotels.png'
import logoRealEstate from '@/images/logos/real-estate.png'
import logoRestaurants from '@/images/logos/restaurants.png'
import logoStartups from '@/images/logos/startups.png'

import { GridList, GridListItem } from '@/components/GridList'
import { blogArticles } from '@/lib/mdx'
import { PageLinks } from '@/components/PageLinks'
import { loadCaseStudies } from '@/lib/mdx'

import { getDictionary } from "../[lang]/get-dictionary";
import { Locale } from "../../../i18n-config";
import { LocaleSwitcher } from '@/components/LocaleSwitcher'



export default async function Home({ params }) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);

  let caseStudies = (await loadCaseStudies()).slice(0, 3);

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            {dictionary.home.hero.title}
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            {dictionary.home.hero.description}
          </p>
        </FadeIn>
      </Container>

      <Clients dictionary={dictionary.home.industries} />

      <CaseStudies caseStudies={caseStudies} dictionary={dictionary.home.innovation} />

      <Culture dictionary={dictionary.home.culture} />

      <Services dictionary={dictionary.home.services} />

      <ContactSection dictionary={dictionary.home.footer.contact}/>
    </>
  );
}

const clients = [
  ['Hotels', logoHotels],
  ['Governments', logoGovernments],
  ['Startups', logoStartups],
  ['Real Estate', logoRealEstate],
  ['E-commerce', logoEcommerce],
  ['Restaurants', logoRestaurants],
  ['Education', logoEducation],
  ['Architects', logoArchitects],
]

function Clients({ dictionary }) {
  const clients = [
    [dictionary.categories[0], logoHotels],
    [dictionary.categories[1], logoGovernments],
    [dictionary.categories[2], logoStartups],
    [dictionary.categories[3], logoRealEstate],
    [dictionary.categories[4], logoEcommerce],
    [dictionary.categories[5], logoRestaurants],
    [dictionary.categories[6], logoEducation],
    [dictionary.categories[7], logoArchitects],
  ];

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {dictionary.title}
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} width={220} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function CaseStudies({ caseStudies, dictionary }) {
  return (
    <>
      <SectionIntro
        title={dictionary.title}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{dictionary.description}</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{dictionary.caseStudyLabel}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  );
}

function Culture({ dictionary }) {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow={dictionary.eyebrow}
        title={dictionary.title}
        invert
      >
        <p>{dictionary.description}</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {Array.isArray(dictionary.values) && dictionary.values.map((value, index) => (
            <GridListItem key={index} title={value.title} invert>
              {value.description}
            </GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  );
}


function Services({ dictionary }) {
  return (
<>      <SectionIntro
        eyebrow={dictionary.eyebrow}
        title={dictionary.title}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{dictionary.description}</p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            {Array.isArray(dictionary.values) && dictionary.values.map((value, index) => (
              <ListItem key={index} title={value.title}>
                {value.description}
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </>
  );
}

export const metadata = {
  title: 'Jabal Studio',
  description:
    'We are a development studio working at the intersection of design and technology.',
}