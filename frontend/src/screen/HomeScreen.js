import React from 'react';
import { Link } from 'react-router-dom';
import {Spring} from 'react-spring/renderprops';

function HomeScreen(props) {
    return <>
        <div className="grid-container">
            <div className="row">
                <div className="col-1">
                    <div className="banner">
                        <Spring
                            from={{ opacity: 0, marginTop: -500 }}
                            to={{ opacity: 1, marginTop: 0 }}>
                            {props => <div style={props}>
                                <h1>Lorem Ipsum</h1>
                                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                                    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                                    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                                    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                                </p>    
                            </div>}
                        </Spring>
                        <div className="btn">
                            <Link to="/">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>
                    </div>
                    <div className="col-2">
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default HomeScreen;
