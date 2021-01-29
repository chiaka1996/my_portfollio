import React from 'react';
import '../Css/Testimonial.css';

const Testimonial = (props) => {
    return (
            <div ref={props.refProp} className="testimonial_container">
                <div className="testimonial_header">
                    <span>Testimonials</span>
                    </div>

                <div className="testimonial_grid">

                 {/* verttical testimonials */}
                <div className="testimonial_grid_item1">

                <div className="grid_item1">
                <span>chiaka is a very fast Learner, always willing to learn, picks up new technologies very fast ---<i>Tobi</i></span>
                </div>

                <div className="grid_item1">
                <span>Chiaka is my go to guy when i have a question or bug, He is always willing to help ---<i>Tech Princess</i></span>
                </div>

                </div>

                {/* horizontal testimonials */}
                <div className="testimonial_grid_item2">

                 <div className="grid_item2">
                <span>
                I have been guiding him through his tech journey for a while now, and i must confess, he is very good. ---<i>Ovatone</i>
                </span>
                </div>

                <div className="grid_item2">
                    <span>
                        first met chiaka during HNGi7 Internship, he is a very good team player ---<i>Dro</i>
                    </span>
                </div>
                <div className="grid_item2">
                    <span>
                        Chiaka is the best team lead i ever worked with, Focused and always ready to help. ---<i>Victoria</i>
                    </span>
                </div>
                <div className="grid_item2">
                    <span>
                Worked with chiaka on a project and i was amazed with how fast his mind works. can't wait to work with you again ---<i>Harunna</i>
                </span>
                </div>

                </div>

            </div>
            </div>
    )
}

export default Testimonial;