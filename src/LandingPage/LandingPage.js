import React from 'react'
import style from './Landingpage.module.css'
import landingBG from '../Assets/conifer-1138.png';
import SettlerBG from '../Assets/conifer-1138.png';

const LandingPage = () => {
    return (
        <div className={style.LandingPage}>
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

            <section className={style.Banner}>
                <span className={style.BannerTitle}>DeFi together.</span>
                <span className={style.BannerText}>Deposit capital, vote on investments, and earn rewards.</span>
            </section>

            <section className={style.FeatureCards}>
                <div>
                    <span>
                        Community owned and
                        community managed.
                        Trustless and transparent.
                    </span>

                    <img src="" alt="" />
                </div>
            </section>


            <section>
                Meet the founding team

                <div>
                    <img src="" alt="" />
                    <span>Name name</span>
                    <div>
                        link
                    </div>
                </div>
            </section>

            <section>
                <span>
                    How to join
                </span>
                <span>
                    Sign up for the Settlers Beta waitlist
                </span>

                <input type="text" name="" id="" />
                <button>Sign up</button>
            </section>

            <footer>
                footer shii
            </footer>
        </div>
    )
}

export default LandingPage;