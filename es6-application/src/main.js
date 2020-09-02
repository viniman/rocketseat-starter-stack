import api from './api';

class App {
    constructor () {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    // registrar eventos
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true) {
        if (loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);

        } else {
            document.getElementById('loading').remove();
        }        
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0)
            return;

        this.setLoading();
        
        try {
            const response = await api.ge(`/repos/${repoInput}$`);

            console.log(response);

            const { name, description, html_url, owner: { avatar_url } } = response.data;// uso de desestruturação

            this.repositories.push({ // es6 feature
                name,//: 'rocketseat.com.br',
                description,//: 'Tire a sua ideia do papel e dê vida à sua startup.',
                avatar_url,//: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
                html_url//: 'http://github.com/rocketseat/'
            });

            console.log(this.repositories);

            this.inputEl.value = '';

            this.render();
        
        } catch (err) {
            alert('O repositório não existe!');
        }
    }

    render() {
        this.listEl.innerHTML = '';

        // map faz alterações e foreach não altera por conta própria
        this.repositories.forEach( repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url   );

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(respo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}


new App();