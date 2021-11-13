import React from 'react'
import style from './Landingpage.module.css'
import landingBG from '../Assets/conifer-1138.png'

const LandingPage = () => {
    return (
        <div className={style.LandingPage}>
            <section className={style.Introduction}>
            <div className = {style.IntroductionContainer}>

            </div>
                <span className={style.IntroductionTitle}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </span>

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
                </div>
            </section>

            <section className={style.Settlers}>
                <img src="" alt="" />
                <div>
                    <span>Title</span>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo inventore optio similique! Ut laborum officiis doloribus culpa harum, distinctio illum totam numquam molestiae esse perspiciatis saepe tempora nulla autem deleniti.
                    </span>
                    <button>
                        learn more
                    </button>
                </div>
            </section>

            <section className={style.Banner}>
                <span>DeFi together.</span>
                <span>Deposit capital, vote on investments, and earn rewards.</span>
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