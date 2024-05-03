import Accordion from "./Accordion";
import FadeInUp from "./FadeInUpWhenVisible";
import ZoomFadeIn from "./ZoomFadeIn";
import Footer from "./footer";

import { motion } from 'framer-motion';

export default function Section2() {



    return (

        <>
            <section

                className="section section-padding mt-[160px]" data-color="#9ac5d3"
            >
                <div className="w-layout-blockcontainer container-small w-container">
                    <div className="section-heading margin-bottom-16-mobile-12 purple-light-1">
                        <h1 className="h2 cream">
                            Built by restaurants,
                            <br />
                            for restaurants
                        </h1>
                    </div>
                    <FadeInUp>
                        <div className="big-banner black margin-bottom-16-mobile-12 shaddow">
                            <div className="big-banner-content">
                                <div className="home-hero-main-content">
                                    <h2 className="h2 cream">Our Mission: </h2>
                                    <h3 className="h3 cream margin-bottom-16">
                                        To Liberate Restaurants from Crazy Fees
                                    </h3>
                                    <p className="typewriter cream">
                                        And give them the marketing tools necessary to succeed in today's
                                        world
                                    </p>
                                </div>
                            </div>
                            <div className="illustration-wrapper">
                                <img
                                    src="images/smiley.png"
                                    loading="lazy"
                                    alt=""
                                    className="smiley-main"
                                />
                            </div>
                        </div>
                    </FadeInUp>


                    <FadeInUp>

                        <div className="w-layout-grid two-blocks-grid margin-bottom-16-mobile-12">
                            <div
                                className="illustration-and-text-block purple-dark shaddow"
                            >
                                <div className="illustration-wrapper" />
                                <div className="home-hero-main-content max-width-480-mobile-400">
                                    <h2 className="h2 cream margin-bottom-16">
                                        It's free for you. Seriously.
                                    </h2>
                                    <p className="typewriter cream">
                                        It's truly free for restaurants to use Hangry. Forever. <br />
                                        <br />
                                        Zero Commissions, Credit Card or Processing Fees. <br />‍<br />
                                        Instead, we charge customers a $1 nominal fee and pass those pesky
                                        credit card fees.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="illustration-and-text-block purple-light-2 shaddow"
                            >
                                <div className="illustration-wrapper" />
                                <div className="home-hero-main-content max-width-480-mobile-400">
                                    <h2 className="h2 matt-black">Fuck the 3rd party fees</h2>
                                    <p className="typewriter matt-black">
                                        Cancel the 3rd party outrageous fees. <br />
                                        <br />
                                        Stop giving 30% of your money away to apps like Grubhub and
                                        Doordash.
                                        <br />
                                        <br />
                                        Pocket all your profits, thank you very much!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </FadeInUp>

                    <FadeInUp>
                        <div className="big-logos-banner shaddow margin-bottom-24">
                            <div className="big-banner-content">
                                <h2 className="h2 matt-black">Deposit more cash</h2>
                            </div>
                            <p className="typewriter matt-black">
                                Our platform is a game-changer: it’s completely free for restaurants,
                                meaning every dollar from every sale stays where it belongs—with you.{" "}
                                <br />‍<br />
                                In our restaurant industry where every penny counts, Hangry is your
                                partner in profit, letting you keep what you make and grow your
                                business on your terms.
                            </p>
                        </div>
                    </FadeInUp>
                    <div className="illustration-wrapper-100">
                        <img
                            src="images/red-arrow.png"
                            loading="lazy"
                            alt=""
                            className="arrow-img"
                        />
                    </div>
                </div>
            </section>
            <section
                data-color="#cd417e"
                className="section section-padding"
            >
                <div className="w-layout-blockcontainer container-small w-container">
                    <div className="section-heading margin-bottom-16-mobile-12 yellow-light shaddow">
                        <h2 className="h2 cream">Ordering app supercharged</h2>
                        <p className="typewriter matt-black">
                            We developed a special algorithm for small restaurants, like mine and
                            yours, to thrive. Hangry is packed with features that drive up sales,
                            encourage repeat business, and increase the average order size.{" "}
                        </p>
                    </div>
                    <div className="w-layout-grid four-blocks-grid margin-bottom-16-mobile-12">
                      <FadeInUp>
                      <div
                            className="icon-and-text-block white shaddow"
                        >
                            <div className="home-hero-main-content max-width-440">
                                <h5 className="h5 matt-black margin-bottom-12">
                                    increase average order size
                                </h5>
                                <p className="typewriter matt">
                                    Automatically increase the average order size with the help of AI.
                                    Designed to subtly help you bump up sales, one order at a time
                                </p>
                            </div>
                        </div>
                      </FadeInUp>
                       <FadeInUp>
                       <div
                            className="icon-and-text-block white shaddow"
                        >
                            <div className="home-hero-main-content max-width-440">
                                <h5 className="h5 matt-black margin-bottom-12">
                                    convert customers to regulars
                                </h5>
                                <p className="typewriter matt">
                                    Our integrated punch card rewards system is designed for
                                    restaurants to encourage repeat visits by rewarding customer
                                    loyalty
                                </p>
                            </div>
                        </div>
                       </FadeInUp>
                       
                       
                      <FadeInUp>
                      <div
                            id="w-node-ac226342-7d5e-9dc2-139b-1ad6af16261e-68f16040"
                            className="icon-and-text-block white shaddow"
                        >
                            <div className="home-hero-main-content max-width-440">
                                <h5 className="h5 matt-black margin-bottom-12">
                                    automated marketing
                                </h5>
                                <p className="typewriter matt">
                                    Automatically send subtle messages to custom tailored segments
                                    based on their ordering behavior to increase order repeat rate
                                </p>
                            </div>
                        </div>
                      </FadeInUp>
                      <FadeInUp>
                      <div
                            id="w-node-_42b6fa44-3838-c04e-da60-3f979a34085a-68f16040"
                            className="icon-and-text-block white shaddow"
                        >
                            <div className="home-hero-main-content max-width-440">
                                <h5 className="h5 matt-black margin-bottom-12">
                                    the Money is in the data
                                </h5>
                                <p className="typewriter matt">
                                    With Hangry, you have access to all the data
                                    <br />
                                    Know exactly where your customers are: how often they come back
                                    and who's who. No censorship.
                                </p>
                            </div>
                        </div>
                      </FadeInUp>
                    </div>
                   <FadeInUp>
                   <div className="big-banner black">
                        <div className="big-banner-content">
                            <div className="home-hero-main-content">
                                <h3 className="h3 cream margin-bottom-16">
                                    destrupting the to-go industry
                                </h3>
                                <p className="typewriter">
                                    Hangry is shaking up the to-go industry by putting power back in
                                    the hands of restaurant owners. Join us in turning the table on
                                    traditional delivery services and keep more profits where they
                                    belong— with you.
                                </p>
                            </div>
                        </div>
                        <div className="illustration-wrapper">
                            <img
                                src="images/Asset-27.png"
                                loading="lazy"
                                alt=""
                                className="smiley-main"
                            />
                        </div>
                    </div>
                   </FadeInUp>
                </div>
            </section>
            <section
                data-color="#f9ede1"
                className="section section-padding"
            >
                <div className="w-layout-blockcontainer container-small w-container">
                    <div className="section-heading margin-bottom-16-mobile-12 green-light-1">
                        <h2 className="h1 matt-black">
                            customers love ordering on hangry.
                        </h2>
                    </div>
                  <FadeInUp>
                  <div className="w-layout-grid two-blocks-grid margin-bottom-16-mobile-12">
                        <div
                            id="w-node-_824c1e36-6165-5ec7-485f-67f367291e0a-68f16040"
                            className="illustration-and-text-block green-dark shaddow"
                        >
                            <div className="home-hero-main-content max-width-480-mobile-400">
                                <h4 className="h2 cream">reward the regulars</h4>
                                <p className="typewriter">
                                    Keep 'em coming back for more!&nbsp;
                                    <br /> <br />
                                    Our built in digital punch card is proven to attract customers and
                                    deliver an unmatched retention rate
                                    <br />
                                    <br />
                                    Using rewards, gamification and human psychology to convert your
                                    customers into loyal Regulars.
                                </p>
                            </div>
                            <div className="illustration-wrapper">
                                <img
                                    src="images/Screenshot-2024-04-11-134113.jpg"
                                    loading="lazy"
                                    sizes="(max-width: 767px) 75vw, (max-width: 991px) 55vw, 296px"
                                    srcSet="images/Screenshot-2024-04-11-134113-p-500.jpg 500w, images/Screenshot-2024-04-11-134113-p-800.jpg 800w, images/Screenshot-2024-04-11-134113.jpg 952w"
                                    alt=""
                                    className="illustation-in-block type-2"
                                />
                            </div>
                        </div>
                        <div
                            id="w-node-_24d0ee85-45d0-08ff-eb15-26333d95e312-68f16040"
                            className="illustration-and-text-block green-light-2 shaddow"
                        >
                            <div className="home-hero-main-content max-width-480-mobile-400">
                                <h4 className="h2 matt-black">frictionless experience UI/UX</h4>
                                <p className="typewriter matt">
                                    Everybody hates passwords
                                    <br />
                                    <br />
                                    Hangry offers swift, secure OTP login—no app required, accessible
                                    from everywhere
                                    <br />‍<br />
                                    Guests can go from craving to checkout in 30 seconds
                                </p>
                            </div>
                            <div className="illustration-wrapper" />
                        </div>
                    </div>
                  </FadeInUp>
                   <FadeInUp>
                   <div className="big-banner white shaddow">
                        <div className="big-banner-content">
                            <div className="home-hero-main-content">
                                <h3 className="h2 matt-black">provide hospitality on the go</h3>
                                <p className="typewriter matt">
                                    Hangry is equipped with direct-to-customer messaging with built in
                                    reward and refund capabilities so you can decide on what's best
                                    for your business. Stop letting 3rd parties refund on your behalf.
                                    <br />
                                    <br />
                                    It’s our little insider secret that turns oops moments, like a
                                    missed item, into a chance to really shine. <br />
                                </p>
                            </div>
                        </div>
                        <div className="illustration-wrapper" />
                    </div>
                   </FadeInUp>
                </div>
            </section>
            <section className="section section-padding">
                <div className="w-layout-blockcontainer container-small w-container">
                    <div className="section-heading margin-bottom-16-mobile-12 black">
                        <h4 className="h2 cream">Keep Local Thriving</h4>
                        <p className="typewriter">
                            By empowering small restaurants with the technology to succeed, we
                            enable them to thrive.
                        </p>
                    </div>
                </div>
                <div className="w-layout-blockcontainer container-small w-container">
                    <div className="w-layout-grid four-blocks-grid margin-bottom-16-mobile-12">
                      <FadeInUp>
                      <div
                            id="w-node-cea8e257-0763-1daa-2034-19beabda2042-68f16040"
                            className="icon-and-text-block white"
                        >
                            <div className="home-hero-main-content max-width-440">
                                <h5 className="h5 margin-bottom-12 matt-black">Delivery</h5>
                                <p className="typewriter matt">
                                    Delivery on your own terms.
                                    <br />‍<br />
                                    Seamlessly integrated integrated with Cut Cats Couriers. <br />
                                    <br />
                                    Automatically dispatches and then notifies customers about the
                                    progress of their order
                                </p>
                            </div>
                        </div>
                      </FadeInUp>
                       <FadeInUp>
                       <div
                            id="w-node-cea8e257-0763-1daa-2034-19beabda204a-68f16040"
                            className="icon-and-text-block white"
                        >
                            <div className="home-hero-main-content max-width-440">
                                <h5 className="h5 margin-bottom-12 matt-black">Pickup</h5>
                                <p className="typewriter matt">
                                    Say goodbye to endless phone calls and streamline your pickup
                                    process with Hangry! <br />
                                    <br />
                                    Our platform notifies your customers the moment their order is
                                    ready, ensuring a seamless pickup experience.
                                    <br />
                                </p>
                            </div>
                        </div>
                       </FadeInUp>
                        <FadeInUp>
                        <div
                            id="w-node-cea8e257-0763-1daa-2034-19beabda2052-68f16040"
                            className="icon-and-text-block white"
                        >
                            <div className="home-hero-main-content max-width-440">
                                <h5 className="h5 margin-bottom-12 matt-black">You're the boss</h5>
                                <p className="typewriter matt">
                                    You call the shots on refunds or making things right for your
                                    customers. <br />
                                    <br />‍<br />
                                    You can choose to give a refund or, even smarter, offer a reward
                                    for their next visit.{" "}
                                </p>
                            </div>
                        </div>
                        </FadeInUp>
                       <FadeInUp>
                       <div
                            id="w-node-cea8e257-0763-1daa-2034-19beabda205a-68f16040"
                            className="icon-and-text-block white"
                        >
                            <div className="home-hero-main-content max-width-440">
                                <h5 className="h5 margin-bottom-12 matt-black">
                                    AI Feedback Assistant
                                </h5>
                                <p className="typewriter matt">
                                    *BETA* Coming Soon
                                    <br />‍<br />
                                    Tailored for the restaurant world, it guides your staff with
                                    expert responses to any comment, turning potential issues into
                                    loyalty-building moments. <br />
                                </p>
                            </div>
                        </div>
                       </FadeInUp>
                    </div>
                   <FadeInUp>
                   <div className="big-banner black">
                        <div className="big-banner-content">
                            <div className="big-banner-icon white">
                                <img
                                    src="images/Headphones.svg"
                                    loading="lazy"
                                    alt=""
                                    className="icon-size-24-mobile-20"
                                />
                            </div>
                            <div className="home-hero-main-content">
                                <h3 className="h3 cream">Made from scratch with love</h3>
                                <p className="typewriter">
                                    Designed with the most advnaced tech stack to improve your
                                    restaurant's chance of success
                                </p>
                            </div>
                        </div>
                        <div className="illustration-wrapper">
                            <img
                                src="images/Illustration-8.svg"
                                loading="lazy"
                                alt=""
                                className="smiley-main"
                            />
                        </div>
                    </div>
                   </FadeInUp>
                    <div className="section-heading margin-bottom-16-mobile-12 yellow-light">
                        <h2 className="h2 matt-black">Curated marketplace</h2>
                        <p className="typewriter matt">
                            Amplify your reach in two powerful ways: Attract local foodies with
                            our tailored discovery algorithm and curated marketplace.
                            <br />
                            <br />
                            As well as integrate our seamless to-go solution right into your
                            website.
                            <br />
                        </p>
                    </div>
                </div>
            </section>
            <section
                id="testimonials"
                className="section section-padding position-relative"
            >
                <div className="w-layout-blockcontainer container-small w-container">
                    <div className="section-heading margin-bottom-16-mobile-12 black">
                        <h4 className="h2 cream">What people are saying</h4>
                    </div>
                    <div className="testimonials-columns-wrapper">
                        <div className="testimonial-column">
                            <ZoomFadeIn>
                            <div className="testimonial">
                                <div className="testimonial-person">
                                    <div className="testimonial-avatar green-light-1" />
                                    <div className="testimonial-person-info">
                                        <div className="semibold-l text-color-white">
                                            Jamie &amp; Alex
                                        </div>
                                        <div className="regular-s text-color-white-opacity-40">
                                            The Cozy Corner Café
                                        </div>
                                    </div>
                                </div>
                                <p className="typewriter">
                                    "Since joining Hangry, our neighborhood cafe has seen a
                                    significant uptick in profits and customer satisfaction. It's
                                    refreshing to work with a platform that truly understands the
                                    needs of restaurateurs."
                                </p>
                            </div>
                            </ZoomFadeIn>
                          <ZoomFadeIn>
                          <div className="testimonial">
                                <div className="testimonial-person">
                                    <div className="testimonial-avatar yellow-light-3" />
                                    <div className="testimonial-person-info">
                                        <div className="semibold-l text-color-white">Chen Li</div>
                                        <div className="regular-s text-color-white-opacity-40">
                                            Dragon Noodle House
                                        </div>
                                    </div>
                                </div>
                                <p className="typewriter">
                                    "I was skeptical at first, but Hangry has proven to be the best
                                    decision we made this year. Our orders have increased, and so have
                                    our margins. Plus, our customers are happier than ever."
                                </p>
                            </div>
                          </ZoomFadeIn>
                           <ZoomFadeIn>
                           <div className="testimonial">
                                <div className="testimonial-person">
                                    <div className="testimonial-avatar blue-light-1" />
                                    <div className="testimonial-person-info">
                                        <div className="semibold-l text-color-white">Emily Brown</div>
                                        <div className="regular-s text-color-white-opacity-40">
                                            <strong>The Green Fork Bistro</strong>
                                        </div>
                                    </div>
                                </div>
                                <p className="typewriter">
                                    "Switching to Hangry.io was a game-changer for our bistro. Not
                                    only have we saved on fees, but we've also built stronger
                                    connections with our customers. It's like having a digital maître
                                    d' that knows our business inside out. Finally, a platform that
                                    lets us focus on what we love—making great food!"
                                </p>
                            </div>
                           </ZoomFadeIn>
                           <ZoomFadeIn>
                           <div className="testimonial">
                                <div className="testimonial-person">
                                    <div className="testimonial-avatar red-light" />
                                    <div className="testimonial-person-info">
                                        <div className="semibold-l text-color-white">
                                            <strong>Liam Russo</strong>
                                        </div>
                                        <div className="regular-s text-color-white-opacity-40">
                                            <strong>Liam &amp; Luca’s Italian Kitchen</strong>
                                        </div>
                                    </div>
                                </div>
                                <p className="typewriter">
                                    "We were skeptical about another delivery service, but Hangry.io
                                    proved us wrong. It’s cost-effective for us and our customers, and
                                    it truly captures the essence of our Italian hospitality. Grazie,
                                    Hangry!"
                                </p>
                            </div>
                           </ZoomFadeIn>
                        </div>
                        <div className="testimonial-column second">
                           <ZoomFadeIn> <div className="testimonial">
                                <div className="testimonial-person">
                                    <div className="testimonial-avatar blue-light-1" />
                                    <div className="testimonial-person-info">
                                        <div className="semibold-l text-color-white">
                                            Maria Rodriguez
                                        </div>
                                        <div className="regular-s text-color-white-opacity-40">
                                            Luigi's Pizza Parlor
                                        </div>
                                    </div>
                                </div>
                                <p className="typewriter">
                                    "Hangry has been a game-changer for our pizzeria. We're saving on
                                    fees, and our customers love the transparency. It feels like we've
                                    taken back control of our business."
                                </p>
                            </div></ZoomFadeIn>
                            <ZoomFadeIn>
                            <div className="testimonial">
                                <div className="testimonial-person">
                                    <div className="testimonial-avatar red-light" />
                                    <div className="testimonial-person-info">
                                        <div className="semibold-l text-color-white">Keith Johnson</div>
                                        <div className="regular-s text-color-white-opacity-40">
                                            Johnson's BBQ Shack
                                        </div>
                                    </div>
                                </div>
                                <p className="typewriter">
                                    "Transitioning to Hangry was smooth, and the impact was immediate.
                                    We've seen a steady increase in orders and customer retention.
                                    It's empowering to keep more of our hard-earned money."
                                </p>
                            </div>
                            </ZoomFadeIn>
                           <ZoomFadeIn>
                           <div className="testimonial">
                                <div className="testimonial-person">
                                    <div className="testimonial-avatar green-light-1" />
                                    <div className="testimonial-person-info">
                                        <div className="semibold-l text-color-white">Jasmine Patel</div>
                                        <div className="regular-s text-color-white-opacity-40">
                                            Sweet Jasmine Bakery
                                        </div>
                                    </div>
                                </div>
                                <p className="typewriter">
                                    "We've seen an increase in regular customers ordering. They love
                                    the app's ease of use and the fact that they're supporting local
                                    businesses with lower fees. It's amazing to feel so connected to
                                    our customers and remedy any issues ourselves."
                                </p>
                            </div>
                           </ZoomFadeIn>
                          <ZoomFadeIn>
                          <div className="testimonial">
                                <div className="testimonial-person">
                                    <div className="testimonial-avatar yellow-light-3" />
                                    <div className="testimonial-person-info">
                                        <div className="semibold-l text-color-white">
                                            Michael Harris
                                        </div>
                                        <div className="regular-s text-color-white-opacity-40">
                                            Caffe Streets
                                        </div>
                                    </div>
                                </div>
                                <p className="typewriter">
                                    "Hangry gave us our customer relationships back. We can now engage
                                    with them directly, offer personalized deals, and receive feedback
                                    in real-time. It's incredible to have that level of interaction
                                    again."
                                </p>
                            </div>
                          </ZoomFadeIn>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-padding">
                <div className="w-layout-blockcontainer container-small w-container">
                    <div className="section-heading margin-bottom-16-mobile-12 black">
                        <h4 className="h2 cream">Dive into our performance metrics</h4>
                    </div>
                    <div className="w-layout-grid four-blocks-grid tablet-two margin-bottom-16-mobile-12">
                       <FadeInUp>
                       <div
                            className="value-block"
                        >
                            <div className="value-content">
                                <div className="large-heading text-color-accent">15%</div>
                            </div>
                            <div className="home-hero-main-content max-width-440">
                                <div className="semibold-l text-color-white max-width-240 margin-bottom-8">
                                    Higher Average Sale
                                </div>
                                <p className="typewriter">
                                    Leverage our sophisticated sales algorithms to boost your revenue
                                    per order.
                                </p>
                            </div>
                        </div>
                       </FadeInUp>
                        <FadeInUp>
                        <div
                            className="value-block"
                        >
                            <div className="value-content">
                                <div className="large-heading text-color-accent">3x</div>
                            </div>
                            <div className="home-hero-main-content max-width-440">
                                <div className="semibold-l text-color-white max-width-240 margin-bottom-8">
                                    Higher Conversion Rate
                                </div>
                                <p className="typewriter">
                                    Our intuitive interface outperforms your website cart, tripling
                                    conversions
                                </p>
                            </div>
                        </div>
                        </FadeInUp>
                       <FadeInUp>
                       <div
                            className="value-block"
                        >
                            <div className="value-content">
                                <div className="large-heading text-color-accent">25%</div>
                            </div>
                            <div className="home-hero-main-content max-width-440">
                                <div className="semibold-l text-color-white max-width-240 margin-bottom-8">
                                    Savings Compared to 3rd Parties
                                </div>
                                <p className="typewriter">
                                    Average savings of $45,000 a year per restaurant location—time to
                                    fill up that piggy bank!
                                </p>
                            </div>
                        </div>
                       </FadeInUp>
                        <FadeInUp>
                        <div
                            className="value-block"
                        >
                            <div className="value-content">
                                <div className="large-heading text-color-accent">90%</div>
                            </div>
                            <div className="home-hero-main-content max-width-440">
                                <div className="semibold-l text-color-white max-width-240 margin-bottom-8">
                                    of customers reorder within 30 days
                                </div>
                                <p className="typewriter">
                                    Our exclusive rewards and marketing strategy enhance customer
                                    retention and loyalty.
                                </p>
                            </div>
                        </div>
                        </FadeInUp>
                    </div>
                </div>
            </section>
            <Accordion/>
            

            <footer className="footer">
                <div className="w-layout-blockcontainer container-small w-container">
                    <div className="footer-content-wrapper">
                        <div className="footer-content">
                            <a
                                href="index.html"
                                aria-current="page"
                                className="footer-logo-wrapper w-inline-block w--current"
                            >
                                <img
                                    src="images/hangry-logo.png"
                                    loading="lazy"
                                    alt=""
                                    className="footer-logo"
                                />
                            </a>
                            <div className="footer-socials-wrapper">
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    className="footer-social w-inline-block"
                                >
                                    <img
                                        src="images/LinkedIn.svg"
                                        loading="lazy"
                                        alt="LinkedIn"
                                        className="icon-size-20"
                                    />
                                </a>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    className="footer-social w-inline-block"
                                >
                                    <img
                                        src="images/Facebook.svg"
                                        loading="lazy"
                                        alt="Facebook"
                                        className="icon-size-20"
                                    />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    className="footer-social w-inline-block"
                                >
                                    <img
                                        src="images/Twitter-X.svg"
                                        loading="lazy"
                                        alt="Twitter (X)"
                                        className="icon-size-20"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="footer-legal">
                            <div className="paragraph">© Hangry 2024, All Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </footer>

        </>

    )
}