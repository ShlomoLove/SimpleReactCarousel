import React from 'react';
import classNames from 'classnames';
import axios from 'axios';
import styles from '../../dist/styles/app.css'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      pictures: [],
      firstPhoto: 0,
      lastPhoto: 0,
      shiftCount: 0,
    }

    this.getItems = this.getItems.bind(this);
    this.upClick = this.upClick.bind(this);
    this.downClick = this.downClick.bind(this);

  }

  componentDidMount () {
    let id = 1
    this.getItems(id)
  }

  getItems(id) {
    axios
      .get(`/api/carousel/pics/${id}`)
      .then (({data}) => {
        this.setState ({
          pictures: data.pictures,
          shiftCount: 0,
          firstPhoto: 0,
          lastPhoto: data.pictures.length > 6 ? 6 : data.pictures.length - 1, 
        })
      })
      // .then(response => {
      // console.log (this.state, response, 'state')
      // })
      .catch(error => console.log (`there was an error: ${error}`))
  }

  upClick (e) {
    if (e) {
      e.preventDefault();
    }
    if (this.state.firstPhoto > 0) {
      this.setState ({
        firstPhoto: this.state.firstPhoto - 1,
        lastPhoto: this.state.lastPhoto - 1,
        shiftCount: this.state.shiftCount + 1,
      })
    }
  }

  downClick (e) {
    if (e) {
      e.preventDefault();
    }
    if (this.state.lastPhoto < this.state.pictures.length) {
      this.setState ({
        firstPhoto: this.state.firstPhoto + 1,
        lastPhoto: this.state.lastPhoto + 1,
        shiftCount: this.state.shiftCount - 1,
      })
    }
  }


  render () {
    return (
      <div>
        <h1>A Simple React Vertical Carousel</h1>

        <div className={styles.outsideContainer}>
          {/* DIV for UP Arrow */}
          <div className={styles.chevron}>
            <i className={classNames(styles.chevronUp, "fas fa-chevron-up")} onClick={this.upClick}></i>
          </div>
          {/* DIV for Slider Container */}
          <div className={styles.sliderContainer}>
            {/* DIV for Inner Photo Thumbnails */}
            <div className={styles.photoSlider}>
              {this.state.pictures.map((image, key) => {
                return (
                  <div className={styles.thumbnail} id={key} key={key} style={{transform:`translate(0, ${this.state.shiftCount * 95}px)`}}>
                    <img className={styles.thumbnailImage} id={key} src={image}/>
                  </div>
                );
              })}

            </div>

          </div>
          {/* DIV for Down Arrow */}
          <div className={styles.chevron}>
            <i className={classNames(styles.chevronDown, "fas fa-chevron-down")} onClick={this.downClick}></i>
          </div>

        </div>

      </div>
    )
  }
}

export default App; 