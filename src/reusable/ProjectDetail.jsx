import {React , useEffect} from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import Title from "./Title";
const ProjectDetail = () => {
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
  const { id } = useParams();
  return (
    <div className="w-full h-full py-10 flex flex-col-reverse md:flex-row justify-between gap-10">
      {/* main content case studies */}
      <div className="flex-col w-full justify-between">
        {/* heading for case studies  */}
        <div className="text-box flex-col">
          <Title heading="Mitho Achar - Nepali Authentic Achar" />
          <p>Making Achar selling best at it</p>
        </div>
        {/* contents  */}
        <div className="flex-col text-box w-full h-full mt-10 ">
          <div className="flex  h-70 bg-blue-500 w-full"></div>
          <div className="flex-col mt-5">
            <Title heading={"About the Project"} />
            <p className="mb-5">
              GiveHub is a fintech platform connecting individual donors with
              verified nonprofits and NGOs. The challenge was designing an
              interface that could communicate trust and transparency in the
              sensitive philanthropic space. We developed both web and mobile
              applications with integrated verification systems, real-time
              impact dashboards, and donor journey optimization. The platform
              increased donation completion rates by 58% and donor satisfaction
              scores by 71% within three months of launch.
            </p>
            <Title heading={"Problem"} />
            <p className="mb-5">
              Online donation platforms faced significant trust barriers: donors
              feared funds wouldn't reach intended recipients, organizations
              lacked verifiable credentials, users couldn't see concrete impact
              from donations, lack of transparency in fund allocation created
              skepticism, and the donation process felt transactional rather
              than meaningful. Industry data showed 62% of potential donors
              abandoned platforms due to trust concerns. Users frequently
              requested donation receipts, fund allocation details, and specific
              project outcomes—but original platforms provided minimal
              information.
            </p>
            <Title heading={"Challenges"} />
            <p className="mb-5">
              We implemented a comprehensive verification system integrated into
              the visual identity: verified organization badges, transparent fee
              structures displayed upfront, and detailed impact tracking
              dashboards. The methodology involved stakeholder interviews with
              30 nonprofits and 200+ donors, competitive analysis of
              international donation platforms, and extensive prototyping of
              trust-building interface elements. We designed a real-time impact
              page showing exactly how donations were deployed, created visual
              fund allocation breakdowns, and built a donor verification system
              to reassure organizations. The information architecture
              prioritized transparency—no hidden fees, no surprises, all
              information available without clicking through multiple screens.
            </p>
            <Title heading={"Project Timeline"} />
            <p className="mb-5">
              Discovery & Stakeholder Research (Weeks 1–3): Interviews with
              nonprofits and donors, competitive benchmarking, regulatory
              requirements review. Trust System Design (Weeks 4–6): Verification
              framework design, badge systems, transparency standards
              documentation. Platform Architecture & Wireframing (Weeks 7–9):
              Core flows for donors and nonprofit admins, real-time data
              visualization planning. High-Fidelity Design (Weeks 10–13): Visual
              design system, donation flows, nonprofit admin dashboards, impact
              pages. Testing & Optimization (Weeks 14–15): Usability testing
              with 80+ donors, nonprofit feedback implementation, A/B testing
              final flows.
            </p>
            <div className="flex  h-70 bg-blue-500 w-full mb-5"> Image</div>
            <Title heading={"Sketch"} />
            <p className="mb-5">
              Initial sketches focused on visually conveying trust and
              transparency. Concepts explored badge placement, verification
              indicators, and clear fund allocation visuals. Pie charts were too
              complex, while bar charts proved clearer and progress circles more
              modern but less precise. Transparent fee placement surprisingly
              boosted completion rates as users valued honesty. Impact page
              sketches used timelines to show donation effects over time,
              revealing donors preferred seeing their direct impact rather than
              generic metrics.
            </p>
            <div className="flex  h-70 bg-blue-500 w-full mb-5"> Image</div>
            <Title heading={"Style Guide"} />
            <p className="mb-5">
              The visual identity emphasized trust, transparency, and social
              impact. A green (#2ECC71) palette symbolized growth, paired with
              earthy browns and clean grays for balance and readability. Red
              (#E74C3C) was used only for urgent alerts. Nunito, a friendly
              sans-serif, maintained approachability and credibility. Custom
              icons of hands, hearts, and growth humanized the brand, while
              verified badges and transparent fee displays reinforced trust.
              Generous spacing enhanced clarity and readability.
            </p>
            <div className="flex  h-70 bg-blue-500 w-full mb-5"> Image</div>
            <Title heading={"Wireframe & User flow"} />
            <p className="mb-5">
              Core wireframes defined journeys for donors and nonprofit admins,
              focusing on transparency at every step—organization selection,
              fund overview, donation, fee display, and impact tracking.
              Nonprofit dashboards managed verification, campaigns, and fund
              allocation. A transparency-first design made all data visible by
              default, improving trust and repeat giving. Testing with 40 users
              showed clear fee disclosure increased donations.
            </p>
            <div className="flex  h-70 bg-blue-500 w-full mb-5"> Image</div>
          </div>
        </div>
      </div>

      {/* for_sideLine content */}
      <div className="flex-col bg-blue-500 text-white lg:w-1/6  h-full py-10 px-5 gap-10 lg:sticky top-5  rounded-xs ">
        <div className="flex-col border-b-2 border-white">
          <h2 className="text-white">Industry</h2>
          <p className="font-bold text-xl">{"Grocery"}</p>
        </div>
        <div className="flex-col border-b-2 border-white">
          <h2 className="text-white">Category</h2>
          <p className="font-bold text-xl">{"Branding & Web"}</p>
        </div>
        <div className="flex-col border-b-2 border-white">
          <h2 className="text-white">Timeline</h2>
          <p className="font-bold text-xl">{"2 Months"}</p>
        </div>
        <div className="flex">
            <div className="flex mt-10 justify-center">
          <ul className='flex gap-6 text-2xl lg:text-2xl justify-center text-white'>
            <li><a target='_blank' href="https://www.facebook.com/manjil.aryal.307027/"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a target='_blank' href="https://www.instagram.com/ma_manjil/"><i className="fa-brands fa-square-instagram"></i></a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/manzeel-aryal/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a target='_blank' href="https://github.com/User-manjil"><i className="fa-brands fa-github"></i></a></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
