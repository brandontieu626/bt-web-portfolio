const Description = () => {
  const descriptionStyle={
    // display:'flex',
    // wordWrap:'break-word',
    // height:"400px",
    // width:"750px",
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize:'20px'
  }
  return (
    <div style={descriptionStyle}>
      <p>Hey, I'm Brandon. I'm a recent computer science graduate from the University of California, Irvine looking to get started in tech.</p>
      <br/>
      <p>
        At the moment, i'm actively searching for software engineering entry level or internship positions to gain industry experience! 
      </p>
      <br/>
      <p>
        Post-grad, i've been working on individual projects and self-studying full stack development.
        Currently, i'm working through Full Stack Open 2022 learning technologies like React, Node, and MongoDB.
      </p>
      <br/>
      <p>
        Outside of programming, I enjoy reading good mystery books, playing Valorant, going to the gym, and listening to rap and k-pop! <br/>(My favorite group is LE SSERAFIM!)
      </p>
    </div>
  )
}

export default Description;