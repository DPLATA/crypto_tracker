import React from 'react'
import '../css/COMMUNITY_STYLES.css'
import { FaTwitterSquare, FaGithub, FaReddit } from 'react-icons/fa'


function SINGLE_COIN_COMMUNITY( { site, github, explorers, twitter, reddit }) {

    const findExplorer = (str) => {
        let end = 0
        let col = /:/
        let domain = [/.com/,  /.io/, /.info/, /.org/, /.net/, /.link/]
        let start = str.search((col)) + 3
        for(let i = 0; i <= domain.length; i++) {
            let counter = str.search(domain[i]);
            if(counter > end) {
                end = counter
            }
        }
        let tag = str.slice(start, end);
        return tag
    }

    const findSite = (str) => {
        let w = /www/
        let col = /:/
        let start = 0
        let end = 0
        let domain = ['.com', '.org', '.to', '.network', '.link']
        if(str.search(w) !== -1) {
            start = str.search(w) + 4
        } else {
            start = str.search(col) + 3  
        }


        for(let i = 0; i <= domain.length; i++) {
            let counter = str.search(domain[i]);
            if(counter > end) {
                end = counter
            } 
        }

        site = str.slice(start, end + 4)
        if(site.endsWith('/')) {
            site = site.slice(0, -1)
        }
        
        return site;
    }

    return (
        <div className='links'>
            <div className='comm-block'>
                    <div className='tag'>Explorers</div>
                    <div className='anchor'>
                        {explorers.map(exp => 
                            exp.length > 2 && (
                            <p key={exp}> <a href={exp}> {findExplorer(exp)} </a></p> 
                            )
                        )}
                    </div>  
            </div>
            <div className='comm-block'>
                <div className='tag'>Website</div>
                <div className='anchor'>
                    <p><a href={site}>{findSite(site)}</a></p>
                </div>               
            </div>
            <div className='comm-block'>
                <div className='tag'>Community</div>
                <div className='anchor'>
                    <p><a href={reddit}> Reddit <FaReddit className= 'icon' /> </a></p>
                    <p><a href={`https://www.twitter.com/${twitter}`}> Twitter <FaTwitterSquare className= 'icon' /> </a></p>
                </div>
            </div>
            <div className='comm-block'>
                <div className='tag' >Source Code</div>
                <div className='anchor'>
                    <p><a href={github}>GitHub <FaGithub className= 'icon' /></a></p>
                </div>
            </div>
        </div>
    )
}

export default SINGLE_COIN_COMMUNITY
