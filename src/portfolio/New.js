import React from 'react';
const data = [
    {
      'name': 'Todolist',
      'img': 'https://unsplash.it/500/400?image=1078',
      'link': 'https://codepen.io/Kevin_barfleur/pen/PmxxWB',
      'techno': 'React JS'
    },
    {
      'name': 'Camper Leaderboard',
      'img': 'https://unsplash.it/500/400?image=1062',
      'link': 'https://codepen.io/Kevin_barfleur/pen/jmemKJ',
      'techno': 'React JS'
    },
    {
      'name': 'Markdown Previewer',
      'img': 'https://unsplash.it/500/400?image=1042',
      'link': 'https://codepen.io/Kevin_barfleur/pen/NjOqoJ',
      'techno': 'React JS'
    },
    {
      'name': 'Quotes Generator',
      'img': 'https://unsplash.it/500/400?image=1025',
      'link': 'https://codepen.io/Kevin_barfleur/pen/WjgVqz',
      'techno': 'React JS'
    },
    {
      'name': 'Simon Game',
      'img': 'https://unsplash.it/500/400?image=1021',
      'link': 'https://codepen.io/Kevin_barfleur/pen/PmNNpO',
      'techno': 'Javascript'
    },
    {
      'name': 'Pomodoro Clock',
      'img': 'https://unsplash.it/500/400?image=1002',
      'link': 'https://codepen.io/Kevin_barfleur/pen/bqRbpo',
      'techno': 'Javacript'
    },
    {
      'name': 'JS Calculator',
      'img': 'https://unsplash.it/500/400?image=998',
      'link': 'hhttps://codepen.io/Kevin_barfleur/pen/ygWyNL',
      'techno': 'HTML5 / CSS3 / JavaScript'
    },
    {
      'name': 'Snake',
      'img': 'https://unsplash.it/500/400?image=983',
      'link': 'https://codepen.io/Kevin_barfleur/pen/KmXgwW',
      'techno': 'Javascript / Canvas'
    },
    {
      'name': 'Tic Tac Toe',
      'img': 'https://unsplash.it/500/400?image=964',
      'link': 'https://codepen.io/Kevin_barfleur/pen/ZKERgo',
      'techno': 'Javascript'
    },
    {
      'name': 'Show the local Weather',
      'img': 'https://unsplash.it/500/400?image=959',
      'link': 'https://codepen.io/Kevin_barfleur/pen/OWvpNK',
      'techno': 'JS / Meteo API'
    },
    {
      'name': 'witch.tv JSON API',
      'img': 'https://unsplash.it/500/400?image=954',
      'link': 'https://codepen.io/Kevin_barfleur/pen/egQrOr',
      'techno': 'Javascript / Twitch API'
    },
    {
      'name': 'Wikipedia Viewer',
      'img': 'https://unsplash.it/500/400?image=985',
      'link': 'https://codepen.io/Kevin_barfleur/pen/MJPZmz',
      'techno': 'JS / Wikipedia API'
    }
  ]
  
  class Index extends React.Component {
    render () {
      return (
        <div>
          <Header />
          <App />
          <Footer />
        </div>
      )
    }
  }
  
  
  class App extends React.Component {
    constructor () {
      super()
  
      this.state = {
        works: []
      }
    }
  
    componentWillMount () {
      this.loadWork()
    }
  
    loadWork () {
      const works = []
      data.map(item => works.push(item))
      this.setState({ works })
      setTimeout(() => {
        console.log(this.state)
      }, 2000)
    }
  
    render () {
      const cards = this.state.works.map((card, index) => <div className='card'><Works
        cardName={card.name}
        cardImg={card.img}
        cardTechno={card.techno}
        cardLink={card.link}
        key={index} /></div>)
  
      return (
        <div>
          <div className='cardHolder'>
            <h3 className='myWorks'>My <mark className='markRed'>Works</mark></h3>
            { cards }
          </div>
          <div className='skillHolder'>
            <i class='icon-alpinelinux' />
          </div>
        </div>
      )
    }
  }
  
  class Header extends React.Component {
    constructor () {
      super()
  
      this.state = {
        text: "Hi, i'm Ismail. A 1JavaScript2 developer.",
        print: ''
      }
    }
  
    componentWillMount () {
      this.writeText()
    }
  
    writeText () {
      const formatedText = this.state.text.split('')
      let print = ''
  
      const loop = setInterval(() => {
        if (formatedText.length >= 1) {
          if (formatedText[0] === '1') {
            print += '<mark>'
            formatedText.shift()
          } else if (formatedText[0] === '2') {
            print += '</mark>'
            formatedText.shift()
          } else {
            print += formatedText.shift()
            this.setState({ print })
          }
        } else { clearInterval(loop) }
      }, 90)
    }
  
    render () {
      return (
        <div>
          <div className='container-header'>
            <div className='typing-text'>
              <h2 dangerouslySetInnerHTML={{__html: this.state.print}} />
            </div>
            <p>Welcome on my Portfolio</p>
          </div>
          <div className='about'>
            <div className='photo'>
              <img src='https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/166436280_2777420992475490_5807182560647393484_n.jpg?_nc_cat=105&_nc_map=control&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=mopQtkhz3_kAX9mV576&_nc_ht=scontent.fdac116-1.fna&oh=756c15e63ed2034a5a684391a00e67e7&oe=60AC2EF5' style={{height:'500px', width:'500px', marginTop:'4rem'}} alt='picture about me' />
            </div>
            <div className='text'>
              <h3>About <mark>me.</mark></h3><br /><br />
              <p>Adipisicing elit. Earum sunt alias voluptates blanditiis facere placeat quibusdam nihil est temporibus, aspernatur, culpa iste laborum odio incidunt eius tempora? Cum minus, maiores?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ad magnam mollitia distinctio numquam dolorem, minus facilis qui explicabo nobis eos eius aut, praesentium et repellendus vero animi, amet perspiciatis.</p>
              <br />
              <p>Aspernatur ad magnam mollitia distinctio numquam dolorem :</p>
              <br />
              <ul>
                <li>Voluptates blanditiis facere.</li>
                <li>Adipisicing elit. Aspernatur ad magnam.</li>
                <li>Blanditiis facere placeat quibusdam nihil est temporibus.</li>
                <li>Earum sunt alias voluptates.</li>
              </ul>
              <br />
              <p>Adipisicing elit. Earum sunt alias voluptates blanditiis facere placeat quibusdam nihil est temporibus, aspernatur, culpa iste laborum odio incidunt eius tempora? Cum minus, maiores?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ad magnam mollitia distinctio numquam dolorem, minus facilis qui explicabo nobis eos eius aut, praesentium et repellendus vero animi, amet perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ad magnam mollitia distinctio numquam dolorem, minus facilis qui explicabo nobis eos eius aut, praesentium et repellendus vero animi, amet perspiciatis.</p>
            </div>
          </div>
        </div>
      )
    }
  }
  
  class Footer extends React.Component {
    render () {
      return (
        <div className='container-footer'>
          <p>Made with Rhum & React in Guadeloupe</p>
        </div>
      )
    }
  }
  
  class Works extends React.Component {
    render () {
      return (
        <div>
          <a href={this.props.cardLink} target='_blank'>
            <img src={this.props.cardImg} alt={this.props.cardName} />
            <div className='info'>
              <h4> { this.props.cardName } </h4>
              <br />
              <br />
              <p> { this.props.cardTechno } </p>
            </div>
          </a>
        </div>
      )
    }
  }
  
 export default Index;