import Image from 'next/image'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import { getDictionary } from '../get-dictionary'

export default async function About({ params }) {
  const lang = params.lang;
  const dictionary = await getDictionary(lang);
  const blogArticles = (await loadArticles()).slice(0, 2);
  return (
    <>
      <PageIntro eyebrow={dictionary.about.intro.eyebrow} title={dictionary.about.intro.title}>
        <p>{dictionary.about.intro.description}</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          {dictionary.about.intro.story.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value={dictionary.about.stats.talents} label="Qualified talents" />
          <StatListItem value={dictionary.about.stats.clients} label="Happy clients" />
          <StatListItem value={dictionary.about.stats.linesOfCode} label="Lines of code shipped" />
        </StatList>
      </Container>

      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro eyebrow={dictionary.about.culture.eyebrow} title={dictionary.about.culture.title} invert>
          <p>{dictionary.about.culture.description}</p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            {dictionary.about.culture.values.map((value) => (
              <GridListItem key={value.title} title={value.title} invert>
                {value.description}
              </GridListItem>
            ))}
          </GridList>
        </Container>
      </div>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          {[{ title: 'Leadership', people: dictionary.about.team.leadership }, { title: 'Team', people: dictionary.about.team.members }].map((group) => (
            <FadeInStagger key={group.title}>
              <Border as={FadeIn} />
              <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                <FadeIn>
                  <h2 className="font-display text-2xl font-semibold text-neutral-950">{group.title}</h2>
                </FadeIn>
                <div className="lg:col-span-3">
                  <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                    {group.people.map((person) => (
                      <li key={person.name}>
                        <FadeIn>
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                            <Image
                              alt=""
                              src={"/src/images/team/"+person.image+".jpg"}
                              width={400}
                              height={400}
                              className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white">{person.name}</p>
                              <p className="mt-2 text-sm text-white">{person.role}</p>
                            </div>
                          </div>
                        </FadeIn>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInStagger>
          ))}
        </div>
      </Container>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title={dictionary.about.blogSection.title}
        intro={dictionary.about.blogSection.intro}
        pages={blogArticles}
      />

      <ContactSection dictionary={dictionary.home.footer.contact} />
    </>
  );
}


export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}