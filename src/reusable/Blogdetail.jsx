import {React, useEffect} from 'react'
import Title from './Title'
import gsap from 'gsap'

const Blogdetail = () => {
  useEffect(()=>{
    gsap.fromTo('.text-box',
      {
        y:5,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        stagger : 0.5,

      })
  })
  return (
    <div className='w-full h-full '>
        <div className=" text-box flex-col">

           <h1 className='text-4xl font-black'>Second Hackthon</h1>
            <div className="flex">Date :2025.12.26</div>
        </div>
        <div className=" text-box flex  w-full bg-blue-500 h-90 my-5">
           
        </div>
        <div className="text-box flex-col my-15 px-2 lg:px-25">
             <Title heading="🚀 My Second Hackathon in Nepal: Chaos, Code & Unlimited Coffee" />
                        

            If someone told me a year ago that staying awake for 24+ hours, drowning in coffee, and arguing with my teammates about semicolons would be the highlight of my semester…
            I’d say, “Bro, that’s literally my life now.”

            Welcome to my second hackathon experience in Nepal—a beautiful combination of excitement, stress, creativity, and the occasional existential crisis.

             <h1 className='text-2xl font-bold mt-4'>💡The Hype Begins</h1>

            As a CSIT student, hackathons feel like mini festivals.
            Not the kind with music and food trucks…
            The ones with laptops, dark circles, and teammates who show up 20 minutes late because they “had to fix their code.”
            Sure, bro.

            But the energy when you enter the hall? Magical.

            Dozens of students buzzing with ideas.
            Mentors walking around like NPCs from a programming RPG.
            And me?
            Ready with a laptop, headphones, and a snack stash big enough to survive a small war.
             <h1 className='text-2xl font-bold mt-4'>🧠 The Challenge Hits</h1>
            

            The theme was announced, and suddenly every team transformed from chill students into coding warriors.
            It’s that moment when you realize:

            Your idea must be innovative

            Your code must be clean

            Your brain must not crash

            And your laptop better not restart for updates
            (looking at you, Windows 👀)

            We brainstormed.
            We argued.
            We googled things we absolutely should’ve known by now.
            Classic hackathon vibes.
             <h1 className='text-2xl font-bold'>☕ Caffeine, Chaos & Creativity</h1>
            

            There’s something special about hackathons:
            Time doesn’t exist.

            1 hour feels like 10 minutes.
            10 minutes feels like 1 second.
            And suddenly it’s 3 a.m., and your teammate is debugging like they’re in a hacker movie while you eat noodles and question your life choices.

            But the creativity?
            Next level.

            Someone built an AI model in a hurry.
            Another team created a full-stack app from scratch.
            Someone even attempted a blockchain idea (and probably regretted it).
            
             <h1 className='text-2xl font-bold mt-4'>😂 The Fun Side</h1>
            

            Apart from coding storms, hackathons come with:

            Unexpected dance breaks

            People napping on beanbags

            Free goodies (the real motivation)

            That one team with RGB keyboards glowing like a gaming café

            Someone yelling “WHY ISN’T THIS WORKING?” every 20 minutes

            It’s a vibe.
             <h1 className='text-2xl font-bold mt-4'> 🏁 Final Presentation Moment</h1>
           

            After hours of coding, panicking, and praying to the compiler gods… it was showtime.

            Presenting your project at a hackathon feels like giving a TED Talk after pulling an all-nighter.
            Your hands shake a bit.
            Your voice cracks.
            But your confidence goes brrrr because you built something awesome in record time.

            And that’s the best part:
            Whether you win or not, you walk away with a project, experience, and memories that hit harder than any classroom lecture.
            
            <h1 className='text-2xl font-bold mt-4'>🎉 What I Took Home (Besides Swag)</h1>
            

            My second hackathon taught me:

            Teamwork matters more than tech

            Debugging at 2 a.m. builds character

            Ideas grow faster when you're surrounded by passionate people

            And yes, coffee is absolutely a valid meal during hackathons

            Nepal’s hackathon culture is growing fast, and being part of it feels like joining a tech revolution—one bug at a time.

             <h1 className='text-2xl font-bold mt-4'>🔥 Final Thoughts</h1>
            

            If you’re a CSIT student thinking about joining your first (or second) hackathon, just do it.
            You’ll learn, you’ll struggle, you’ll laugh, and you might even surprise yourself with what you can build.
             <br />
            Hackathons aren’t just competitions.
            They’re experiences.
            And I can’t wait for my third one. 🚀
        </div>
      
    </div>
  )
}

export default Blogdetail
