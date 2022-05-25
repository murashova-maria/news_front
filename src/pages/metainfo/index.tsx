import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Tabs } from './Tabs/tabs'

import { About } from './pages/about'
import { Cookies } from './pages/cookies'
import { Terms } from './pages/terms'
import { Contact } from './pages/contact'

export const Metainfo: React.FC = () => {

    const path = useLocation().pathname

    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')

    useEffect(() => {
        switch (path) {
            case '/about':
                setTitle('About Us')
                setContent('about')
                break
            case '/contact':
                setTitle('Contact Us')
                setContent('contact')
                break
            case '/terms':
                setTitle('Terms of use')
                setContent('terms')
                break
            case '/cookies':
                setTitle('Privacy Policy')
                setContent('cookies')
                break
        }
    }, [path])


    return (
        <div className='metainfo'>
            <Tabs />
            <div className="metainfo__content">
                <div className="metainfo__content_title">
                    {title}
                </div>

                {content === 'about' && <About />}
                {content === 'contact' && <Contact />}
                {content === 'terms' && <Terms />}
                {content === 'cookies' && <Cookies />}
            </div>
        </div>
    )
}
