import React from 'react'
import style from './Landingpage.module.css'
import landingBG from '../Assets/conifer-1138.png';
import SettlerBG from '../Assets/jaconda-60.png';

const LandingPage = () => {
    return (
        <div className={style.LandingPage}>
            {/* Introduction */}

            <section className={style.Introduction}>
                <div className={style.IntroductionTextContainer}>
                    <span className={style.IntroductionTitle}>
                        Community-led
                        Crosschain.
                        DeFi Together.
                    </span>


                    <span className={style.IntroductionText}>
                        Sign up to join our Beta waitlist.
                    </span>

                    <input type="text" className={style.CTAInput} />

                    <div className={style.CTAButtons}>
                        <button className={style.CTAButton}>
                            Learn more
                        </button>

                        <button className={style.CTAButton}>
                            Learn more
                        </button>
                    </div>

                </div>

                <img
                    src={landingBG}
                    alt=""
                    className={style.LandingBg}
                />
            </section>

            {/* Investors */}
            <section className={style.Investors}>
                <div>
                    <span>
                        75 seed investors
                    </span>

                    <span>
                        75 seed investors
                    </span>

                    <span>
                        75 seed investors
                    </span>

                    <span>
                        75 seed investors
                    </span>
                </div>
            </section>

            {/* Settlers */}
            <section className={style.Settlers}>
                <div className={style.SettlersContainer}>
                    <img src={SettlerBG} alt="" className={style.SettlerBG} />
                    <div className={style.SettlersTextContainer}>
                        <span className={style.SettlerTitle}>Settlers</span>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo inventore optio similique! Ut laborum officiis doloribus culpa harum, distinctio illum totam numquam molestiae esse perspiciatis saepe tempora nulla autem deleniti.
                        </span>
                        <button className={style.CTAButton}>
                            Learn more
                        </button>
                    </div>
                </div>
            </section>

            {/* Banner */}

            <section className={style.Banner}>
                <span className={style.BannerTitle}>DeFi together.</span>
                <span className={style.BannerText}>Deposit capital, vote on investments, and earn rewards.</span>
            </section>

            {/* Cards */}

            <section className={style.FeatureCards}>
                <div className={style.FeatureCard}>
                    <span className={style.FeatureText}>
                        Community owned and
                        community managed.
                        Trustless and transparent.
                    </span>

                    <img src={SettlerBG} alt="" className={style.FeatureImage} />
                </div>

                <div className={style.FeatureCard}>
                    <span className={style.FeatureText}>
                        Community owned and
                        community managed.
                        Trustless and transparent.
                    </span>

                    <img src={SettlerBG} alt="" className={style.FeatureImage} />
                </div>

                <div className={style.FeatureCard}>
                    <span className={style.FeatureText}>
                        Community owned and
                        community managed.
                        Trustless and transparent.
                    </span>

                    <img src={SettlerBG} alt="" className={style.FeatureImage} />
                </div>
            </section>

            {/* Team */}
            <section className={style.Team}>
                <span className={style.TeamTitle}>
                    Meet the founding team
                </span>

                <div className={style.TeamMemberContainer}>
                    <div className={style.TeamMember}>
                        <img src="https://thispersondoesnotexist.com/image" alt="" className={style.TeamImage} />
                        <span className={style.TeamMemberName}>James Chadwick</span>
                        <div>
                            <span>link</span>
                            <span>link</span>
                            <span>link</span>
                            <span>link</span>
                        </div>
                    </div>

                    <div className={style.TeamMember}>
                        <img src="https://thispersondoesnotexist.com/image" alt="" className={style.TeamImage} />
                        <span className={style.TeamMemberName}>James Chadwick</span>
                        <div>
                            <span>link</span>
                            <span>link</span>
                            <span>link</span>
                            <span>link</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.Join}>
                <div className={style.JoinTextContainer}>
                    <span className={style.JoinTitle}>
                        How to join
                    </span>
                    <span className={style.JoinText}>
                        Sign up for the Settlers Beta waitlist
                    </span>
                </div>

                <div className={style.JoinInputContainer}>
                    <input type="text" name="" id="" className={style.CTAInput} />
                    <button className={style.CTAButton}>Sign up</button>
                </div>
            </section>

            {/* footer */}
            <footer className = {style.Footer}>
                footer shii
            </footer>
        </div>
    )
}

export default LandingPage;