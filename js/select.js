const home = {
    classe : document.getElementById('link_home'),
    elemento : document.getElementById('main_home'),
    adicionarEstilo(){
        this.classe.classList.add('link_actived')
    },

    removerEstilo(){
        this.classe.classList.remove('link_actived')
    }
};


const sobrenos = {
    classe : document.getElementById('link_sobrenos'),
    element : document.getElementsByClassName(''),
    adicionarEstilo(){
        this.classe.classList.add('link_actived')
    },

    removerEstilo(){
        this.classe.classList.remove('link_actived')
    }
};
const cursos = {
    classe : document.getElementById('link_cursos'),

    adicionarEstilo(){
        this.classe.classList.add('link_actived')
    },

    removerEstilo(){
        this.classe.classList.remove('link_actived')
    }
};
const contato = {
    classe : document.getElementById('link_contato'),

    adicionarEstilo(){
        this.classe.classList.add('link_actived')
    },

    removerEstilo(){
        this.classe.classList.remove('link_actived')
    }
};


home.classe.addEventListener('click', ()=>{
    home.adicionarEstilo();
    sobrenos.removerEstilo();
    cursos.removerEstilo();
    contato.removerEstilo();
})

sobrenos.classe.addEventListener('click', ()=>{
    home.removerEstilo();
    sobrenos.adicionarEstilo();
    cursos.removerEstilo();
    contato.removerEstilo();
})

cursos.classe.addEventListener('click', ()=>{
    home.removerEstilo();
    sobrenos.removerEstilo();
    cursos.adicionarEstilo();
    contato.removerEstilo();
}) 

contato.classe.addEventListener('click', ()=>{
    home.removerEstilo();
    sobrenos.removerEstilo();
    cursos.removerEstilo();
    contato.adicionarEstilo();
})