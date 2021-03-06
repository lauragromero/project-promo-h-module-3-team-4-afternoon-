import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';

const Cardpreview = props => {
    const { nameCard, jobCard, phoneCard, emailCard, linkedinCard, githubCard, paletteValue, fontValue } = props;

    const selectDesign = (props) => {
        if (paletteValue === '4') {
            return 'design-color4'
        }
        if (paletteValue === '1') {
            return 'design-color1'
        }
        if (paletteValue === '2') {
            return 'design-color2'
        }
        if (paletteValue === '3') {
            return 'design-color3'
        }
    }

    const selectFont = (props) => {
        if (fontValue === '1') {
            return 'design-font1'
        }
        if (fontValue === '2') {
            return 'design-font2'
        }
        if (fontValue === '3') {
            return 'design-font3'
        }
    }

    return (
        <section className="preview">
            <div className={`preview_card-container ${selectDesign()}`}>
                <button id="buttonReset" className="reset" onClick={props.handleReset}><i className="far fa-trash-alt"></i>reset</button>
                <div className="preview_card">
                    <div className={`preview_card-head ${selectFont()}`}>
                        <h2 className="preview_card-name">{nameCard === '' ? 'Nombre Apellido' : nameCard}</h2>
                        <h3 className="preview_card-job">{jobCard === '' ? 'Front-end Developer' : jobCard}</h3>
                    </div>
                    <div className="preview_card-image js__profile-image">
                        <Profile
                            photo={props.photo}
                        />
                    </div>
                    <ul className="preview_card-social">
                        <li className={`item item_phone ${(phoneCard) ? '' : 'opacity'}`}>
                            <a className="item_btn" id="phone-icon" href={"tel:" + phoneCard}>
                                <i className="fas fa-mobile-alt" id="preview_card-icons"></i>
                            </a>
                        </li>
                        <li className={`item item_email ${(emailCard) ? '' : 'opacity'}`}>
                            <a className="item_btn" id="email-icon" href={"mailto:" + emailCard}>
                                <i className="far fa-envelope" id="preview_card-icons"></i>
                            </a>
                        </li>
                        <li className={`item item_linkedin ${(linkedinCard) ? '' : 'opacity'}`}>
                            <a className="item_btn" id="linkedin-icon" target="_blank" href={"https://www.linkedin.com/in/" + linkedinCard}>
                                <i className="fab fa-linkedin-in" id="preview_card-icons"></i>
                            </a>
                        </li>
                        <li className={`item item_github ${(githubCard) ? '' : 'opacity'}`}>
                            <a className="item_btn" id="github-icon" target="_blank" href={"https://github.com/" + githubCard}>
                                <i className="fab fa-github-alt" id="preview_card-icons"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    );
}
Cardpreview.propTypes = {
    nameCard: PropTypes.string,
    jobCard: PropTypes.string,
    phoneCard: PropTypes.string,
    emailCard: PropTypes.string,
    linkedinCard: PropTypes.string,
    githubCard: PropTypes.string,
    paletteValue: PropTypes.string,
    fontValue: PropTypes.string,
}
export default Cardpreview;