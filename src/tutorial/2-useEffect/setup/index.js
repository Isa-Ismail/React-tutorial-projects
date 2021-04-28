import React , {useState,useEffect} from 'react'
import Grid from './grid'
import Project from './Projects'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
function Index() {
    return (
        <div>
            <div style={{ textAlign: 'left', backgroundColor: ''}}>
            
                <nav style={{ backgroundColor: '', display:'flex', color:'var(--clr-primary-10)' }}>
                
                <a style={{color:'var(--clr-primary-1)'}} href="https://github.com/Isa-Ismail"><button className='btn' style={{marginLeft:'60rem'}}><GitHubIcon/></button></a>
                <a style={{color:'var(--clr-primary-1)'}} href="https://www.facebook.com/profile.php?id=100006228497535"><button className='btn' ><FacebookIcon/></button></a>
                <a style={{color:'var(--clr-primary-1)'}} href="https://www.instagram.com/fahim_audetore/?hl=en"><button className='btn' ><InstagramIcon/></button></a>
                <a style={{color:'var(--clr-primary-1)'}} href=""><button className='btn' ><EmailIcon/></button></a>
                </nav>
                <div style={{marginTop:'1rem', display:'flex'}}>
                <div>
                <img src='https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/166436280_2777420992475490_5807182560647393484_n.jpg?_nc_cat=105&_nc_map=control&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG311t1ZdTUBEvcZprGYXQV8eeBxKAaHRDx54HEoBodEMeXbpSOcISLTzBQ3T2ucV1WvLbcbfeDrmSkS03OI7Fl&_nc_ohc=_LAN2-mcuKMAX9Q8Poc&_nc_ht=scontent.fdac116-1.fna&oh=857249e17d00a3f7661f5ee13aa751be&oe=60A05175' style={{ borderRadius: '50%', height: '220px', width: '220px' }} />
                <h2 style={{}}>Isa Ismail<h4>nick name: Fahim</h4></h2>
                
                </div>
                <div style={{marginLeft:'12rem'}}>
                <h2 style={{ textAlign: 'center',marginTop:'9rem' }}>React Developer</h2>
                <br></br>
                <h4 style={{marginLeft:'4rem'}}>Greetings, I am Ismail. I am a React web developer. I am passionate about new technologies and innovation. I am an undergraduate BSc student of Information Communication Tech.</h4>
               
            </div>
                </div>
                <br></br><br></br>
            </div>
            <br></br><br></br>
            <section>
                <h3>Web development skills and frameworks I use:</h3>
                <br></br><br></br>
                <Grid />
                <div>
                    <h3>This link below is my certification from Freecodecamp for completing advanced Javascript :</h3><br></br>
                    <a href='https://freecodecamp.org/certification/ninjaismail/javascript-algorithms-and-data-structures'>Link here</a><br></br>
                    <a href='https://freecodecamp.org/certification/ninjaismail/javascript-algorithms-and-data-structures'>
                        <img src='https://www.freecodecamp.org/news/content/images/2019/11/fcc_ghost_publication_cover.png' alt='' style={{height:'300px', width:'600px'}} />
                    </a>
                    <br></br><br></br><br></br><br></br>
                    <h2>Project Showcase :</h2>
                    <h4>(N.B: I completed all these projects using React framework)</h4>
                    <br></br>
                    <Project/>
                    <br></br>
                </div>
            </section>
        </div>
    )
}

export default Index;
