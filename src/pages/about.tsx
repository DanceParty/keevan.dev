import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Title from "../components/title/title"
import Paragraph from "../components/paragraph/paragraph"
import Link from "../components/link/link"
import { TitleTags } from "../types/typography"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Title tag={TitleTags.H2} center>
        Hi, I'm Keevan!
      </Title>
      <Title tag={TitleTags.H2} center>
        안녕하세요! 나는 키븐이에요~
      </Title>
      <Title tag={TitleTags.H4}>Overview</Title>
      <Paragraph>
        I currently live in Seattle with my wife Jeehyae and our dog Samba. We
        just moved here recently in early 2019 and before that we lived in
        Chicago for a year. Before that was Phoenix, and then before that was
        university at Norther Arizona University studying Computer Science. All
        of these moves have happened in the span of about 3-4 years almost
        entirely due to new positions at new companies.
      </Paragraph>
      <Title tag={TitleTags.H4}>Career</Title>
      <Paragraph>
        In Phoenix, I worked at my first job out of university at a company
        called CORE Construction. Here I was the company's first Software
        Developer hire and was tasked with building a few web apps. Out of
        college, I had no idea what to expect and had no real world app building
        experience either so being the only developer gave me a lot of space to
        grow and learn. I credit this position, with the help and guidence of
        some coworkers Reiner and Blake, for most of my growth as a Software
        Engineer up to this point. This is one of the best group of people and
        most motivated group of people I have ever worked with and miss it
        dearly!
      </Paragraph>
      <Paragraph>
        After CORE Construction started to move their home-base from Phoenix to
        Dallas, I decided that it might be a good time to check for other
        oppurtunities. Luckily for me, I was not really tied down, so I was able
        to move across the country to Chicago and pursue an oppurtunity for
        Allstate as a Software Engineer working mostly on the{" "}
        <Link to="https://www.allstate.com/landingpages/virtual-assist.htm">
          Virtual Assist
        </Link>{" "}
        team. Here I would learn some Java and really focus on learning React,
        which is what I think I am most knowledgable in to this day. I enjoyed
        my time here and had some cool chances to build some cool products with
        some cool people, but after a childhood friend Cameron asked if I would
        be interested in a spot on his team at Microsoft I couldn't say no.
      </Paragraph>
      <Paragraph>
        I started at Microsoft in May of 2019 as a Software Engineer on the{" "}
        <Link to="https://appcenter.ms/">App Center</Link> team. Thus far I have
        really enjoyed my time on this team and feel like I have so much to
        learn because I am surrounded by absolutely brilliant engineers. What is
        most new to me on this team is the remote work culture. For my immediate
        team, it is only myself and one other engineer in Seattle, one engineer
        in Brazil, and the rest in the San Francisco office. This has opened a
        lot of new challenges and has also allowed for a lot of freedom. Because
        of this I really enjoy this position and I feel like I will continue
        here for a while longer.
      </Paragraph>
      <Title tag={TitleTags.H4}>Personal</Title>
      <Paragraph>
        I spend most of my spare time away from work either rock climbing,
        reading, coding, playing video games, or hanging out with friends and my
        family. I just started rock climbing this year; well more specifically
        bouldering. I started in May and I am currently climbing around a level
        v4 at our local gym. Though I have done quite a bit of indoor
        bouldering, I have yet to go outside bouldering, but maybe one day (I am
        scared of getting injured 😬). For my reading, feel free to follow me on{" "}
        <Link to="https://www.goodreads.com/user/show/70427812-keevan-dance">
          goodreads
        </Link>{" "}
        so I can follow back and hopefully pick up some good book
        recommendations :). I like to code in my spare time and almost all of my
        personal code can be found on my{" "}
        <Link to="https://github.com/DanceParty">github</Link>. The video games
        i am mostly playing these days are{" "}
        <Link to="https://www.rankedftw.com/team/315404/#td=world&ty=c&ra=best&tyz=0&tx=a&tl=1">
          StarCraft 2
        </Link>{" "}
        and{" "}
        <Link to="https://tracker.gg/halo-mcc/profile/animeKeev/overview">
          Halo MCC (steam)
        </Link>{" "}
        and I will often stream on{" "}
        <Link to="https://www.twitch.tv/notkeevan">twitch.tv</Link>.
      </Paragraph>
    </Layout>
  )
}

export default About
