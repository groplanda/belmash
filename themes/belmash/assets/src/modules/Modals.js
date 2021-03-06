const Modals = () => {
    let btnPressed = false;

    function bindModal(triggerSelectot, modalSelector, closeSelector, destroyTrigget = false) {

        try {
            const trigger = document.querySelectorAll(triggerSelectot),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            window = document.querySelectorAll('[data-modal]'),
            scroll = scrollWidth();

            trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.target && e.preventDefault();

                    btnPressed = true;

                    window.forEach(item => {
                        item.classList.remove('show');
                        document.body.classList.remove('modal-open');
                    })

                    if(destroyTrigget) {
                        item.remove();
                    }

                    modal.classList.add('show');
                    document.body.classList.add('modal-open');
                    document.body.style.marginRight = `${scroll}px`;
                });
            });

            close.addEventListener('click', () => {

                window.forEach(item => {
                    item.classList.remove('show');
                    document.body.classList.remove('modal-open');
                })

                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            })

            modal.addEventListener('click', (e) => {
                if(e.target === modal) {
                    modal.classList.remove('show');
                    document.body.classList.remove('modal-open');
                    document.body.style.marginRight = `0px`;
                }
            })
        } catch(err) {
            
        }
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display = false;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none') {
                    display = true;
                }
            })
            if(!display) {
                document.querySelector(selector).classList.add('show');
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scrollWidth()}px`;
            }
        }, 1000 * Number(time))
    }


    function scrollWidth() {
        let div = document.createElement('div');
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

        document.body.append(div);
            div.style.display = 'none';
        return div.offsetWidth - div.clientWidth;
    }

    function showModalOnScroll(selector) {

        window.addEventListener('scroll', () => {
            if(!btnPressed && pageYOffset + document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
                document.querySelector(selector).click();
            }
        })

    }
    bindModal('.call-modal', '.popup', '.popup__close');
    bindModal('.open-info', '.popup__request', '.popup__request__close');
}

export default Modals;