routes = [
    {
        path: '/',
        templateUrl: './index.html',
        on: {
            pageAfterIn: () => {
                displayCharacters();
            }
        }
    },
    {
        path: '/classes/',
        templateUrl: './pages/classes.html',
    },
    {
        name: 'stat',
        path: '/stat/:charId',
        templateUrl: './pages/stat.html',
        on: {
            pageInit: (e, page) => {
                const charId = page.route.params.charId;
                if (charId != null) {
                    const char = feData.characters.find(x => x.id == charId);
                    console.log(char);
                }
            }
        }
    },
    {
        path: '/comparator/',
        templateUrl: './pages/comparator.html'
    },
    {
        path: '/about/',
        templateUrl: './pages/about.html'
    },
];
  