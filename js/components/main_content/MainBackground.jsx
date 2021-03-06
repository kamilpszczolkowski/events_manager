import React from 'react';

class MainBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actPic: 1,
            picVisible: false
        }
    }

    componentDidMount() {
        //Preloading Images
        let img1 = new Image();
        img1.src = 'images/1.jpg';
        let img2 = new Image();
        img2.src = 'images/2.jpg';
        let img3 = new Image();
        img3.src = 'images/3.jpg';
        let img4 = new Image();
        img4.src = 'images/4.jpg';
        let img5 = new Image();
        img5.src = 'images/5.jpg';

        let countIter = 0;
        this.timeout = setTimeout( ()=> {
            this.setState({
                picVisible: true
            });
            this.interval = setInterval(() => {
                countIter++;
                if (countIter == 10) {
                    this.setState({
                        picVisible: false
                    })
                }
                if (countIter == 11) {
                    countIter = 0;
                    if (this.state.actPic == 5) {
                        this.setState({
                            actPic: 1,
                            picVisible: true
                        })
                    } else {
                        this.setState({
                            actPic: this.state.actPic + 1,
                            picVisible: true
                        })
                    }
                }
            }, 1000)
        },2500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
    }

    render() {
        let blackEl = <div className="blackBackground"></div>
        let element = <div className={"pic" + this.state.actPic}></div>
        return this.state.picVisible ? <div>
                {blackEl}
                {element}
            </div>
            : blackEl;
    }
}

module.exports = MainBackground;