const btn_nextSlide = document.querySelector('#nextSlide');
const btn_previousSlide = document.querySelector('#previousSlide');
const slider = document.querySelector('.slider');
    const {width: sliderWidth} = window.getComputedStyle(slider);
    const sliderProps = {
        width: parseInt(sliderWidth),
        scroll: 0,
    }
const contentSlider = document.querySelector('.content');
    const {width: contentSliderWidth} = window.getComputedStyle(contentSlider);
    const contentSliderProps = {
        width: parseInt(contentSliderWidth),
    }




function controlSlider( {target: {id}} ) {
    switch(id) {
        case 'nextSlide': {
            if((sliderProps.scroll + sliderProps.width)<contentSliderProps.width) {
                slider.scrollLeft += sliderProps.width;
                sliderProps.scroll += sliderProps.width;
            }
            break;
        }
        case 'previousSlide': {           
            slider.scrollLeft -= sliderProps.width;
            sliderProps.scroll -= sliderProps.width;
            break;
        }
        default:
            break;
    }
}

btn_nextSlide.addEventListener('click', controlSlider);
btn_previousSlide.addEventListener('click', controlSlider);