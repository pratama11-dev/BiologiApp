import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function HomeScreen(props) {

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
      

    return <>
        <div>
            <div className="row">
                <div className="col-1">
                    <div className="banner">
                        <h1>Virtual Lab<span> Biology</span></h1>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>                          
                        <div className="btn">
                            <Link to="/choose">
                                Coba Sekarang!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="container">
                {/* <div className="topik">
                    <div className="tittle">
                        <h1>Topick</h1>
                    </div>
                    <div className="col-2">
                        <div className="judul">
                            <h2>Lorem Ipsum</h2>
                        </div>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>
                        <div className="btnRead">Read More</div>
                    </div>
                    <div className="col-2">
                        <div className="judul">
                            <h2>Lorem Ipsum</h2>
                        </div>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>
                        <div className="btnRead">Read More</div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
}

export default HomeScreen;
