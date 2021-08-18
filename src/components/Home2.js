import React from 'react'
import slider_1 from "../img/slider_1.jpg"
import Header from './Header';
function Home2() {
    return (
        <div>
            <Header />

            <div className="probootstrap-search" id="probootstrap-search">
                <a href="#" className="probootstrap-close js-probootstrap-close"><i className="icon-cross" /></a>
                <form action="#">
                    <input type="search" name="s" id="search" placeholder="Search a keyword and hit enter..." />
                </form>
            </div>
            <div className="probootstrap-page-wrapper">
                {/* Fixed navbar */}
                <div className="probootstrap-header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-9 probootstrap-top-quick-contact-info">
                                <span><i className="icon-location2" />Brooklyn, NY 10036, United States</span>
                                <span><i className="icon-phone2" />+1-123-456-7890</span>
                                <span><i className="icon-mail" />info@uicookies.com</span>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 probootstrap-top-social">
                                <ul>
                                    <li><a href="#"><i className="icon-twitter" /></a></li>
                                    <li><a href="#"><i className="icon-facebook2" /></a></li>
                                    <li><a href="#"><i className="icon-instagram2" /></a></li>
                                    <li><a href="#"><i className="icon-youtube" /></a></li>
                                    <li><a href="#" className="probootstrap-search-icon js-probootstrap-search"><i className="icon-search" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="flexslider">
                    <ul className="slides">

                        <li style={{ backgroundImage: 'url(https://www.telegraph.co.uk/content/dam/news/2019/05/28/TELEMMGLPICT000197512103_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg)' }} className="overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2">
                                        <div className="probootstrap-slider-text text-center">
                                            <h1 className="probootstrap-heading probootstrap-animate">Your Bright Future is Our Mission</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{ backgroundImage: `url(https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/12/oxford-1576245233.jpg)` }} className="overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2">
                                        <div className="probootstrap-slider-text text-center">
                                            <h1 className="probootstrap-heading probootstrap-animate">Helping Students Fulfill their Potential</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="probootstrap-section probootstrap-section-colored">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-left section-heading probootstrap-animate">
                                <h2>Discover courses & universities abroad and connect with students studying there!</h2>

                            </div>
                        </div>

                    </div>
                </section>

                <section className="probootstrap-section" id="probootstrap-counter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 probootstrap-animate">
                                <div className="probootstrap-counter-wrap">
                                    <div className="probootstrap-icon">
                                        <i className="icon-users2" />
                                    </div>
                                    <div className="probootstrap-text">
                                        <span className="probootstrap-counter">
                                            <span className="js-counter" data-from={0} data-to={731} data-speed={5000} data-refresh-interval={50}>1</span>
                                        </span>
                                        <span className="probootstrap-counter-label">Members</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 probootstrap-animate">
                                <div className="probootstrap-counter-wrap">
                                    <div className="probootstrap-icon">
                                        <i className="icon-user-tie" />
                                    </div>
                                    <div className="probootstrap-text">
                                        <span className="probootstrap-counter">
                                            <span className="js-counter" data-from={0} data-to={12} data-speed={5000} data-refresh-interval={50}>1</span>
                                        </span>
                                        <span className="probootstrap-counter-label">Experts</span>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-sm-block visible-xs-block" />
                            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 probootstrap-animate">
                                <div className="probootstrap-counter-wrap">
                                    <div className="probootstrap-icon">
                                        <i className="icon-library" />
                                    </div>
                                    <div className="probootstrap-text">
                                        <span className="probootstrap-counter">
                                            <span className="js-counter" data-from={0} data-to={99} data-speed={5000} data-refresh-interval={50}>1</span>%
                                        </span>
                                        <span className="probootstrap-counter-label">Passing to Universities</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 probootstrap-animate">
                                <div className="probootstrap-counter-wrap">
                                    <div className="probootstrap-icon">
                                        <i className="icon-smile2" />
                                    </div>
                                    <div className="probootstrap-text">
                                        <span className="probootstrap-counter">
                                            <span className="js-counter" data-from={0} data-to={100} data-speed={5000} data-refresh-interval={50}>1</span>%
                                        </span>
                                        <span className="probootstrap-counter-label">Student Satisfaction</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="probootstrap-section probootstrap-section-colored probootstrap-bg probootstrap-custom-heading probootstrap-tab-section" style={{ backgroundImage: 'url(img/slider_2.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center section-heading probootstrap-animate">
                                <h3>    Your university may as well decide your future. Join a network of alumni and peers so you can make the best out of this opportunity at hand. Make the best of the only time you are going to be applying to universities. Most people only go through this process once in their lifetime. If done right, your dream university awaits you.
                                </h3>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="probootstrap-section probootstrap-bg-white probootstrap-border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate">
                                <h2>Featured Articles</h2>
                                <p className="lead">Browse through articles that will help you in turning your study abroad dream into reality</p>
                            </div>
                        </div>
                        {/* END row */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="probootstrap-service-2 probootstrap-animate">
                                    <div className="image">
                                        <div className="image-bg">
                                            <img src="https://www.thebalancesmb.com/thmb/iIV7A--elKPnwhB1_-T3gRVfEUM=/1540x1155/smart/filters:no_upscale()/Stocksy_woman-writing-laptop_476082-57ab432d3df78cf459975331.jpg" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <span className="probootstrap-meta">Prashant Kaushik</span>

                                        <h3>Writing a unique SOP</h3><br></br>
                                        <p>Writing a Statement of Purpose, or the essays, is the most important step and perhaps the biggest challenge for students applying to universities abroad. Here's your guide on how to make your SOP standout and win admits for MS.</p>
                                        <p><a href="/article_sop" className="btn btn-primary">Read More</a> </p>
                                    </div>
                                </div>
                                <div className="probootstrap-service-2 probootstrap-animate">
                                    <div className="image">
                                        <div className="image-bg">
                                            <img src="https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg" alt="Free Bootstrap Template by uicookies.com" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <span className="probootstrap-meta">Prashant Kaushik</span>
                                        <h3>Shortlisting Universities for Masters.</h3><br />
                                        <p>Planning to pursue higher studies in the USA or anywhere abroad often gets complicated as one does not know on what basis he/she should select a university. Here's your guide on how to shortlist universities for MS.</p>
                                        <p><a href="#" className="btn btn-primary">Read More</a> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="probootstrap-service-2 probootstrap-animate">
                                    <div className="image">
                                        <div className="image-bg">
                                            <img src="img/img_sm_2.jpg" alt="Free Bootstrap Template by uicookies.com" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <span className="probootstrap-meta"><i className="icon-calendar2" /> July 10, 2017</span>
                                        <h3>Math Major</h3>
                                        <p>Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam quos quis nisi voluptatum architecto rerum error.</p>
                                        <p><a href="#" className="btn btn-primary">Read More</a> </p>
                                    </div>
                                </div>
                                <div className="probootstrap-service-2 probootstrap-animate">
                                    <div className="image">
                                        <div className="image-bg">
                                            <img src="img/img_sm_4.jpg" alt="Free Bootstrap Template by uicookies.com" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <span className="probootstrap-meta"><i className="icon-calendar2" /> July 10, 2017</span>
                                        <h3>English Major</h3>
                                        <p>Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam quos quis nisi voluptatum architecto rerum error.</p>
                                        <p><a href="#" className="btn btn-primary">Read More</a> </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="row" style={{ paddingTop: "50px" }}>
                            <div className="col-md-12 text-center">
                                <p><a href="#" className="btn btn-primary">View all articles</a></p>
                            </div>
                        </div>

                    </div>

                </section>

                <section className="probootstrap-section probootstrap-bg probootstrap-section-colored probootstrap-testimonial" style={{ backgroundImage: 'url(img/slider_4.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate">
                                <h2>Alumni Testimonial</h2>
                                <p className="lead">Sed a repudiandae impedit voluptate nam Deleniti dignissimos perspiciatis nostrum porro nesciunt</p>
                            </div>
                        </div>
                        {/* END row */}
                        <div className="row">
                            <div className="col-md-12 probootstrap-animate">
                                <div className="owl-carousel owl-carousel-testimony owl-carousel-fullwidth">
                                    <div className="item">
                                        <div className="probootstrap-testimony-wrap text-center">
                                            <figure>
                                                <img src="img/person_1.jpg" alt="Free Bootstrap Template by uicookies.com" />
                                            </figure>
                                            <blockquote className="quote">“Design must be functional and functionality must be translated into visual aesthetics, without any reliance on gimmicks that have to be explained.” <cite className="author"> — <span>Mike Fisher</span></cite></blockquote>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="probootstrap-testimony-wrap text-center">
                                            <figure>
                                                <img src="img/person_2.jpg" alt="Free Bootstrap Template by uicookies.com" />
                                            </figure>
                                            <blockquote className="quote">“Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, they just saw something. It seemed obvious to them after a while.” <cite className="author"> —<span>Jorge Smith</span></cite></blockquote>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="probootstrap-testimony-wrap text-center">
                                            <figure>
                                                <img src="img/person_3.jpg" alt="Free Bootstrap Template by uicookies.com" />
                                            </figure>
                                            <blockquote className="quote">“I think design would be better if designers were much more skeptical about its applications. If you believe in the potency of your craft, where you choose to dole it out is not something to take lightly.” <cite className="author">— <span>Brandon White</span></cite></blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END row */}
                    </div>
                </section>
                <section className="probootstrap-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate">
                                <h2>Why use GradSchoolHunt.com?</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="service left-icon probootstrap-animate">
                                    <div className="icon"><i className="icon-checkmark" /></div>
                                    <div className="text">
                                        <h3>Shortlist Universities</h3>
                                        <p>Our experts will guide you in the process of finding best universities that meet your requirements</p>
                                    </div>
                                </div>
                                <div className="service left-icon probootstrap-animate">
                                    <div className="icon"><i className="icon-checkmark" /></div>
                                    <div className="text">
                                        <h3>View Decisions</h3>
                                        <p>You can view profiles of various applicants that have applied to your dream university along with the decision that they got.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="service left-icon probootstrap-animate">
                                    <div className="icon"><i className="icon-checkmark" /></div>
                                    <div className="text">
                                        <h3>Its Free!</h3>
                                        <p>Becoming a part of the family is free. You dont have to pay anything to use our services.</p>
                                    </div>
                                </div>
                                <div className="service left-icon probootstrap-animate">
                                    <div className="icon"><i className="icon-checkmark" /></div>
                                    <div className="text">
                                        <h3>Join the community</h3>
                                        <p>You are not alone! Join the community to network with aspirants who are on same boat.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* END row */}
                    </div>
                </section>
                <section className="probootstrap-cta">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="probootstrap-animate" data-animate-effect="fadeInRight">Join the community now!</h2>
                                <a href="/signup" role="button" className="btn btn-primary btn-lg btn-ghost probootstrap-animate" data-animate-effect="fadeInLeft">Register</a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="probootstrap-footer probootstrap-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="probootstrap-footer-widget">
                                    <h3>About The School</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident suscipit natus a cupiditate ab minus illum quaerat maxime inventore Ea consequatur consectetur hic provident dolor ab aliquam eveniet alias</p>
                                    <h3>Social</h3>
                                    <ul className="probootstrap-footer-social">
                                        <li><a href="#"><i className="icon-twitter" /></a></li>
                                        <li><a href="#"><i className="icon-facebook" /></a></li>
                                        <li><a href="#"><i className="icon-github" /></a></li>
                                        <li><a href="#"><i className="icon-dribbble" /></a></li>
                                        <li><a href="#"><i className="icon-linkedin" /></a></li>
                                        <li><a href="#"><i className="icon-youtube" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-md-push-1">
                                <div className="probootstrap-footer-widget">
                                    <h3>Links</h3>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Courses</a></li>
                                        <li><a href="#">Teachers</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="probootstrap-footer-widget">
                                    <h3>Contact Info</h3>
                                    <ul className="probootstrap-contact-info">
                                        <li><i className="icon-location2" /> <span>198 West 21th Street, Suite 721 New York NY 10016</span></li>
                                        <li><i className="icon-mail" /><span>info@domain.com</span></li>
                                        <li><i className="icon-phone2" /><span>+123 456 7890</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* END row */}
                    </div>
                    <div className="probootstrap-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 text-left">
                                    <p>© 2017 <a href="https://uicookies.com/">uiCookies:Enlight</a>. All Rights Reserved. Designed &amp; Developed with <i className="icon icon-heart" /> by <a href="https://uicookies.com/">uicookies.com</a></p>
                                </div>
                                <div className="col-md-4 probootstrap-back-to-top">
                                    <p><a href="#" className="js-backtotop">Back to top <i className="icon-arrow-long-up" /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* END wrapper */}
        </div>
    );
}

export default Home2
