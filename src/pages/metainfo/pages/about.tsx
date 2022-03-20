import React from 'react'

import tac from '../../../assets/img/tacabout.svg'
import planet from '../../../assets/img/planetabout.svg'

export const About: React.FC = () => {
    return (
        <div className='about'>
            <div className="about__logo">
                <img src={planet} alt="planet" />
                <img src={tac} alt="tac" />
            </div>
            <div className="about__text">
                <p>Al Jazeera is an independent news organisation funded in part by the Qatari government.</p>
                <p>In 2006, Al Jazeera Satellite Network was changed to a public utility, private corporation by a public memorandum
                 and articles of association in accordance with the provisions of Qatar Law No. 21 of 2006, and was re-named “Al Jazeera Media Network”.</p>
                <p>Thus, it is a private corporation established for the public benefit.</p>
                <p>The Board of Directors of Al Jazeera Media Network issues directives, decisions and related regulations.</p>
                <p>
                    Launched in 1996, Al Jazeera Arabic was the first independent news channel in the Arab world dedicated to providing comprehensive news and live debate.
 Al Jazeera English, which was launched in 2006, is part of a growing network comprising more than 10 channels and divisions.</p>
                <p>The network challenged established narratives and gave a global audience an alternative voice, one that put the people
      back at the centre of the news agenda, and quickly made it one of the world’s most influential news networks.</p>
                <p>Each subsidiary in the Al Jazeera Media Network follows the same principles and values that inspire it to be
          challenging and bold, and to provide a voice for the voiceless in some of the world’s most unreported places.</p>
                <p>It’s a responsibility shared by every employee at the Al Jazeera Media Network, from our headquarters to our broadcast centres.
              In more than 70 bureaus around the world, we strive to deliver content that captivates, informs, inspires and entertains</p>
            </div>

        </div>
    )
}
