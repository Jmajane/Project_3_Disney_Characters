import React from 'react'



function About(props) {

    const aboutPicture = "https://wallpaperaccess.com/full/2101913.jpg"
    if (props.bg !== aboutPicture) {
      props.setBG(aboutPicture)
    }

  return (
      
    <main className='text-center'>
        <div>
        <h1 className='text-info display-3 font-weight-bold'>Meeting the Developer</h1>
        <img className="dev" src="https://i.imgur.com/mQF8E3R.jpg" alt="Developer"/>
        <img className="dev" src="https://i.imgur.com/EutEu39.jpg" alt="Developer"/>
            <div>
                <p className='fs-1 text text-warning'>In a galaxy far far away..... A United States Marine Corps veteran who has a 
                passion in software development.  This app is to provide kids the resource to find their favorite disney character.  Having a passion 
                for disney as I grew up this was very enjoyable to bring others that same experience.  Please visit 
                my GitGub for other projects and my linkedin for my contact information.  I hope you enjoy
                this app with all it has to offer.  May the force be with you...
            </p>
            </div>
        </div>

    </main>
  )
}

export default About