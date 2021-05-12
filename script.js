function setUpTabs(){
    document.querySelectorAll('.tabs_btn').forEach(button => {
        button.addEventListener('click', () =>{
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs_content[data-tab="${tabNumber}"]`);

            // console.log(sideBar);
            // console.log(tabsContainer);
            // console.log(tabNumber);
            // console.log(tabToActivate);
            sideBar.querySelectorAll('.tabs_btn').forEach(btn => {
                btn.classList.remove('tabs_btn--active');
            });
            tabsContainer.querySelectorAll('.tabs_content').forEach(content => {
                content.classList.remove('tabs_content--active');
            });
            button.classList.add('tabs_btn--active');
            tabToActivate.classList.add('tabs_content--active');
        });
    });
}
setUpTabs();

